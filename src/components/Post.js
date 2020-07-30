import React, { useState } from "react";
import { EditPost } from "./EditPost";

export const Post = ({ id, title, content, setPosts, edited, time_posted }) => {
  const removePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="post">
        <div style={{ display: "flex" }}>
          <h3 style={{ flex: "1" }}>{title}</h3>
          <p
            style={{ fontSize: "0.8rem", color: "grey", position: "absolute" }}
          >
            {edited ? "Edited" : "Posted"} on:
            {"  " +
              time_posted[4] +
              "-" +
              time_posted[3] +
              "-" +
              time_posted[2] +
              " at " +
              time_posted[1] +
              ":" +
              time_posted[0]}
          </p>
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
        <div className="row">
          <div className="buttons">
            <button className="edit-btn" onClick={() => setEdit(!edit)}>
              {edit ? "Cancel" : "Edit"}
            </button>
            <button className="remove-btn" onClick={() => removePost(id)}>
              Remove
            </button>
          </div>
          <div className="silent">{edited ? "Edited" : ""}</div>
        </div>
      </div>
      <EditPost edit={edit} id={id} setEdit={setEdit} />
    </>
  );
};
