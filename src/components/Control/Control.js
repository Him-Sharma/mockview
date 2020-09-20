import React from "react";
import Card from "../../UI/Card";
import "./Control.css";

const Control = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    let url = event.target.querySelector("#urlInput").value;
    if (!url) {
      alert("Please enter valid url");
      return null;
    }
    props.onFormSubmit(url);
    console.log(`URL set as: ${url}`);
  };

  return (
    <section className="mockview-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="urlInput">Mockserver url</label>
            <input type="text" id="urlInput" data-testid="urlInput" />
          </div>
          <div className="mockview-form__actions">
            <button type="submit" data-testid="submitButton">
              Fetch Stubs
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};
export default Control;
