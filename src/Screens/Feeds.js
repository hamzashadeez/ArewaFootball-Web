import React, { useEffect, useState } from "react";
import PostForm from "../Components/PostForm";
import Post from "../Components/Post";
import { db } from "../Config/Firebase";
import firebase from "firebase";
import PostModal from "../Modals/PostModal";
import { userState } from "../Recoil/UserState";
import { useRecoilState } from "recoil";

function Feeds() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    db.collection("posts").onSnapshot((shot) => {
      setPosts(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="px-0">
      <PostForm />
      <PostModal />
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default Feeds;
