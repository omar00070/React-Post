import React, { useState } from "react";
import { EditPost } from "./EditPost";

export const Post = ({ id, title, content, setPosts, edited }) => {
  const removePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };
  const [edit, setEdit] = useState(false);
  return (
    <>
      <div className="post">
        <h3>{title}</h3>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className="row">
          <div className="buttons">
            <button className="edit-btn" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className="remove-btn" onClick={() => removePost(id)}>
              Remove
            </button>
          </div>
          <div className="silent">{edited ? "edited" : ""}</div>
        </div>
      </div>
      <EditPost edit={edit} id={id} setEdit={setEdit} />
    </>
  );
};
