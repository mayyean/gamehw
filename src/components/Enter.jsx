import React, { useState } from "react";

const Enter = ({ onGuess }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      onGuess(inputValue.toLowerCase());
      setInputValue("");
    }
  };

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="1"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default Enter;
