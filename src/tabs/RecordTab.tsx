import React from "react";
import styled from "styled-components";
import {
  UnderlinedHeading,
  RecordTable,
  Row,
  TableData,
  TableHead,
  FlexContainer,
} from "../styles/commonStyles";

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
