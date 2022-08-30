import React from "react";
import styled from "styled-components";
import { LightText, SectionHeadingText } from "../styles/commonStyles";

const Counter = styled.div`
  max-width: 100%;
  height: 10px;
  background-color: #eff1f3;
  border-radius: 2px;
  display: flex;
  margin-bottom: 40px;
`;

const ReversibleText = styled.p`
  
`;

const ScoreText = styled.h4<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#1fac92" : props.value < 40 ? "#eb428b" : "#eebc72"};
  font-weight: 600;
  margin-top:-20px;
  margin-bottom:0;
`;

type statProps = {
  description?: string;
  value: string;

};

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const StatSlider = ({ description, value }: statProps) => {
  const sliderColour =
    parseInt(value) > 70
      ? "#1fac92"
      : parseInt(value) < 40
      ? "#eb428b"
      : "#eebc72";
  return (
    <>
    <div>
      <h4>{description}</h4>
    <Flex>
      <ScoreText value={parseInt(value)}>
        <ReversibleText >{value}</ReversibleText>
      </ScoreText>
      <Counter>
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
      </Flex>
      </div>
    </>
  );
};

export default StatSlider;
