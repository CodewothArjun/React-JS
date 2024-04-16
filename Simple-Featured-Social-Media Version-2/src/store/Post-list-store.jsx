import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postlist: [],
  fetching: false,
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

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postlist, addPost, fetching, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
