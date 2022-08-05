import React from "react";
import styled from "styled-components";
import { SectionContainer, UnderlinedHeading } from "../../styles/commonStyles";

const Metric = styled.td`
  font-weight: 800;
  color: black;
`;

const Row = styled.tr`
  border-bottom: 1px solid #dfdfdf;
`;

const TableData = styled.td`
  padding: 12px 10px;
  
`;
const TableHead = styled.th`
  padding: 12px 10px;
  
`;
const RecordTable = styled.table`

  width: 60%;
  max-width: 90%;
  margin: auto;
  color: #7f7f7f;
  font-size: smaller;
  border-collapse: collapse;
   
`;

const Record = ({ fixtures, goals, isHomeTeam, teamName }: any) => {
  return (
    <>
    <div>
      <UnderlinedHeading isHomeTeam={isHomeTeam}>{teamName}</UnderlinedHeading>
      <RecordTable>
        <thead>
          <tr>
            <TableHead></TableHead>
            <TableHead>H</TableHead>
            <TableHead>A</TableHead>
            <TableHead>Total</TableHead>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Metric>P</Metric>
            <TableData>{fixtures.played.home}</TableData>
            <TableData>{fixtures.played.away}</TableData>
            <TableData>{fixtures.played.total}</TableData>
          </Row>
          <Row>
            <Metric>W</Metric>
            <TableData>{fixtures.wins.home}</TableData>
            <TableData>{fixtures.wins.away}</TableData>
            <TableData>{fixtures.wins.total}</TableData>
          </Row>
          <Row>
            <Metric>D</Metric>
            <TableData>{fixtures.draws.home}</TableData>
            <TableData>{fixtures.draws.away}</TableData>
            <TableData>{fixtures.draws.total}</TableData>
          </Row>
          <Row>
            <Metric>L</Metric>
            <TableData>{fixtures.loses.home}</TableData>
            <TableData>{fixtures.loses.away}</TableData>
            <TableData>{fixtures.loses.total}</TableData>
          </Row>
        </tbody>
      </RecordTable>
      </div>
      </>
  );
};

export default Record;
