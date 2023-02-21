
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {  CenterText, PageContainer, Flex } from "../../styles/commonStyles";
import { getNextFixtures } from "../../functions/getNextFixtures";
import  {
  LastFiveGames,
  Predictions,
  Record,
  Goals,
  Comparison
} from "../../tabs/index"

import {
  BarChart,
  Fixture,
  Box,
  FixtureHeader,
} from "../../components/index";


const Section = styled.div`
  max-width: 100%;
  margin: 32px 0;
`;

const FixtureInformation =  ({ data }: any) => {
  const { teams, comparison, predictions, h2h } = data.response[0];
  const homeTeam = teams.home;
  const awayTeam = teams.away;
  const [currentTab, setCurrentTab] = useState("last-five");


  const changeTab = (value: string) => {
    setCurrentTab(value);
  };

 


  const homeGoals = {
    first: Math.floor(
      (homeTeam.league.goals.for.total.total /
        (awayTeam.league.goals.for.total.total +
          homeTeam.league.goals.for.total.total)) *
        100
    ),
    second: Math.floor(
      (homeTeam.league.goals.against.total.total /
        (awayTeam.league.goals.against.total.total +
          homeTeam.league.goals.against.total.total)) *
        100
    ),
  };
  const awayGoals = {
    first: Math.floor(
      (awayTeam.league.goals.for.total.total /
        (awayTeam.league.goals.for.total.total +
          homeTeam.league.goals.for.total.total)) *
        100
    ),
    second: Math.floor(
      (awayTeam.league.goals.against.total.total /
        (awayTeam.league.goals.against.total.total +
          homeTeam.league.goals.against.total.total)) *
        100
    ),
  };

  return (
    <>
      {data && (
        <PageContainer>
          <FixtureHeader
            teams={teams}
            currentTab={currentTab}
            changeTab={changeTab}
          />
          {currentTab === "last-five" && (
            <>
              <>
                <Section>
                  <LastFiveGames home={homeTeam} away={awayTeam} />
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
                    homeName={homeTeam.name}
                    awayName={awayTeam.name}
                  />
                </Section>
              </>
            </>
          )}

          {currentTab === "predictions" && (
            <>
              <>
                <Section>
                  <Predictions data={predictions}
                    homeTeam={homeTeam.name}
                    awayTeam={awayTeam.name} />
                </Section>
              </>
              
            </>
          )}

          {currentTab === "record" && (
            <>
              <>
                <Section>
                  <Record
                    homeFixtures={homeTeam.league.fixtures}
                    awayFixtures={awayTeam.league.fixtures}
                    homeTeam={homeTeam.name}
                    awayTeam={awayTeam.name}
                  />
                </Section>
              </>
            </>
          )}

          {currentTab === "goals" && (
            <>
              <>
                <Section>
                  <Box>
                    <CenterText>Goals</CenterText>
                    <Flex>
                      <BarChart
                        stats={homeGoals}
                        type={"number"}
                        ann={[
                          homeTeam.league.goals.for.total.total,
                          homeTeam.league.goals.against.total.total,
                        ]}
                        titles={["⚽", "🥅"]}
                        heading={homeTeam.name}
                      />
                      <BarChart
                        stats={awayGoals}
                        type={"number"}
                        ann={[
                          awayTeam.league.goals.for.total.total,
                          awayTeam.league.goals.against.total.total,
                        ]}
                        titles={["⚽", "🥅"]}
                        heading={awayTeam.name}
                      />
                    </Flex>
                  </Box>
                  <Section>
                    <Goals
                      goals={homeTeam.league.goals}
                      teamName={homeTeam.name}
                      forTotal={
                        homeTeam.league.goals.for.total.total +
                        awayTeam.league.goals.for.total.total
                      }
                    />
                    <Goals
                      goals={awayTeam.league.goals}
                      teamName={awayTeam.name}
                      forTotal={
                        homeTeam.league.goals.for.total.total +
                        awayTeam.league.goals.for.total.total
                      }
                    />
                  </Section>
                </Section>
              </>
            </>
          )}
          {currentTab === "h2h" && (
            <>
              <>
                <Section>
                  {h2h.map((fixture: any) => (
                    <Fixture fixture={fixture} key={fixture.fixture.id} />
                  ))}
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

export async function getStaticProps(context: any) {
  const slug = context.params.slug;

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/predictions",
    params: { fixture: `${slug}` },
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
    },
  };

  const data = await axios.request(options).then(function (response: any) {
    return response.data;
  });
  console.log(data)
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {

const dataObject = await getNextFixtures();
const data = dataObject.data.ids

  const paths = data.map((id: any) => {
    return {
      params: {
        slug: `${id}`,
      },
    };
  });

  return {
    paths,
    fallback: 'false'
  };
}
