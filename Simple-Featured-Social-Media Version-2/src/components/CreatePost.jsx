import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  return (
    <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id
          </label>
          <input
            name="userId"
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your user Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="What's on your mind ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            name="body"
            rows={6}
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reactions
          </label>
          <input
            name="reaction"
            type="text"
            className="form-control"
            id="reaction"
            placeholder="How many people react to this post ?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hastags
          </label>
          <input
            name="tags"
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
