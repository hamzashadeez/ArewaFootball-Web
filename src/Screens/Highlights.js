import React, { useEffect, useState } from "react";
import Video from "../Components/Video";
import { db } from "../Config/Firebase";

function Highlights() {
  const [videos, setVideos] = useState([]);
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
  return (
    <div>
      {videos.map((vid) => (
        <Video key={vid.id} name={vid.data.name} source={vid.data.source} timestamp={vid.data.timestamp} />
      ))}
    </div>
  );
}

export default Highlights;
