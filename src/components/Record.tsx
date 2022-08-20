import React from "react";
import styled from "styled-components";
import { SectionContainer, UnderlinedHeading } from "../styles/commonStyles";

const Row = styled.tr`
  border-bottom: 1px solid #dfdfdf;
`;

const TableData = styled.td`
  padding: 12px 10px;
`;
const TableHead = styled.th`
  padding: 12px 10px;
`;


const RecordTable = styled.table<{ isHomeTeam: boolean }>`
  width: 100%;
  
  color: #7f7f7f;
  font-size: smaller;
  border-collapse: collapse;
  justify-content: "flex-start";

  @media (min-width: 600px) {
    justify-content: ${(props) => props.isHomeTeam ? "flex-start" : "flex-end"};
    margin-left: ${(props) => (props.isHomeTeam ? "0px" : "40px")};
  margin-right: ${(props) => (props.isHomeTeam ? "40px" : "0px")};
  }
`;

const FlexContainer = styled.div<{ isHomeTeam: boolean }>`
  max-width: 100%;
  display: flex;
  justify-content: "flex-start";

  @media (min-width: 600px) {
    justify-content: ${(props) =>
      props.isHomeTeam ? "flex-start" : "flex-end"};
  }
`;

const Container = styled.div`
  max-width: 100%;
  margin-bottom: 50px;
`;

const Record = ({ fixtures, isHomeTeam, teamName }: any) => {
  return (
    <>
      <Container>
        <UnderlinedHeading isHomeTeam={isHomeTeam}>
          {teamName}
        </UnderlinedHeading>
        <FlexContainer isHomeTeam={isHomeTeam}>
          <RecordTable isHomeTeam={isHomeTeam}>
            <thead>
              <tr>
                <TableHead></TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Away</TableHead>
                <TableHead>Total</TableHead>
              </tr>
            </thead>
            <tbody>
              <Row>
                <TableData>Games Played</TableData>
                <TableData>{fixtures.played.home}</TableData>
                <TableData>{fixtures.played.away}</TableData>
                <TableData>{fixtures.played.total}</TableData>
              </Row>
              <Row>
                <TableData>Wins</TableData>
                <TableData>{fixtures.wins.home}</TableData>
                <TableData>{fixtures.wins.away}</TableData>
                <TableData>{fixtures.wins.total}</TableData>
              </Row>
              <Row>
                <TableData>Draws</TableData>
                <TableData>{fixtures.draws.home}</TableData>
                <TableData>{fixtures.draws.away}</TableData>
                <TableData>{fixtures.draws.total}</TableData>
              </Row>
              <Row>
                <TableData>Losses</TableData>
                <TableData>{fixtures.loses.home}</TableData>
                <TableData>{fixtures.loses.away}</TableData>
                <TableData>{fixtures.loses.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </FlexContainer>
      </Container>
    </>
  );
};

export default Record;
