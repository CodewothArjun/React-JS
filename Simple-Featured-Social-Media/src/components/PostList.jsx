import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postlist, addInitialPosts } = useContext(PostListData);
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
      console.log("Cleanup useEffect");
      controller.abort();
    };
  }, []);

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
