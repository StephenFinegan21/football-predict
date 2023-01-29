import { useState } from "react";
import styled from "styled-components";
import { CenterText, Flex } from "../styles/commonStyles";
import { Box, BarChart, StatTable } from "../components/index";

type Recordprops = {
  homeFixtures: any;
  awayFixtures: any;
  homeTeam: string;
  awayTeam: string;
};

const Record = ({ homeFixtures, awayFixtures, homeTeam, awayTeam }: any) => {
  const homeStats = {
    first: Math.floor(
      (homeFixtures.wins.total / homeFixtures.played.total) * 100
    ),
    second: Math.floor(
      (homeFixtures.draws.total / homeFixtures.played.total) * 100
    ),
    third: Math.floor(
      (homeFixtures.loses.total / homeFixtures.played.total) * 100
    ),
  };
  const awayStats = {
    first: Math.floor(
      (awayFixtures.wins.total / awayFixtures.played.total) * 100
    ),
    second: Math.floor(
      (awayFixtures.draws.total / awayFixtures.played.total) * 100
    ),
    third: Math.floor(
      (awayFixtures.loses.total / awayFixtures.played.total) * 100
    ),
  };

  const homePlayHomeStats = {
    first: Math.floor(
      (homeFixtures.wins.home / homeFixtures.played.home) * 100
    ),
    second: Math.floor(
      (homeFixtures.draws.home / homeFixtures.played.home) * 100
    ),
    third: Math.floor(
      (homeFixtures.loses.home / homeFixtures.played.home) * 100
    ),
  };

  const homePlayAwayStats = {
    first: Math.floor(
      (homeFixtures.wins.away / homeFixtures.played.away) * 100
    ),
    second: Math.floor(
      (homeFixtures.draws.away / homeFixtures.played.away) * 100
    ),
    third: Math.floor(
      (homeFixtures.loses.away / homeFixtures.played.away) * 100
    ),
  };
  const awayPlayHomeStats = {
    first: Math.floor(
      (awayFixtures.wins.home / awayFixtures.played.home) * 100
    ),
    second: Math.floor(
      (awayFixtures.draws.home / awayFixtures.played.home) * 100
    ),
    third: Math.floor(
      (awayFixtures.loses.home / awayFixtures.played.home) * 100
    ),
  };
  const AwayPlayAwayStats = {
    first: Math.floor(
      (awayFixtures.wins.away / awayFixtures.played.away) * 100
    ),
    second: Math.floor(
      (awayFixtures.draws.away / awayFixtures.played.away) * 100
    ),
    third: Math.floor(
      (awayFixtures.loses.away / awayFixtures.played.away) * 100
    ),
  };

  const [stats, setStats] = useState([homeStats, awayStats]);
  const [activeBtn, setActiveBtn] = useState("all");

  const Button = styled.button`
    background-color: inherit;
    border: none;
    margin: 2px;
    border-radius: 2px;
    width: 60px;
    padding: 5px;
    cursor: pointer;
  `;

  const ButtonContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  `;

  const changeStats = (stats: any, btn: any) => {
    setStats(stats);
    setActiveBtn(btn);
  };

  return (
    <>
      <Box>
        <CenterText>Results</CenterText>
        <ButtonContainer>
          <Button
            className={activeBtn === "all" ? "active" : "inactive"}
            onClick={() => changeStats([homeStats, awayStats], "all")}
          >
            All
          </Button>
          <Button
            className={activeBtn === "home" ? "active" : "inactive"}
            onClick={() =>
              changeStats([homePlayHomeStats, awayPlayHomeStats], "home")
            }
          >
            Home
          </Button>
          <Button
            className={activeBtn === "away" ? "active" : "inactive"}
            onClick={() =>
              changeStats([homePlayAwayStats, AwayPlayAwayStats], "away")
            }
          >
            Away
          </Button>
        </ButtonContainer>
        <Flex>
          {stats[0] && (
            <BarChart
              stats={stats[0]}
              type={"percentage"}
              titles={["Win", "Draw", "Loss"]}
              heading={homeTeam}
            />
          )}
          {stats[1] && (
            <BarChart
              stats={stats[1]}
              type={"percentage"}
              titles={["Win", "Draw", "Loss"]}
              heading={awayTeam}
            />
          )}
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
