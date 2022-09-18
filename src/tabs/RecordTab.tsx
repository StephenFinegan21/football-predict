import React from "react";
import styled from "styled-components";
import WinPercentage from "../components/WinPercentage";
import StatTable from "../components/StatTable";
import Box from "../components/Box";
import Legend from "../components/Legend";

const Flex = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-around;
  background-color: #162c41;
  padding: 5%;

  @media (min-width: 800px) {
    max-width: 100%;
    margin: auto;
  }
`;

const Record = ({ homeFixtures, awayFixtures, homeTeam, awayTeam }: any) => {
  const legendData = [
    {
      description: "win",
      colour: "#049c9c",
    },
    {
      description: "draw",
      colour: "#521ffa",
    },
    {
      description: "loss",
      colour: "#e01e62",
    },
  ];
  return (
    <>
      <Box>
        <Legend data={legendData} />
        <Flex>
          <WinPercentage
            played={homeFixtures.played.total}
            won={homeFixtures.wins.total}
            draws={homeFixtures.draws.total}
            losses={homeFixtures.loses.total}
            caption={homeTeam}
          />

          <WinPercentage
            played={awayFixtures.played.total}
            won={awayFixtures.wins.total}
            draws={awayFixtures.draws.total}
            losses={awayFixtures.loses.total}
            caption={awayTeam}
          />
        </Flex>
      </Box>
      <Box>
        <StatTable
          title="Games Played"
          homeTeam={homeTeam}
          homeStats={homeFixtures.played}
          awayTeam={awayTeam}
          awayStats={awayFixtures.played}
        />
      </Box>
      <Box>
        <StatTable
          title="Wins"
          homeTeam={homeTeam}
          homeStats={homeFixtures.wins}
          awayTeam={awayTeam}
          awayStats={awayFixtures.wins}
        />
      </Box>
      <Box>
        <StatTable
          title="Losses"
          homeTeam={homeTeam}
          homeStats={homeFixtures.loses}
          awayTeam={awayTeam}
          awayStats={awayFixtures.loses}
        />
      </Box>
      <Box>
        <StatTable
          title="Draws"
          homeTeam={homeTeam}
          homeStats={homeFixtures.draws}
          awayTeam={awayTeam}
          awayStats={awayFixtures.draws}
        />
      </Box>
    </>
  );
};

export default Record;
