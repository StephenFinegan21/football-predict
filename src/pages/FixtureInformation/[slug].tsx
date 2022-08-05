import React from "react";
import { useTestGetH2H } from "../../api/useTestGetH2H";
import Image from "next/image";
import TeamRecentForm from "../../components/fixtureinformation/TeamRecentForm";
import LastFiveGames from "../../components/lastFiveGames/LastFiveGames";
import Comparison from "../../components/comparison/Comparison";
import { useState } from "react";
import Predictions from "../../components/prediction/Predictions";
import FixtureDataNav from "../../components/FixtureDataNav";
import Record from "../../components/record/Record";
import styled from "styled-components";

import {
  TwoTeamGrid,
  SectionHeadingText,
  SectionContainer,
} from "../../styles/commonStyles";

const PageContainer = styled.div`
  max-width: 100%;
  padding: 5%;
  min-height: 100vh;
  margin: auto;

  @media (min-width: 800px) {
    max-width: 80%;
  }

  @media (min-width: 1100px) {
    max-width: 70%;
  }
`;

const Section = styled.div`
  max-width: 100%;
  margin: 32px 0;
`;

const TeamContainer = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FixtureInformation = () => {
  const data = useTestGetH2H();

  const { teams, comparison, predictions, league } = data;

  const [currentTab, setCurrentTab] = useState("last-five");

  const changeTab = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <PageContainer>
        <TwoTeamGrid>
          <TeamContainer>
            <div>
              <Image
                src={"/Chelseabadge.png"}
                alt={teams.home.name + "crest"}
                width={60}
                height={60}
              />

              <SectionHeadingText> {teams.home.name}</SectionHeadingText>
            </div>
            {!teams?.home.league.form && <p>No form</p>}
            {teams.home.league.form && (
              <TeamRecentForm form={teams?.home.league.form} />
            )}
          </TeamContainer>

          <TeamContainer>
            <div>
              <Image
                src={"/Chelseabadge.png"}
                alt={teams.away.name + "crest"}
                width={60}
                height={60}
              />

              <SectionHeadingText> {teams.away.name}</SectionHeadingText>
            </div>
            {!teams?.away.league.form && <p>No form</p>}
            {teams.away.league.form && (
              <TeamRecentForm form={teams?.away.league.form} />
            )}
          </TeamContainer>
        </TwoTeamGrid>
        <FixtureDataNav currentTab={currentTab} changeTab={changeTab} />

        {currentTab === "last-five" && (
          <>
            <>
              <Section>
                <SectionContainer>
                  <TwoTeamGrid>
                    <LastFiveGames
                      attributes={teams.home.last_5}
                      isHomeTeam={true}
                      teamName={teams.home.name}
                    />

                    <LastFiveGames
                      attributes={teams.away.last_5}
                      isHomeTeam={false}
                      teamName={teams.away.name}
                    />
                  </TwoTeamGrid>
                </SectionContainer>
              </Section>
            </>
          </>
        )}

        {currentTab === "comparison" && (
          <>
            <>
              <Section>
                <Comparison 
                  data={comparison}
                  homeName={teams.home.name}
                  awayName={teams.away.name}  />
              </Section>
            </>
          </>
        )}

        {currentTab === "predictions" && (
          <>
            <>
              <Section>
                <Predictions data={predictions} />
              </Section>
            </>
          </>
        )}

        {currentTab === "record" && (
          <>
            <>
              <Section>
                <SectionContainer>
                  <TwoTeamGrid>
                    <Record
                      fixtures={teams.home.league.fixtures}
                      goals={teams.home.league.goals}
                      isHomeTeam={true}
                      teamName={teams.home.name}
                    />
                    <Record
                      fixtures={teams.away.league.fixtures}
                      goals={teams.away.league.goals}
                      isHomeTeam={false}
                      teamName={teams.away.name}
                    />
                  </TwoTeamGrid>
                </SectionContainer>
              </Section>
            </>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default FixtureInformation;
