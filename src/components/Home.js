import React from "react";
import { PostList } from "./PostList";
import { AddPost } from "./AddPost";

export const Home = () => {
  return (
    <>
      <PostList />
      <AddPost />
    </>
  );
};
