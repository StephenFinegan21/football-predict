;
import { RecordTable, TableHead, TableData, Row } from "../styles/commonStyles";

const StatRow = ({ teamName, stat }: any) => {
  return (
    <>
      <Row>
        <TableData>{teamName}</TableData>
        <TableData>{stat.home}</TableData>
        <TableData>{stat.away}</TableData>
        <TableData>{stat.total}</TableData>
      </Row>
    </>
  );
};

const StatTable = ({
  homeTeam,
  homeStats,
  awayTeam,
  awayStats,
  title,
}: any) => {
  return (
    <RecordTable>
      <thead>
        <tr>
          <TableHead style={{ textAlign: "left" }}>
            <p>{title}</p>
          </TableHead>
          <TableHead>Home</TableHead>
          <TableHead>Away</TableHead>
          <TableHead>Total</TableHead>
        </tr>
      </thead>
      <tbody>
        <StatRow teamName={homeTeam} stat={homeStats}></StatRow>
        <StatRow teamName={awayTeam} stat={awayStats}></StatRow>
      </tbody>
    </RecordTable>
  );
};

export default StatTable;
