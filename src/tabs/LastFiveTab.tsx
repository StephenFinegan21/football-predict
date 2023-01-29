import styled from "styled-components";
import { Box, PercentBar } from "../components/index";
import { LeftBoldHeading, Heading2 } from "../styles/commonStyles";

type goals = {
  for: {
    total: number;
    average: string;
  };
  against: {
    total: number;
    average: string;
  };
};

type attributeProps = {
  attributes: {
    form: string;
    att: string;
    def: string;
    goals: goals;
  };
  isHomeTeam: boolean;
  teamName: string;
};

const Container = styled.div`
  display: block;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 0.8px solid #445a6f;

  @media (min-width: 600px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: flex-end;
    gap: 80px;
    margin: 20px auto;
    padding-bottom: 40px;
    padding-top: 40px;
    border-bottom: 1px solid #6b7986;
  }
`;

type LastFiveProps = {
  home: {
    id: number;
    name: string;
    logo: string;
    last_5: {
      att: string;
      def: string;
      form: string;
      goals: {
        against: {
          average: string;
          total: number;
        };
        for: {
          average: string;
          total: number;
        };
      };
    };
    league: any;
  };
  away: {
    id: number;
    name: string;
    logo: string;
    last_5: {
      att: string;
      def: string;
      form: string;
      goals: {
        against: {
          average: string;
          total: number;
        };
        for: {
          average: string;
          total: number;
        };
      };
    };
    league: any;
  };
};

const LastFiveGames = ({ away, home }: LastFiveProps) => {
  console.log("lst 5 ", home);
  return (
    <>
      <Box>
        <LeftBoldHeading>Overall Form &#128200;</LeftBoldHeading>

        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar value={home.last_5.form} annotation={home.league.form} />
        </Container>

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar value={away.last_5.form} annotation={away.league.form} />
        </Container>
      </Box>

      <Box>
        <LeftBoldHeading>Attacking Form &#9917; </LeftBoldHeading>

        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar
            value={home.last_5.att}
            annotation={`${home.last_5.goals.for.total} Scored`}
          />
        </Container>

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar
            value={away.last_5.att}
            annotation={`${away.last_5.goals.for.total}  Scored`}
          />
        </Container>
      </Box>
      <Box>
        <LeftBoldHeading>Defensive Form &#129349; </LeftBoldHeading>

        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar
            value={home.last_5.def}
            annotation={`${home.last_5.goals.against.total} Conceded`}
          />
        </Container>

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar
            value={away.last_5.def}
            annotation={`${away.last_5.goals.against.total} Conceded`}
          />
        </Container>
      </Box>
    </>
  );
};

export default LastFiveGames;
