import React, { useState } from "react";
import Enter from "./components/Enter";
import Word from "./components/Word";

const App = () => {
  const [secretWord] = useState("javascript");
  const [letters, setLetters] = useState(new Set());
  const [attempts, setAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = (letter) => {
    if (!letters.has(letter)) {
      const newletters = new Set([...letters, letter]);

      if (!secretWord.includes(letter)) {
        setLetters(newletters);
        setAttempts(attempts - 1);
        if (attempts - 1 === 0) {
          setGameOver(true);
        }
      } else {
        setLetters(newletters);
      }
    }
  };

  return (
    <div className="App">
      <h1>Виселица</h1>
      <Word secretWord={secretWord} letters={letters} />
      <div className="attempts">Количество попыток: {attempts}</div>
      {!gameOver && <Enter onGuess={handleGuess} />}
      {gameOver && (
        <div className="GameOver">
          Вы проиграли! Загаданное слово было "{secretWord}"
        </div>
      )}
    </div>
  );
};

export default App;
