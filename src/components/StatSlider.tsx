import React from "react";
import styled from "styled-components";
import { LightText, SectionHeadingText } from "../styles/commonStyles";

const Counter = styled.div<{ isHomeTeam: boolean }>`
  max-width: 100%;
  height: 40px;
  background-color: #e0eaf1;

  display: flex;
  justify-content: ${(props) => (props.isHomeTeam ? "flex-end" : "flex-start")};
  margin-bottom: 24px;
`;

const ReversibleText = styled.p<{ isHomeTeam: boolean }>`
  text-align: ${(props) => (props.isHomeTeam ? "left" : "right")};
`;

const ScoreText = styled.h4<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#00b271" : props.value < 40 ? "#fa314f" : "orange"};
  font-weight: 600;
`;

type statProps = {
  description: string;
  value: string;
  isHomeTeam: boolean;
};

const StatSlider = ({ description, value, isHomeTeam }: statProps) => {
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
            maxWidth:'100%',
            width: `${value}`,
            background: "#2e2a38",
            height: "100%",
          }}
        ></div>
      </Counter>
    </>
  );
};

export default StatSlider;
