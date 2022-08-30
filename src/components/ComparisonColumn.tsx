import React from "react";
import StatSlider from "./StatSlider";
import {SectionContainer, UnderlinedHeading} from '../styles/commonStyles'
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
         
        />
        <StatSlider
          description="Attack"
          value={props.attack}
        
        />
        <StatSlider
          description="Defense"
          value={props.defense}
        
        />
        <StatSlider
          description="Poisson Distribution"
          value={props.poisson}
       
        />
        <StatSlider
          description="Head 2 Head"
          value={props.h2h}
      
        />
        <StatSlider
          description="Goals"
          value={props.goals}
       
        />
        <StatSlider
          description="Total"
          value={props.total}
       
        />
     </div>
    </>
  );
};

export default ComparisonColumn;
