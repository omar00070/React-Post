import React, { useContext, useState } from "react";
import { PostList } from "./PostList";
import { PostContext } from "../context/PostContext";
import { AddPost } from "./AddPost";

export const Profile = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [add, setAdd] = useState(false);
  return (
    <div className="profile">
      <div className="post col card">
        <h3>Omar Salameh</h3>
        <p>Number of Posts: {posts.length}</p>
        <button className="edit-btn" onClick={() => setAdd(true)}>
          New Post
        </button>
      </div>
      {add ? <AddPost /> : ""}
      <div>
        <div className="col">
          <h2>All Posts</h2>
        </div>
        <PostList />
      </div>
    </div>
  );
};
