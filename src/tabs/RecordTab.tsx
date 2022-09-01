import React from "react";
import styled from "styled-components";
import WinPercentage from "../components/WinPercentage";
import {
  UnderlinedHeading,
  RecordTable,
  Row,
  TableData,
  TableHead,
  FlexContainer,
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
  width: 40%;
  margin: auto;
  justify-content: space-between;
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
  max-width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
        <TableContainer>
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
          <RecordTable>
            <thead>
              <tr>
                <TableHead style={{ textAlign: "left", fontSize: "large" }}>
                  Games Played
                </TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Away</TableHead>
                <TableHead>Total</TableHead>
              </tr>
            </thead>
            <tbody>
              <Row>
                <TableData>{homeTeam}</TableData>
                <TableData>{homeFixtures.played.home}</TableData>
                <TableData>{homeFixtures.played.away}</TableData>
                <TableData>{homeFixtures.played.total}</TableData>
              </Row>
              <Row>
                <TableData>{awayTeam}</TableData>
                <TableData>{awayFixtures.played.home}</TableData>
                <TableData>{awayFixtures.played.away}</TableData>
                <TableData>{awayFixtures.played.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </TableContainer>

        <TableContainer>
          <RecordTable>
            <thead>
              <tr>
                <TableHead
                  style={{
                    textAlign: "left",
                    fontSize: "large",
                    color: "#209868",
                  }}
                >
                  Wins
                </TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Away</TableHead>
                <TableHead>Total</TableHead>
              </tr>
            </thead>
            <tbody>
              <Row>
                <TableData>{homeTeam}</TableData>
                <TableData>{homeFixtures.wins.home}</TableData>
                <TableData>{homeFixtures.wins.away}</TableData>
                <TableData>{homeFixtures.wins.total}</TableData>
              </Row>
              <Row>
                <TableData>{awayTeam}</TableData>
                <TableData>{awayFixtures.wins.home}</TableData>
                <TableData>{awayFixtures.wins.away}</TableData>
                <TableData>{awayFixtures.wins.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </TableContainer>

        <TableContainer>
          <RecordTable>
            <thead>
              <tr>
                <TableHead
                  style={{
                    textAlign: "left",
                    fontSize: "large",
                    color: "#e79339",
                  }}
                >
                  Draws
                </TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Away</TableHead>
                <TableHead>Total</TableHead>
              </tr>
            </thead>
            <tbody>
              <Row>
                <TableData>{homeTeam}</TableData>
                <TableData>{homeFixtures.draws.home}</TableData>
                <TableData>{homeFixtures.draws.away}</TableData>
                <TableData>{homeFixtures.draws.total}</TableData>
              </Row>
              <Row>
                <TableData>{awayTeam}</TableData>
                <TableData>{awayFixtures.draws.home}</TableData>
                <TableData>{awayFixtures.draws.away}</TableData>
                <TableData>{awayFixtures.draws.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </TableContainer>

        <TableContainer>
          <RecordTable>
            <thead>
              <tr>
                <TableHead
                  style={{
                    textAlign: "left",
                    fontSize: "large",
                    color: "#dd4266",
                  }}
                >
                  Losses
                </TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Away</TableHead>
                <TableHead>Total</TableHead>
              </tr>
            </thead>
            <tbody>
              <Row>
                <TableData>{homeTeam}</TableData>
                <TableData>{homeFixtures.loses.home}</TableData>
                <TableData>{homeFixtures.loses.away}</TableData>
                <TableData>{homeFixtures.loses.total}</TableData>
              </Row>
              <Row>
                <TableData>{awayTeam}</TableData>
                <TableData>{awayFixtures.loses.home}</TableData>
                <TableData>{awayFixtures.loses.away}</TableData>
                <TableData>{awayFixtures.loses.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </TableContainer>
      </CenteredContainer>
    </>
  );
};

export default Record;
