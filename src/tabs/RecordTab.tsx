import React from "react";
import styled from "styled-components";
import WinPercentage from "../components/WinPercentage";
import StatTable from "../components/StatTable";
import {
  ColouredResultCircle
} from "../styles/commonStyles";

const CenteredContainer = styled.div`
  width: 90%;
  margin: auto;

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 50%;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const TableContainer = styled.div`
  padding: 30px 0;
  text-align: center;
`;

const StatHeading = styled.div`
  text-align: left;
  margin-top: 100px;
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

const Record = ({ homeFixtures, awayFixtures, homeTeam, awayTeam }: any) => {
  return (
    <>
      <CenteredContainer>
      
          <Legend>
            <LegendIcon>
              <p>Win</p>
              <ColouredResultCircle bg="#26e3c0"></ColouredResultCircle>
            </LegendIcon>

            <LegendIcon>
              <p>Draw</p>
              <ColouredResultCircle bg="#f9a939"></ColouredResultCircle>
            </LegendIcon>

            <LegendIcon>
              <p>Loss</p>
              <ColouredResultCircle bg="#f03154"></ColouredResultCircle>
            </LegendIcon>
          </Legend>

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
          <TableContainer>
          <StatTable
             title='Games Played'
             homeTeam={homeTeam} homeStats={homeFixtures.played}
             awayTeam={awayTeam} awayStats={awayFixtures.played}
             />
          <StatTable
             title='Wins'
             homeTeam={homeTeam} homeStats={homeFixtures.wins}
             awayTeam={awayTeam} awayStats={awayFixtures.wins}
             />
             <StatTable
             title='Losses'
             homeTeam={homeTeam} homeStats={homeFixtures.loses}
             awayTeam={awayTeam} awayStats={awayFixtures.loses}
             />
              <StatTable
             title='Draws'
             homeTeam={homeTeam} homeStats={homeFixtures.draws}
             awayTeam={awayTeam} awayStats={awayFixtures.draws}
             />
          
         
        </TableContainer>

      
      </CenteredContainer>
    </>
  );
};

export default Record;
