import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postlist =useLoaderData();

  return (
    <>
      <div className="Posts">
        {postlist && postlist.length === 0 && <WelcomeMessage />}
        {postlist.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
