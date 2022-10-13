import FeedbackFormUI from "./pages/FeedbackFormUI";
import FeedbackDetails from "./pages/FeedbackDetails";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [feedbacks, setFeedbacks] = useState(
    JSON.parse(localStorage.getItem("feedbacks")) || []
  );
  const [submitted, setSubmitted] = useState(false);
  const appendToFeedbacks = (obj) => {
    setFeedbacks([...feedbacks, obj]);
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FeedbackFormUI
              submitted={submitted}
              setSubmitted={setSubmitted}
              appendToFeedbacks={appendToFeedbacks}
            />
          }
        />
        <Route
          path="/feedback"
          element={
            <FeedbackDetails
              addnew={() => setSubmitted(false)}
              feedbacks={feedbacks}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
