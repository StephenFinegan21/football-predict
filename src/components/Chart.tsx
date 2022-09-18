import React from "react";
import StackedChart from "./StackedChart";
import styled from "styled-components";
import { ColouredResultCircle } from "../styles/commonStyles";
import Box from "./Box";
import Legend from "./Legend";
const StatTitle = styled.h3`
  font-weight: 800;
  text-align: center;

  padding-bottom: 0;
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


const Chart = ({
  homeData,
  awayData,
  total,
  homeTeamName,
  awayTeamName,
  title,
}: any) => {

  const legendData = [
    {
      description: "Home",
      colour: "#521ffa",
    },
    {
      description: "Away",
      colour: "#c334e3",
    },
   
  ];
  return (
    <>
      <Box>
        <StatTitle>{title}</StatTitle>
        <Legend data={legendData} />
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
      </Box>
    </>
  );
};

export default Chart;
