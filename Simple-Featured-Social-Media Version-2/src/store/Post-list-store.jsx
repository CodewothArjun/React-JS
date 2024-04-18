import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostlist, action) => {
  let newPostList = currentPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostlist];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(postListReducer, []);

  const addPost = (posts) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: posts,
    });
  };

  const addInitialPosts = (Posts) => {
    dispatchPostlist({
      type: "ADD_INITIAL_POST",
      payload: {
        posts: Posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostlist({
        type: "DELETE_POST",
        payload: { postId },
      });
    },
    [dispatchPostlist]
  );

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
