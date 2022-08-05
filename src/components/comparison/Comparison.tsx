import React from "react";
import styled from "styled-components";
import ComparisonColumn from "./ComparisonColumn";

import { TwoTeamGrid, SectionContainer } from "../../styles/commonStyles";



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
  homeName : string,
  awayName:string
};

const Comparison = ({ data, homeName, awayName }: ComparisonProps) => {
  return (
    <>
     <SectionContainer>
      <TwoTeamGrid>
        <ComparisonColumn
          form={data.form.home}
          attack={data.att.home}
          defense={data.def.home}
          poisson={data.poisson_distribution.home}
          h2h={data.h2h.home}
          goals={data.goals.home}
          total={data.total.home}
          name={homeName}
          isHomeTeam
        />
        <ComparisonColumn
          form={data.form.away}
          attack={data.att.away}
          defense={data.def.away}
          poisson={data.poisson_distribution.away}
          h2h={data.h2h.away}
          goals={data.goals.away}
          total={data.total.away}
          name={awayName}
          isHomeTeam={false}
        />
      </TwoTeamGrid>
       </SectionContainer>
    </>
  );
};

export default Comparison;
