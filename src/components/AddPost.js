import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

export const AddPost = ({ setAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useContext(PostContext);

  const d = new Date();
  const [min, hour, day, month, year] = [
    d.getMinutes(),
    d.getHours(),
    d.getDate(),
    d.getMonth(),
    d.getFullYear(),
  ];

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const addPost = (e) => {
    e.preventDefault();
    const post = {
      id: Math.random() * 10000,
      title: title,
      content: content,
      time_posted: [min, hour, day, month, year],
    };
    setPosts((prevPosts) => [...prevPosts, post]);
    setTitle("");
    setContent("");
    if (document.URL.includes("/profile")) setAdd(false);
  };

  return (
    <form className="add-post col" onSubmit={addPost}>
      <h3>Add Post</h3>
      <input
        type="text"
        name="title"
        value={title}
        onChange={titleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        cols="30"
        rows="10"
        value={content}
        onChange={contentChange}
        placeholder="content"
      ></textarea>
      <button>Post</button>
    </form>
  );
};
