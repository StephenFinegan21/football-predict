import React from "react";
import styled from "styled-components";
import Box from "../components/Box";
import PercentBar from '../components/PercentBar'



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

const Comparison = ({ data, homeName, awayName }: ComparisonProps) => {
  return (
    <>
   
        <Box>
          <h4>Overall Form &#128200;</h4>
          <div>
            <p>{homeName} </p>
          </div>
          <PercentBar value={data.form.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.form.away} />
        </Box>
        <Box>
          <h4>Attacking Score &#128293;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.att.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.att.away} />
        </Box>
        <Box>
          <h4>Defensive Score &#10060;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.def.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.def.away} />
        </Box>
        <Box>
          <h4>Goals &#9917;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.goals.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.goals.away} />
        </Box>
        <Box>
          <h4>Head 2 Head &#129354;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.h2h.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.h2h.away} />
        </Box>
        <Box>
          <h4>Poisson Distribution &#129488;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.poisson_distribution.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.poisson_distribution.away} />
        </Box>
        <Box>
          <h4>Total &#128221;</h4>
          <div>
            <p>{homeName}</p>
          </div>
          <PercentBar value={data.total.home} />

          <div>
            <p>{awayName}</p>
          </div>
          <PercentBar value={data.total.away} />
        </Box>
    
    </>
  );
};

export default Comparison;
