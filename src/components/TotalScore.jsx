import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <div>
      <div>
        <h1>{score}</h1>
        <p>Total score</p>
      </div>
    </div>
  );
};

export default TotalScore;
const Scorecontainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-sise: 24px;
    font-weight: 500px;
  }
`;
