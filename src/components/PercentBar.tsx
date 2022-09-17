import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  max-width: 100%;
  height: 10px;
  background-color: #eff1f3;
  border-radius: 2px;
  display: flex;
  
`;

const ScoreText = styled.h4<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#1fac92" : props.value < 40 ? "#eb428b" : "#eebc72"};
  margin-top: -20px;
  margin-bottom: 0;
`;

type statProps = {
  description?: string;
  value: string;
};

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const PercentBar = ({ description, value }: statProps) => {
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
            <p>{value}</p>
          </ScoreText>
          <Bar>
            <div
              style={{
                maxWidth: "100%",
                width: `${value}`,
                borderRadius: "2px",
                background: sliderColour,
                height: "100%",
              }}
            ></div>
          </Bar>
        </Flex>
      </div>
    </>
  );
};

export default PercentBar;
