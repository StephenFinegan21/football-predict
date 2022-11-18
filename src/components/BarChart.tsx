import React from "react";
import Column from "./Column";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  width: 100px;

  @media (min-width: 600px) {
    font-size: medium;
  }
`;

const BarChart = (props: any) => {
  const { stats } = props;
  return (
    <>
      <ChartContainer>
        <Bar color="rgb(18, 228, 186)" height={stats.winPercentage} title="W" />
        <Bar
          color="rgb(103, 39, 232)"
          height={stats.drawPercentage}
          title="D"
        />
        <Bar
          color="rgb(231, 30, 104)"
          height={stats.lossPercentage}
          title="L"
        />
      </ChartContainer>
    </>
  );
};

export default BarChart;

type BarProps = {
  color: string;
  height: number;
  title: string;
};

const Bar = (props: BarProps) => {
  const { color, height, title } = props;

  const BarStyle = styled.div`
    height: 100px;
    width: 10px;
    background-color: #223c54;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 5px;
    display: flex;

    @media (min-width: 600px) {
      height: 160px;
      width: 40px;
    }
  `;

  const Height = styled.div<{ color: string; height: number }>`
    height: 100px;
    width: 10px;
    background-color: ${(props) => props.color};
    height: ${(props) => props.height.toString()}%;

    @media (min-width: 600px) {
      height: 160px;
      width: 40px;
    }
  `;
  return (
    <Column>
      <p>{height}%</p>
      <BarStyle>
        <Height color={color} height={height} />
      </BarStyle>
      <p>{title}</p>
    </Column>
  );
};
