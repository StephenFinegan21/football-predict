import React from "react";
import StackedChart from "./StackedChart";
import styled from "styled-components";
import { ColouredResultCircle, Heading2, } from "../styles/commonStyles";
import Box from "./Box";
import Legend from "./Legend";
import Column from "./Column";



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
        <Legend data={legendData} />
        <Flex>
          <Column>
            <StackedChart data={homeData} total={total} name={homeTeamName} />
            <p>{homeTeamName}</p>
          </Column>
          <Column>
            <StackedChart data={awayData} total={total} name={awayTeamName} />
            <p>{awayTeamName}</p>
          </Column>
        </Flex>
      </Box>
    </>
  );
};

export default Chart;
