import Form from "../components/Form";
import Submitted from "../components/Submitted";

function FeedbackFormUI({ submitted, setSubmitted, appendToFeedbacks }) {
  return (
    <>
      {!submitted ? (
        <Form
          formSubmitted={() => setSubmitted(true)}
          appendToFeedbacks={appendToFeedbacks}
        />
      ) : (
        <Submitted />
      )}
    </>
  );
}

export default FeedbackFormUI;
