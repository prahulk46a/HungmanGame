import React from "react";
import { Link } from "react-router-dom";
import TextInputFormContainer from "../Components/text_input_form/TextInputFormContainer";

const PlayGame = () => {
  return (
    <div>
      <h1>Start Game</h1>
      <TextInputFormContainer />

      <Link to="/Start" className="text-blue-400">
        Start Game
      </Link>
    </div>
  );
};

export default PlayGame;
