import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      <h1>Start Game...</h1>
      <Link to="/play-game"></Link>
    </div>
  );
};

export default StartPage;
