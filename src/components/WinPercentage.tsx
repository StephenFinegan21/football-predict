import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  width: 60px;
  height: 200px;
  margin-bottom: 40px;

  @media (min-width: 800px) {
    width: 60px;
}
`;

type percentageProps = {
  played: number;
  won: number;
  draws: number;
  losses: number;
  caption: string;
};

const TeamName = styled.div`
  width: 100%;
  margin: auto;
  padding-top:10px;
  font-size: xx-small;
  text-align: center;
  @media (min-width: 800px) {
    font-size: small;
}

`

const InfoText = styled.div`
  padding: 0;
  margin: 0;
  color: #fbfbfb;
  font-weight:200
`;

const WinPercentage = ({
  played,
  won,
  losses,
  draws,
  caption,
}: percentageProps) => {
  const getPercentage = (metric: number, total: number) => {
    const score: number = Math.floor((metric / total) * 100);

    return score;
  };

  return (
    <>
      <Counter>
        <div
          style={{
            display: `${getPercentage(won, played) === 0 ? "none" : "flex"}`,
            height: `${getPercentage(won, played)}%`,
            backgroundColor: "#049c9c",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <InfoText>{getPercentage(won, played)}%</InfoText>
        </div>

        <div
          style={{
            display: `${getPercentage(draws, played) === 0 ? "none" : "flex"}`,

            backgroundColor: "#521ffa",

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
            backgroundColor: "#e01e62",

            height: `${getPercentage(losses, played)}%`,
            lineHeight: "100%",
          }}
        >
          <InfoText>{getPercentage(losses, played)}%</InfoText>
        </div>
        <TeamName>{caption}</TeamName>
      </Counter>
    </>
  );
};

export default WinPercentage;
