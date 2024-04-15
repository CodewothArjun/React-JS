import { RiEmotionSadLine } from "react-icons/ri";

const WelcomeMessage = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center centered">
        <h1 className="display-5 fw-bold text-body-emphasis">No Posts</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            There is no any post <RiEmotionSadLine />
          </p>
        </div>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Fetch New Data
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeMessage;
