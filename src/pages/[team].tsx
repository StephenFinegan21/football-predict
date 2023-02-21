import { getNextFixtures } from "../functions/getNextFixtures";
import axios from "axios";
import Image from "next/image";
import styled from "styled-components";
import { getLastFiveFixtures } from "../functions/getLastFiveFixtures";
import {Fixture, Column } from "../components/index";

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5%;
`;

const HeaderText = styled.div`
  width: 500px;
  padding-left: 2%;
  height: 80px;
`;

const BoldLeftHeading = styled.h2`
  font-weight: 700;
  font-size: x-large;
  text-align: left;
  padding: 0;
  margin: 0;
`;

const LeagueSubHeading = styled.h3`
  font-weight: 500;
  font-size: medium;
  text-align: left;
  padding-top: 1%;
  margin: 0;
  opacity: 0.6;
`;

const Team = ({ data, recentFixtures }: any) => {
  return (
    <>
      <Header>
        <Image
          src={data.team.logo}
          alt={data.team.name + "crest"}
          width={80}
          height={80}
        />
        <HeaderText>
          <BoldLeftHeading>{data.team.name}</BoldLeftHeading>
          <LeagueSubHeading>
            {data.league.name}
          </LeagueSubHeading>
        </HeaderText>
      </Header>
      <Column>
        {recentFixtures.map((f: any) => (
          <Fixture fixture={f} key={f.fixture.id} />
        ))}
      </Column>
    </>
  );
};

export default Team;

export async function getStaticProps(context: any) {
  const slug = context.params.team;
  const recentFixtures = await getLastFiveFixtures(slug);
  const league = recentFixtures[0].league.id;

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
    params: { league: `${league}`, season: "2022", team: `${slug}` },
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
    },
  };

  const data = await axios.request(options).then(function (response: any) {
    return response.data.response;
  });

  return {
    props: { data, recentFixtures }, // will be passed to the page component as props
  
  };
}

export async function getStaticPaths() {
  const dataObject = await getNextFixtures();
  const data = dataObject.data.teamIds;

  const paths = data.map((id: any) => {
    return {
      params: {
        team: `${id}`,
      },
    };
  });

  return {
    paths,
    fallback: 'false'
  };
}
