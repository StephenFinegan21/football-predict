import React from "react";

import StatSlider from "../components/StatSlider";
import styled from "styled-components";

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

const Metric = styled.div`
  background-color: #162c41;
  margin: 20px 0;
  padding: 5px 30px ;
`;

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

const LastFiveGames = ({
  away, home
}: any) => {
 
  return (
    <>
      <CenteredContainer>
      <Metric>
        <h4>Overall Form</h4>

        <div>
          <p>{home.name}</p>
          <p> &#128200; {home.league.form}</p>
        </div>
        <StatSlider value={home.last_5.form} />

        <div>
          <p>{away.name}</p>
          <p>&#128200; {away.league.form}</p>
        </div>
        <StatSlider value={away.last_5.form} />
      </Metric>
      <Metric>
        <h4>Attacking Form</h4>

        <div>
          <p>{home.name}</p>
          <p>&#9917; {home.league.goals.for.total.total}</p>
        </div>
        <StatSlider value={home.last_5.att} />

        <div>
          <p>{away.name}</p>
          <p>&#9917; {away.league.goals.for.total.total}</p>
        </div>
        <StatSlider value={away.last_5.att} />
      </Metric>
      <Metric>
        <h4>Defensive Form</h4>

        <div>
          <p>{home.name}</p>
          <p>&#129349; {home.league.goals.against.total.total}</p>
        </div>
        <StatSlider value={home.last_5.def} />

        <div>
          <p>{away.name}</p>
          <p>&#129349; {away.league.goals.against.total.total}</p>
        </div>
        <StatSlider value={away.last_5.def} />
      </Metric>
    </CenteredContainer>
    </>
  );
};

export default LastFiveGames;
