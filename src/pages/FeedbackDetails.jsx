import { questions } from "../data";
import { useNavigate } from "react-router-dom";
const FeedbackDetails = ({ feedbacks, addnew }) => {
  const navigate = useNavigate();
  const handleAddNew = () => {
    addnew();
    navigate("/");
  };
  return (
    <section className="page-container">
      <header className="details-header">
        <div>
          <h1>Aromatic bar</h1>
          <p>{feedbacks.length} records found</p>
        </div>

        <button className="form-submit add-new" onClick={handleAddNew}>
          Add new
        </button>
      </header>
      <main className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              {questions.map((question, index) => (
                <th key={index}>{question}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => {
              const { name, email, countryCode, phone, q1, q2, q3, q4 } =
                feedback;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    {countryCode} - {phone}
                  </td>
                  <td>{q1}</td>
                  <td>{q2}</td>
                  <td>{q3}</td>
                  <td>{q4}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default FeedbackDetails;
