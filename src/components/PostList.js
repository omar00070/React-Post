import React, { useState, useContext } from "react";
import { Post } from "./Post";
import { PostContext } from "../context/PostContext";

export const PostList = () => {
  const [posts, setPosts] = useContext(PostContext);
  const editPost = (id) => {
    const [post] = posts.filter((post) => post.id === id);
    console.log(post);
  };

  return (
    <div className="col posts">
      {posts.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          content={post.content}
          key={post.id}
          time_posted={post.time_posted}
          edited={post.edited ? true : false}
          editPost={editPost}
          setPosts={setPosts}
        />
      ))}
    </div>
  );
};
