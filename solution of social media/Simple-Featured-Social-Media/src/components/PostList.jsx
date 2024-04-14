import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessgae";
const PostList = () => {
  const { postlist, addInitialPosts } = useContext(PostListData);

  const handleGetPost = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");
      if (res.status === 200) {
        const data = await res.json();
        addInitialPosts(data.posts);
      } else throw Error("Unable to fetch");
    } catch (err) {
      console.error(err);
    } finally {
      console.log(postlist);
    }
  };

  return (
    <>
      <div className="Posts">
        {postlist && postlist.length === 0 ? (
          <WelcomeMessage onClickGetPost={handleGetPost} />
        ) : (
          postlist && postlist.map((post) => <Post post={post} />)
        )}
      </div>
    </>
  );
};

export default PostList;
