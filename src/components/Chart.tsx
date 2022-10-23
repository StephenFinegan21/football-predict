import React from "react";
import StackedChart from "./StackedChart";
import styled from "styled-components";
import {  Heading2 } from "../styles/commonStyles";
import Box from "./Box";
import Legend from "./Legend";
import Column from "./Column";
import { TeamName } from "./WinPercentage";



const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  height: fit-content;
  width: 100%;
  margin: auto;

  @media (min-width: 600px) {
   width: 60%;
  }
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
       
        <Heading2>{title}</Heading2>
        <Flex>
        <Legend data={legendData} />
        <Flex>
          <Column>
            <StackedChart data={homeData} total={total} />
            <TeamName>{homeTeamName}</TeamName>
          </Column>
          <Column>
            <StackedChart data={awayData} total={total}  />
            <TeamName>{awayTeamName}</TeamName>
          </Column>
        </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Chart;
