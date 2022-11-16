import React from "react";

import PercentBar from "../components/PercentBar";
import styled from "styled-components";
import Box from "../components/Box";
import {
  LeftBoldHeading,
  FlexCenterDiv,
  Heading2,
} from "../styles/commonStyles";
import TeamRecentForm from "../components/fixtureheader/TeamRecentForm";

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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: flex-end;
  gap: 80px;
  margin: 20px auto;
  padding-bottom:40px; 
  padding-top:40px; 
  border-bottom: 1px solid #445a6f;
 


`;

const LastFiveGames = ({ away, home }: any) => {
  return (
    <>
      <Box>
        <LeftBoldHeading>Overall Form &#128200;</LeftBoldHeading>
  
        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar value={home.last_5.form} annotation={home.league.form}/>
        </Container>

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar value={away.last_5.form} annotation={away.league.form}/>
        </Container>
      </Box>


      <Box>
        <LeftBoldHeading>Attacking Form &#9917; </LeftBoldHeading>
     
        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar value={home.last_5.att} annotation={`${home.league.goals.for.total.total} Scored`} />
        </Container>
   

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar value={away.last_5.att} annotation={`${away.league.goals.for.total.total}  Scored`}  />
        </Container>
   
      </Box>
      <Box>
        <LeftBoldHeading>Defensive Form &#129349; </LeftBoldHeading>
       
        <Container>
          <Heading2>{home.name}</Heading2>
          <PercentBar value={home.last_5.def} annotation={`${home.league.goals.against.total.total} Conceded`}  />
        </Container>
   

        <Container>
          <Heading2>{away.name}</Heading2>
          <PercentBar value={away.last_5.def} annotation={`${away.league.goals.against.total.total} Conceded`}  />
        </Container>
      </Box>
    </>
  );
};

export default LastFiveGames;
