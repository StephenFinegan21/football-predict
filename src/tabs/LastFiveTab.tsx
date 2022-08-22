import React from "react";
import {
  SectionHeadingText,
  TwoTeamGrid,
  LightText,
  GridItem,
  UnderlinedHeading,
} from "../styles/commonStyles";
import StatSlider from "../components/StatSlider";

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
  attributes,
  isHomeTeam,
  teamName,
}: attributeProps) => {
  const goals = attributes.goals;
  return (
    <>
      <div>
        <UnderlinedHeading isHomeTeam={isHomeTeam}>
          {teamName}
        </UnderlinedHeading>
        <StatSlider
          description="Attacking Form"
          value={attributes.att}
          isHomeTeam={isHomeTeam}
        />
        <StatSlider
          description="Defensive Form"
          value={attributes.def}
          isHomeTeam={isHomeTeam}
        />
        <StatSlider
          description="Overall Form"
          value={attributes.form}
          isHomeTeam={isHomeTeam}
        />

        <TwoTeamGrid>
          <GridItem>
            <LightText>Scored</LightText>
            <SectionHeadingText>{goals.for.total}</SectionHeadingText>
          </GridItem>
          <GridItem>
            <LightText>Avg Scored</LightText>
            <SectionHeadingText>{goals.for.average}</SectionHeadingText>
          </GridItem>
          <GridItem>
            <LightText>Against</LightText>{" "}
            <SectionHeadingText>{goals.against.total}</SectionHeadingText>
          </GridItem>
          <GridItem>
            <LightText>Avg against</LightText>{" "}
            <SectionHeadingText>{goals.against.average}</SectionHeadingText>
          </GridItem>
        </TwoTeamGrid>
      </div>
    </>
  );
};

export default LastFiveGames;
