import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  addInitialPosts: () => {},
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

  const addPost = (userId, PostTitle, PostBody, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PostBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      },
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

  const deletePost = (postId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{ postlist, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
