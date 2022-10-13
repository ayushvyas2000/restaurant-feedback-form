import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="submitted-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </main>
  );
};

export default PageNotFound;
