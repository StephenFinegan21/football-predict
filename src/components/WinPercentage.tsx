import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  max-width: 100%;
  height: 40px;
  background-color: #eff1f3;

  display: flex;
  margin-bottom: 40px;
`;

type percentageProps = {
  played: number;
  won: number;
  draws: number;
  losses: number;
};

const WinPercentage = ({ played, won, losses, draws }: percentageProps) => {
  const getPercentage = (metric: number, total: number) => {
    const score: number = (metric / total) * 100;

    return score;
  };

  return (
    <>
      <Counter>
        <div
          style={{
            maxWidth: "100%",
            width: `${getPercentage(won, played)}%`,

            backgroundColor: "#74d4c3",
            border: "2px solid #3c3c3c",
            height: "100%",
            lineHeight: "100%",
          }}
        >
          <p>{getPercentage(won, played)}%</p>
        </div>
        <div
          style={{
            maxWidth: "100%",
            width: `${getPercentage(draws, played)}%`,

            backgroundColor: "#fee9b5",
            border: "2px solid #3c3c3c",
            height: "100%",
            lineHeight: "100%",
          }}
        >
          <p>{getPercentage(draws, played)}%</p>
        </div>
        <div
          style={{
            maxWidth: "100%",
            width: `${getPercentage(losses, played)}%`,

            backgroundColor: "#f26a8a",
            border: "2px solid #3c3c3c",
            height: "100%",
            lineHeight: "100%",
          }}
        >
          <p>{getPercentage(losses, played)}%</p>
        </div>
      </Counter>
    </>
  );
};

export default WinPercentage;
