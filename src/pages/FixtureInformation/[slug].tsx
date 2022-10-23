import LastFiveGames from "../../tabs/LastFiveTab";
import Comparison from "../../tabs/CompareTab";
import { useState } from "react";
import Predictions from "../../tabs/PredictionsTab";
import Record from "../../tabs/RecordTab";
import styled from "styled-components";
import FixtureHeader from "../../components/fixtureheader/FixtureHeader";
import Goals from "../../tabs/GoalsTab";
import axios from "axios";
import { PageContainer } from "../../styles/commonStyles";
import Fixture from "../../components/Fixture";
import Chart from "../../components/Chart";


const Section = styled.div`
  max-width: 100%;
  margin: 32px 0;
`;

const FixtureInformation = ({ data }: any) => {
  const { teams, comparison, predictions, h2h } = data.response[0];
  const homeTeam = teams.home
  const awayTeam = teams.away
  const [currentTab, setCurrentTab] = useState("last-five");

  const changeTab = (value: string) => {
    setCurrentTab(value);
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
                  <Predictions data={predictions} />
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
                <Section>
                  <Chart 
                  title="Goals For"
                  homeTeamName={homeTeam.name}
                  awayTeamName={awayTeam.name}
                  homeData={homeTeam.league.goals.for}
                  awayData={awayTeam.league.goals.for}
                  total={homeTeam.league.goals.for.total.total + awayTeam.league.goals.for.total.total}/>
                </Section>

                <Section>
                  <Chart 
                  title="Goals Against"
                  homeTeamName={homeTeam.name}
                  awayTeamName={awayTeam.name}
                  homeData={homeTeam.league.goals.against}
                  awayData={awayTeam.league.goals.against}
                  total={homeTeam.league.goals.against.total.total + awayTeam.league.goals.against.total.total}/>
                </Section>
                
                  <Goals
                    goals={homeTeam.league.goals}
                    teamName={homeTeam.name}
                    forTotal={homeTeam.league.goals.for.total.total + awayTeam.league.goals.for.total.total}
                  />
                  <Goals
                    goals={awayTeam.league.goals}
                    teamName={awayTeam.name}
                    forTotal={homeTeam.league.goals.for.total.total + awayTeam.league.goals.for.total.total}

                  />
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

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { league: "39", next: "10" },
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
    },
  };

  const res = await axios.request(options);
  const paths = res.data.response.map((fixture: any) => {
    return {
      params: {
        slug: `${fixture.fixture.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
