import React from "react";

const Word = ({ secretWord, letters }) => {
  const showWord = secretWord
    .split("")
    .map((letter) => (letters.has(letter) ? letter : "_"))
    .join(" ");

  return <div className="Word">{showWord}</div>;
};

export default Word;
