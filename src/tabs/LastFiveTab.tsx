import React from "react";

import PercentBar from "../components/PercentBar";
import styled from "styled-components";
import Box from "../components/Box";

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

const LastFiveGames = ({ away, home }: any) => {
  return (
    <>
   
      <Box>
        <h4>Overall Form</h4>

        <div>
          <p>{home.name}</p>
          <p> &#128200; {home.league.form}</p>
        </div>
        <PercentBar value={home.last_5.form} />

        <div>
          <p>{away.name}</p>
          <p>&#128200; {away.league.form}</p>
        </div>
        <PercentBar value={away.last_5.form} />
      </Box>
      <Box>
        <h4>Attacking Form</h4>

        <div>
          <p>{home.name}</p>
          <p>&#9917; {home.league.goals.for.total.total}</p>
        </div>
        <PercentBar value={home.last_5.att} />

        <div>
          <p>{away.name}</p>
          <p>&#9917; {away.league.goals.for.total.total}</p>
        </div>
        <PercentBar value={away.last_5.att} />
      </Box>
      <Box>
        <h4>Defensive Form</h4>

        <div>
          <p>{home.name}</p>
          <p>&#129349; {home.league.goals.against.total.total}</p>
        </div>
        <PercentBar value={home.last_5.def} />

        <div>
          <p>{away.name}</p>
          <p>&#129349; {away.league.goals.against.total.total}</p>
        </div>
        <PercentBar value={away.last_5.def} />
  </Box> 
    </>
  );
};

export default LastFiveGames;
