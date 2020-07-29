import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

export const EditPost = ({ id, edit, setEdit }) => {
  const [posts, setPosts] = useContext(PostContext);
  const [post] = posts.filter((post) => post.id === id);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const addPost = (e) => {
    e.preventDefault();

    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: id, title: title, content: content, edited: true },
    ]);
    setEdit(false);
  };

  return (
    <form
      className={edit ? "add-post col edit show" : "add-post col edit hide"}
      onSubmit={addPost}
    >
      <h3>Edit Post</h3>
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
      <button>Done</button>
    </form>
  );
};
