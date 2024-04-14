import React from "react";
import styled from "styled-components";

const Rule = () => {
  return (
    <RulesContainer>
      <h2>How to play the Dice Game</h2>
      <div className="Text">
        <p>Select any Number</p>
        <p>
          after click on the dice if selected number is equal to dice number you
          will get same point as dice{""}
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rule;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }
`;
