import React, { useState, useRef } from "react";

export default function Textpart(props) {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const handleUpClick = () => {
    // console.log("Hello", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };

  const handleLoClick = () => {
    // console.log("Hello", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };

  const handleClClick = () => {
    // console.log("Hello", text);
    let newText = "";
    setText(newText);
    props.showAlert("All cleared", "success");
  };

  const handleSelectAll = () => {
    textRef.current.select();
    props.showAlert("Text Selacted", "success");
  };

  const handleCopy = () => {
    textRef.current.select(); // selects the text inside textarea
    navigator.clipboard.writeText(textRef.current.value);
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // split on 1 or more spaces
    setText(newText.join(" ")); // join back with a single space
    props.showAlert("Extra space removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            ref={textRef}
            className="form-control border-2"
            style={{
              backgroundColor: props.mode === "light" ? "lightgray" : "#666666",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        {/* handleUpperCase */}
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        {/* hadnleLowerCase */}
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Lowercase
        </button>
        {/* hadnleExtra spaces */}
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra spaces
        </button>
        {/* Select all */}
        <button
          type="button"
          className="btn btn-secondary mx-1"
          onClick={handleSelectAll}
        >
          Select All
        </button>

        {/* handleCopy */}
        <button
          type="button"
          className="btn btn-success mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        {/* handleclear */}
        <button
          type="button"
          className="btn btn-warning mx-1"
          onClick={handleClClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          <b>{text.split(" ").length - 1}</b> word, <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{(0.15 * text.split(" ").length).toFixed(2)}</b> seconds to read
        </p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter some text to preview hare" : text}</p>
      </div>
    </>
  );
}
