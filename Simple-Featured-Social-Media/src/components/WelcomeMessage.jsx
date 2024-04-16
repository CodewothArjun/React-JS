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
      </div>
    </>
  );
};

export default WelcomeMessage;
