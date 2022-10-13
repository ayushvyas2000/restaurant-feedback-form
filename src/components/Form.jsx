import { useState } from "react";
import { questions, ratings } from "../data";
import countrycodes from "../countrycodes.json";
const Form = ({ appendToFeedbacks, formSubmitted }) => {
  const { countries } = countrycodes;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: null,
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  });

  const resetFormData = () => {
    formSubmitted();
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: null,
      q1: null,
      q2: null,
      q3: null,
      q4: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    appendToFeedbacks(formData);
    resetFormData();
  };

  const onChangeValue = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <main className="form-container">
      <h1 className="form-header">Aromatic bar</h1>
      <form onSubmit={handleSubmit} className="form-body">
        <div className="form-input_group">
          <div className="form-input">
            <label className="form-input_label" htmlFor="name">
              Customer Name<span>*</span>
            </label>
            <input
              value={formData.name}
              onChange={onChangeValue}
              required
              pattern="^[a-zA-Z ]*$"
              className="form-input_text"
              type="text"
              id="name"
              name="name"
              placeholder="E.g jon snow"
            />
          </div>
          <div className="form-input">
            <label className="form-input_label" htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              value={formData.email}
              onChange={onChangeValue}
              required
              className="form-input_text"
              type="email"
              id="email"
              name="email"
              placeholder="E.g abc@gmail.com"
            />
          </div>
          <div className="form-input">
            <label className="form-input_label" htmlFor="phone">
              Phone<span>*</span>
            </label>
            <div className="form-input_phone">
              <select
                required
                onChange={onChangeValue}
                className="form-input_text drop_down"
                name="countryCode"
                id="countryCode"
              >
                <option selected hidden value="+91">
                  India: +91
                </option>
                {countries.map((country) => {
                  const { code, name } = country;
                  return (
                    <option key={code + name} value={code}>
                      {name}: {code}
                    </option>
                  );
                })}
              </select>
              <input
                value={formData.phone}
                onChange={onChangeValue}
                required
                type="tel"
                pattern="[0-9]{10}"
                className="form-input_text"
                id="phone"
                name="phone"
                placeholder="9999999999"
              />
            </div>
          </div>
        </div>
        <div className="form-input_group">
          {questions.map((question, mainindex) => (
            <div key={mainindex} className="form-input">
              <label className="form-input_label">
                {question}
                <span>*</span>
              </label>
              <div onChange={onChangeValue} className="radio-container">
                {ratings.map((rating, index) => (
                  <label key={index}>
                    <input
                      required
                      type="radio"
                      name={`radio${mainindex}`}
                      value={rating}
                      id={`q${mainindex + 1}`}
                    />
                    {rating}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="form-submit" type="submit">
          Submit Review
        </button>
      </form>
    </main>
  );
};

export default Form;
