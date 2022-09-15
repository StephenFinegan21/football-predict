import React from "react";
import StackedChart from "./StackedChart";
import styled from "styled-components";
import { ColouredResultCircle } from "../styles/commonStyles";

const StatTitle = styled.h3`
  font-weight: 800;
  text-align: center;

  padding-bottom: 0;
`;

const ChartContainer = styled.div`
  width: 90%;
  margin: 80px auto;
  background-color: #162c41;
  margin: 20px auto;
  padding: 5px 30px ;



  @media (min-width: 1200px) {
    max-width: 60%;
  }

  @media (min-width: 1800px) {
    max-width: 50%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  height: fit-content;
`;

const ChartSection = styled.div`
  width: 100%;
  text-align: center;
`;


const Legend = styled.div`
  max-width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const LegendIcon = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Chart = ({
  homeData,
  awayData,
  total,
  homeTeamName,
  awayTeamName,
  title,
}: any) => {
  return (
    <>
      <ChartContainer>
        <StatTitle>{title}</StatTitle>
        <Legend>
            <LegendIcon>
              <p>Home</p>
              <ColouredResultCircle bg="#521ffa"></ColouredResultCircle>
            </LegendIcon>

            <LegendIcon>
              <p>Away</p>
              <ColouredResultCircle bg="#c334e3"></ColouredResultCircle>
            </LegendIcon>
          </Legend>
        <Flex>
          <ChartSection>
            <StackedChart data={homeData} total={total} name={homeTeamName} />
            <p>{homeTeamName}</p>
          </ChartSection>
          <ChartSection>
            <StackedChart data={awayData} total={total} name={awayTeamName} />
            <p>{awayTeamName}</p>
          </ChartSection>
        </Flex>
      </ChartContainer>
    </>
  );
};

export default Chart;
