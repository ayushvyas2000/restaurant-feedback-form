import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

function Submitted() {
  return (
    <main className="submitted-container">
      <div className="green-tick">
        <AiFillCheckCircle fill="green" />
      </div>
      <h1>Thank you for providing the feedback</h1>
      <p>We will work towards improving your experience</p>
      <Link to="/feedback">
        <button>Close</button>
      </Link>
    </main>
  );
}

export default Submitted;
