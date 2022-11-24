import type { NextPage } from "next";
import ListContainer from "../components/ListContainer";
import axios from "axios";
import { Fixtures } from "../types";
import { useState } from "react";
import { getNextFixtures } from "../functions/getNextFixtures";
import { PageContainer } from "../styles/commonStyles";
import { NavList } from "../components/fixtureheader/FixtureDataNav";
import styled from "styled-components";
import { Flex } from "../tabs/RecordTab";

const Home = ({ data }: Fixtures) => {
  const [league, setLeague] = useState(39);
  data = data.filter((d) => d.league.id === league);

  const OptionsGrid = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 5%;
    margin:auto;
    max-width: 100%;
    margin-bottom: 2%;

    @media (min-width: 800px) {
      max-width: 70%;
    }

    @media (min-width: 1800px) {
      max-width: 40%;
    }
  `

  return (
    <>
      <PageContainer>
        <OptionsGrid>
          <NavList current={league === 1} onClick={() => setLeague(1)}>
            World Cup
          </NavList>
          <NavList current={league === 39}  onClick={() => setLeague(39)}>
            Premier League
          </NavList>
        </OptionsGrid>

        <ListContainer fixtures={data} />
      </PageContainer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const dataObject = await getNextFixtures();
  const data = dataObject.data.fixtures;

  return {
    props: { data }, // will be passed to the page component as props
  };
}
