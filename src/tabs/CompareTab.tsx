import React from "react";
import styled from "styled-components";
import StatSlider from "../components/StatSlider";


const Metric = styled.div`
  border-bottom: 1px solid gray;
  padding: 30px 0;
`;

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
    
        <CenteredContainer>
          <Metric>
            <h4>Overall Form &#128200;</h4>
            <div>
              <p>{homeName} </p>
          
            </div>
            <StatSlider value={data.form.home} />

            <div>
              <p>{awayName}</p>
      
            </div>
            <StatSlider value={data.form.away} />
          </Metric>
          <Metric>
            <h4>Attacking Score &#128293;</h4>
            <div>
              <p>{homeName}</p>
         
            </div>
            <StatSlider value={data.att.home} />

            <div>
              <p>{awayName}</p>
  
            </div>
            <StatSlider value={data.att.away} />
          </Metric>
          <Metric>
            <h4>Defensive Score &#10060;</h4>
            <div>
              <p>{homeName}</p>

            </div>
            <StatSlider value={data.def.home} />

            <div>
              <p>{awayName}</p>
  
            </div>
            <StatSlider value={data.def.away} />
          </Metric>
          <Metric>
            <h4>Goals &#9917;</h4>
            <div>
              <p>{homeName}</p>
      
            </div>
            <StatSlider value={data.goals.home} />

            <div>
              <p>{awayName}</p>
    
            </div>
            <StatSlider value={data.goals.away} />
          </Metric>
          <Metric>
            <h4>Head 2 Head &#129354;</h4>
            <div>
              <p>{homeName}</p>
     
            </div>
            <StatSlider value={data.h2h.home} />

            <div>
              <p>{awayName}</p>

            </div>
            <StatSlider value={data.h2h.away} />
          </Metric>
          <Metric>
            <h4>Poisson Distribution &#129488;</h4>
            <div>
              <p>{homeName}</p>
 
            </div>
            <StatSlider value={data.poisson_distribution.home} />

            <div>
              <p>{awayName}</p>
            </div>
            <StatSlider value={data.poisson_distribution.away} />
          </Metric>
          <Metric>
            <h4>Total &#128221;</h4>
            <div>
              <p>{homeName}</p>
            </div>
            <StatSlider value={data.total.home} />

            <div>
              <p>{awayName}</p>
            </div>
            <StatSlider value={data.total.away} />
          </Metric>
        </CenteredContainer>
     
    </>
  );
};

export default Comparison;
