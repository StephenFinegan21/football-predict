import React from "react";
import styled from "styled-components";
import { LightText, SectionHeadingText } from "../styles/commonStyles";

const Counter = styled.div<{ isHomeTeam: boolean }>`
  max-width: 100%;
  height: 20px;
  background-color: #eff1f3;
  border-radius: 2px;
  display: flex;
  justify-content: ${(props) => (props.isHomeTeam ? "flex-end" : "flex-start")};
  margin-bottom: 60px;
`;

const ReversibleText = styled.p<{ isHomeTeam: boolean }>`
  text-align: ${(props) => (props.isHomeTeam ? "left" : "right")};
`;

const ScoreText = styled.h4<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#1fac92" : props.value < 40 ? "#eb428b" : "#eebc72"};
  font-weight: 600;
  margin-top:-20px;
  margin-bottom:0;
`;

type statProps = {
  description: string;
  value: string;
  isHomeTeam: boolean;
};

const StatSlider = ({ description, value, isHomeTeam }: statProps) => {
  const sliderColour =
    parseInt(value) > 70
      ? "#1fac92"
      : parseInt(value) < 40
      ? "#eb428b"
      : "#eebc72";
  return (
    <>
      <LightText>
        <ReversibleText isHomeTeam={isHomeTeam}>{description}</ReversibleText>
      </LightText>
      <ScoreText value={parseInt(value)}>
        <ReversibleText isHomeTeam={isHomeTeam}>{value}</ReversibleText>
      </ScoreText>
      <Counter isHomeTeam={isHomeTeam}>
        <div
          style={{
            maxWidth: "100%",
            width: `${value}`,
            borderRadius: "2px",
            background: sliderColour,
            height: "100%",
          }}
        ></div>
      </Counter>
    </>
  );
};

export default StatSlider;
