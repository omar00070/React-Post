import React, { useContext, useState } from "react";
import { PostList } from "./PostList";
import { PostContext } from "../context/PostContext";
import { AddPost } from "./AddPost";

export const Profile = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [add, setAdd] = useState(false);
  const styles = { backgroundColor: "#c73838" };
  const latestPost = posts[posts.length - 1];
  return (
    <div className="profile">
      <div className="post col card posts">
        <h3>Omar Salameh</h3>
        <p>Number of Posts: {posts.length}</p>
        <p>{latestPost ? "Latest Post: " + latestPost.title : ""}</p>
        <button
          style={add ? styles : undefined}
          className="edit-btn"
          onClick={() => setAdd(!add)}
        >
          {add ? "Close" : "New Post"}
        </button>
      </div>
      {add ? <AddPost setAdd={setAdd} add={add} /> : ""}
      <div>
        <div className="col">
          <h2>All Posts</h2>
        </div>
        <PostList />
      </div>
    </div>
  );
};
