import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useContext(PostContext);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const addPost = (e) => {
    e.preventDefault();
    const post = {
      title: title,
      content: content,
    };
    setPosts((prevPosts) => [...prevPosts, post]);
    setTitle("");
    setContent("");
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
