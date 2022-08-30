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

const Goals = ({ goals, isHomeTeam, teamName }: any) => {
  return (
    <>
      <Container>
        <p>
          {teamName}
        </p>
        <FlexContainer>
          <RecordTable>
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
                <TableData>Goals For</TableData>
                <TableData>{goals.for.total.home}</TableData>
                <TableData>{goals.for.total.away}</TableData>
                <TableData>{goals.for.total.total}</TableData>
              </Row>
              <Row>
                <TableData>Goals Against</TableData>
                <TableData>{goals.against.total.home}</TableData>
                <TableData>{goals.against.total.away}</TableData>
                <TableData>{goals.against.total.total}</TableData>
              </Row>
            </tbody>
          </RecordTable>
        </FlexContainer>
      </Container>
    </>
  );
};

export default Goals;
