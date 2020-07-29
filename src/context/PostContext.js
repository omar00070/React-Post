import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([
    // {
    //   title: "helloworld",
    //   content: "this is a helloworld text",
    //   id: 1,
    //   time: [1, 2, 1, 1]
    // },
    // {
    //   title: "helloworld1",
    //   content: "this is a helloworld text1",
    //   id: 2,
    // },
    // {
    //   title: "helloworld2",
    //   content: "this is a helloworld text2",
    //   id: 3,
    // },
  ]);
  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {props.children}
    </PostContext.Provider>
  );
};
