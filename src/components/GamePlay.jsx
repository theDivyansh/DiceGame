import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import NumberSelector from "./NumberSelector";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rule from "./Rule";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected the number");
      return;
    }

    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };
  const num = 1;
  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {`${showRules ? "Hide" : "Show"} Rules`}
        </Button>
      </div>
      {showRules && <Rule />}
    </Maincontainer>
  );
};

export default GamePlay;

const Maincontainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    gap: 10px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
