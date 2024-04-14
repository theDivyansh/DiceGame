import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="Dice" onClick={roleDice}>
        <img src={`/public/asset/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on the Dice</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  margin-top: 48px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 24px;
  }
  .Dice {
    cursor: pointer;
  }
`;
