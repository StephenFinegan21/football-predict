import React from "react";
import StatSlider from "../StatSlider";
import {SectionContainer, UnderlinedHeading} from '../../styles/commonStyles'
type teamDataProps = {
  form: string;
  attack: string;
  defense: string;
  poisson: string;
  h2h: string;
  goals: string;
  total: string;
  isHomeTeam: boolean;
  name:string
};

const ComparisonColumn = (props: teamDataProps) => {
  return (
    <>
      <div>
        <UnderlinedHeading isHomeTeam={props.isHomeTeam}>{props.name}</UnderlinedHeading>
        <StatSlider
          description="Form"
          value={props.form}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Attack"
          value={props.attack}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Defense"
          value={props.defense}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Poisson Distribution"
          value={props.poisson}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Head 2 Head"
          value={props.h2h}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Goals"
          value={props.goals}
          isHomeTeam={props.isHomeTeam}
        />
        <StatSlider
          description="Total"
          value={props.total}
          isHomeTeam={props.isHomeTeam}
        />
     </div>
    </>
  );
};

export default ComparisonColumn;
