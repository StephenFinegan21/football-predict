import React from "react";
import Image from "next/image";
import TeamRecentForm from "../../components/TeamRecentForm";
import LastFiveGames from "../../components/LastFiveGames";
import Comparison from "../../components/Comparison";
import { useState } from "react";
import Predictions from "../../components/Predictions";
import FixtureDataNav from "../../components/FixtureDataNav";
import Record from "../../components/Record";
import styled from "styled-components";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Goals from "../../components/Goals";

import {
  TwoTeamGrid,
  TwoTeamGridTables,
  SectionHeadingText,
  SectionContainer,
} from "../../styles/commonStyles";

const PageContainer = styled.div`
  max-width: 95%;
  padding: 5% 0;
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

const BackContainer = styled.div`
  font-size: xx-large;
  cursor: pointer;

  &:hover {
    color: #c334e3;
  }
`;

const FixtureInformation = ({ data }: any) => {
  const { teams, comparison, predictions, league } = data[0];

  const [currentTab, setCurrentTab] = useState("last-five");

  const changeTab = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      {data && (
        <PageContainer>
          <BackContainer>
            <Link href={`/`}>
              <IoMdArrowRoundBack />
            </Link>
          </BackContainer>
          <TwoTeamGrid>
            <TeamContainer>
              <div>
                <Image
                  src={teams.home.logo}
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
                  src={teams.away.logo}
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
                    awayName={teams.away.name}
                  />
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
                    <TwoTeamGridTables>
                      <Record
                        fixtures={teams.home.league.fixtures}
                        isHomeTeam={true}
                        teamName={teams.home.name}
                      />
                      <Record
                        fixtures={teams.away.league.fixtures}
                        isHomeTeam={false}
                        teamName={teams.away.name}
                      />
                    </TwoTeamGridTables>
                  </SectionContainer>
                </Section>
              </>
            </>
          )}

          {currentTab === "goals" && (
            <>
              <>
                <Section>
                  <SectionContainer>
                    <TwoTeamGridTables>
                      <Goals
                        goals={teams.home.league.goals}
                        isHomeTeam={true}
                        teamName={teams.home.name}
                      />
                      <Goals
                        goals={teams.away.league.goals}
                        isHomeTeam={false}
                        teamName={teams.away.name}
                      />
                    </TwoTeamGridTables>
                  </SectionContainer>
                </Section>
              </>
            </>
          )}
        </PageContainer>
      )}
    </>
  );
};

export default FixtureInformation;

export async function getServerSideProps(context: any) {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://football-predict.vercel.app/api/head2head",
    params: { id: context.params.slug },
  };
  const data = await axios.request(options).then(function (response: any) {
    return response.data.data;
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
