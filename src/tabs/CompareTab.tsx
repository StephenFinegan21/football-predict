import styled from "styled-components";
import {Box, ComparisonBar} from "../components/index";
import {getColours} from '../functions/getColour'
import { LeftBoldHeading } from "../styles/commonStyles";


type ComparisonProps = {
  data: {
    form: {
      home: string;
      away: string;
    };
    att: {
      home: string;
      away: string;
    };
    def: {
      home: string;
      away: string;
    };
    poisson_distribution: {
      home: string;
      away: string;
    };
    h2h: {
      home: string;
      away: string;
    };
    goals: {
      home: string;
      away: string;
    };
    total: {
      home: string;
      away: string;
    };
  };
  homeName: string;
  awayName: string;
};

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Comparison = ({ data, homeName, awayName }: ComparisonProps) => {
 
  
 
  const stats = [
    {
      title: "Total",
      icon: "🥇",
      home: data.total.home,
      away: data.total.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "Form",
      icon: "📈",
      home: data.form.home,
      away: data.form.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "Attacking Score",
      icon: "🔥",
      home: data.att.home,
      away: data.att.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "Defensive Score",
      icon: "🚌",
      home: data.def.home,
      away: data.def.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "Goals",
      icon: "⚽",
      home: data.goals.home,
      away: data.goals.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "H2H",
      icon: "🥊",
      home: data.h2h.home,
      away: data.h2h.away,
      homeName: homeName,
      awayName: awayName,
    },
    {
      title: "Poisson Distribution",
      icon: "🧐",
      home: data.poisson_distribution.home,
      away: data.poisson_distribution.away,
      homeName: homeName,
      awayName: awayName,
    },
  ];
  return (
    <>
      {stats.map((s) => (
        <Stat
          key={s.title}
          title={s.title}
          icon={s.icon}
          home={s.home}
          away={s.away}
          homeName={s.homeName}
          awayName={s.awayName}
        />
      ))}
    </>
  );
};

export default Comparison;

const Stat = ({ title, icon, home, away, homeName, awayName }: any) => {

  const homeColours = getColours(homeName)
  const awayColours = getColours(awayName)
  return (
    <Box>
      <LeftBoldHeading>
        {title}{" "}
        <span role="img" aria-label="stat">
          {icon}
        </span>
      </LeftBoldHeading>
      <ComparisonBar values={[home, away]}
       homeColours={homeColours ? homeColours : ['rgb(108, 171, 221)', 'white']}
        awayColours={awayColours ? awayColours : ['rgb(239, 1, 7), white']}/>
      <Flex>
        <p>{homeName}</p>
        <p>{awayName}</p>
      </Flex>
    </Box>
  );
};
