import React, { useEffect, useState } from "react";
import PostForm from "../Components/PostForm";
import Post from "../Components/Post";
import { db } from "../Config/Firebase";

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
    <div className="px-3">
      <PostForm />
      {posts.map((post) => <Post key={post.key} data={post} />)}
    </div>
  );
}

export default Feeds;
