import React from "react";
import styled from "styled-components";
import { useTheme } from 'next-themes'

const Bar = styled.div`
  max-width: 100%;
  height: 10px;
  background-color: #eff1f3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;

const ScoreText = styled.p<{ value: number }>`
  color: ${(props) =>
    props.value > 70 ? "#1fac92" : props.value < 40 ? "#eb428b" : "#eebc72"};

  color: #f5f1f1;
  padding: 0;
  margin: 0;
  padding-left: 20px;
`;

type statProps = {
  annotation?: string;
  value: string;
};

const Block = styled.div`
  display: block;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const FormString = styled.p<{ theme: string }>`
  margin: 0;
  letter-spacing: 3px;
  color:  ${(props) => (props.theme === 'light' ?  "#24292f" : `#dedede`)};
  transition:0.3s;
  font-size: 0.8rem;
`;

const PercentBar = ({ annotation, value }: statProps) => {
  const { theme } = useTheme()

  const sliderColour =
    parseInt(value) > 70
      ? "#1fac92"
      : parseInt(value) < 40
      ? "#eb428b"
      : "#eebc72";
  return (
    <>
      <Block>
        <FormString theme={theme}>{annotation}</FormString>
        <Flex>
          <Bar>
            <div
              style={{
                maxWidth: "100%",
                width: `${value}`,
                borderRadius: "5px",
                background: sliderColour,
                height: "100%",
              }}
            ></div>
          </Bar>
          <ScoreText value={parseInt(value)}>{value}</ScoreText>
        </Flex>
      </Block>
    </>
  );
};

export default PercentBar;
