import React, { useEffect, useState } from "react";
import Video from "../Components/Video";
import { db } from "../Config/Firebase";
import firebase from "firebase";
import { userState } from "../Recoil/UserState";
import { useRecoilState } from "recoil";

function Highlights() {
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    db.collection("videos").onSnapshot((shot) => {
      setVideos(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged((userData) => {
        if (userData) {
          db.collection("Users")
            .doc(userData.displayName)
            .get()
            .then((user1) => {
              setUser(user1.data());
            });
        } else {
          console.log("No user here");
        }
      });
    }
  }, []);
 
  return (
    <div>
      {videos.map((vid) => (
        <Video key={vid.id} name={vid.data.name} source={vid.data.source} timestamp={vid.data.timestamp} />
      ))}
    </div>
  );
}

export default Highlights;
