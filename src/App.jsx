import { Route, Routes } from "react-router-dom";
import PlayGame from "./Pages/PlayGame";
import StartPage from "./Pages/StartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
}

export default App;
