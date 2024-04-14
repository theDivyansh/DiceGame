import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      <div>
        {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      </div>
    </>
  );
}

export default App;
