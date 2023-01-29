;
import { type } from "os";
import { RecordTable, TableHead, TableData, Row } from "../styles/commonStyles";

type StatProps = {
  teamName: string;
  stat: {
    home: string;
    away: string;
    total: string;

  }
}

const StatRow = ({ teamName, stat }: StatProps ) => {
  console.log(teamName, stat)
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

type StatTableProps = {
  homeTeam: string;
  homeStats: {
    home: string;
    away: string;
    total: string;
  };
  awayTeam: string;
  awayStats: {
    home: string;
    away: string;
    total: string;
  };
  title: string;
};


const StatTable = ({
  homeTeam,
  homeStats,
  awayTeam,
  awayStats,
  title,
}: StatTableProps) => {
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
