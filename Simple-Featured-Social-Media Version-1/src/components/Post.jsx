import { PostList as PostData } from "../store/Post-list-store";
import { useContext } from "react";

//icons
import { FaHeart } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import animaImg from "../assets/animateImg.jpg";
import { RiDeleteBinFill } from "react-icons/ri";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostData);
  return (
    <>
      <div className="card" style={{ width: "22rem" }}>
        <img src={animaImg} className="card-img-top" alt="Image" />
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <RiDeleteBinFill />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {/* For tags */}
          {post.tags.map((tag) => (
            <span className="badge text-bg-success tags" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            This post has been reacted by {post.reaction} people.
          </div>

          <div className="button-imp">
            <a href="#" className="btn btn-primary">
              <FaHeart />
            </a>
            <a href="" className="btn btn-primary">
              <FaShareAlt />
            </a>
            <a href={animaImg} className="btn btn-primary" download={animaImg}>
              <FaArrowDown />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
