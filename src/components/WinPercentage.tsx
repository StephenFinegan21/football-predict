import React from "react";
import styled from "styled-components";
import { FlexCenterDiv } from "../styles/commonStyles";

const Counter = styled.div`
  width: 100px;
  height: 200px;
  background-color: #eff1f3;
  margin-bottom: 40px;
`;

type percentageProps = {
  played: number;
  won: number;
  draws: number;
  losses: number;
  caption: string;
};

const InfoText = styled.div`
  padding: 0;
  margin: 0;
  color: #fbfbfb;
`;

const WinPercentage = ({ played, won, losses, draws, caption }: percentageProps) => {
  const getPercentage = (metric: number, total: number) => {
    const score: number = (metric / total) * 100;

    return score;
  };

  return (
    <>
      <Counter>
        <div
          style={{
            display: `${getPercentage(won, played) === 0 ? "none" : "flex"}`,
            height: `${getPercentage(won, played)}%`,
            backgroundColor: "#26e3c0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InfoText>{getPercentage(won, played)}%</InfoText>
        </div>

        <div
          style={{
            display: `${getPercentage(draws, played) === 0 ? "none" : "flex"}`,

            backgroundColor: "#f9a939",

            height: `${getPercentage(draws, played)}%`,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InfoText>{getPercentage(draws, played)}%</InfoText>
        </div>

        <div
          style={{
            display: `${getPercentage(losses, played) === 0 ? "none" : "flex"}`,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f03154",

            height: `${getPercentage(losses, played)}%`,
            lineHeight: "100%",
          }}
        >
          <InfoText>{getPercentage(losses, played)}%</InfoText>
        </div>
        <p>{caption}</p>
      </Counter>
    </>
  );
};

export default WinPercentage;
