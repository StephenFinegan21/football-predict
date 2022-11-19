import React from "react";
import Column from "./Column";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;

  margin: auto;

  @media (min-width: 600px) {
    font-size: medium;
  }
`;

const BarChart = (props: any) => {
  const { stats, type, ann, titles } = props;

 

  return (
    <>
      <ChartContainer>
        <Bar color="rgb(18, 228, 186)" height={stats.first} title={titles[0]} ann={ann ? ann[0] : null}/>
        <Bar color="rgb(103, 39, 232)" height={stats.second} title={titles[1]}ann={ann ? ann[1] : null} />
        {Object.keys(stats).length > 2 &&

        <Bar color="rgb(231, 30, 104)" height={stats.third} title={titles[2]} ann={ann ? ann[2] : null} />
        }
      </ChartContainer>
    </>
  );
};

export default BarChart;

type BarProps = {
  color: string;
  height: number;
  title: string;
  ann? : any
};

const Bar = (props: BarProps) => {
  const { color, height, title, ann } = props;

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

  const ChartText = styled.div`
    font-size: small;
  `

  const Height = styled.div<{ color: string; height: number }>`
    height: 100px;

    background-color: ${(props) => props.color};
    height: ${(props) => props.height}%;

    @media (min-width: 600px) {
      height: ${(props) => props.height}%;
      width: 40px;
    }
  `;
  return (
    <Column>
      <ChartText>{ann ? ann : height}</ChartText>
      <BarStyle>
        <Height color={color} height={height} />
      </BarStyle>
      <ChartText>{title}</ChartText>
    </Column>
  );
};
