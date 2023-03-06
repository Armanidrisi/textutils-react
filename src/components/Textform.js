import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    //  console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("my-box");
    text.select();
    document.execCommand("copy");
    props.showAlert("Text Copied To Clipboard!", "success");
    document.getSelection().removeAllRange();
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1b1b1b" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex  lg:flex-row flex-column">
          <button
            className="btn btn-primary mx-1 mb-3"
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 mb-3"
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 mb-3"
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 mb-3"
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary mx-1 mb-3"
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minute Will Take To Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
