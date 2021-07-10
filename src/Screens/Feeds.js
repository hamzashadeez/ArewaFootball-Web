import React, { useEffect, useState } from "react";
import PostForm from "../Components/PostForm";
import Post from "../Components/Post";
import { db } from "../Config/Firebase";
import PostModal from "../Modals/PostModal";

function Feeds() {
  const [posts, setPosts] = useState([]);
  
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
      {posts.map((post) => <Post key={post.id} data={post} />)}
    </div>
  );
}

export default Feeds;
