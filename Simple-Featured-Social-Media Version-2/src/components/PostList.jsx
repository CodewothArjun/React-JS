import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postlist, fetching } = useContext(PostListData);

  return (
    <>
      <div className="Posts">
        {fetching && <LoadingSpinner />}
        {!fetching && postlist && postlist.length === 0 && <WelcomeMessage />}
        {!fetching &&
          postlist.map((post) => <Post post={post} key={post.id} />)}
      </div>
    </>
  );
};

export default PostList;
