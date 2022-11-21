import type { NextPage } from "next";
import ListContainer from "../components/ListContainer";
import axios from "axios";
import { Fixtures } from "../types";
import { useState } from "react";


const Home = ({data}: Fixtures) => {

const [league, setLeague] = useState(1)
data = data.filter(d => d.league.id === league)
  
  return (
    <>
      <button onClick={() => setLeague(1)}>World Cup</button>
      <button onClick={() => setLeague(39)}>Premier League</button>
      <ListContainer fixtures={data} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { league: "39", next: "10" },
    headers: {
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
    },
  };
  const premierLeague = await axios
    .request(options)
    .then(function (response) {

      return response.data.response
    })
    .catch(function (error) {
      console.error('err', error);
    });

    const world = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { league: "1", next: "15" },
      headers: {
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
      },
    };
    const worldData = await axios
      .request(world)
      .then(function (response) {
  
        return response.data.response
      })
      .catch(function (error) {
        console.error('err', error);
      });
      const data = [...premierLeague , ...worldData]

  
  return {
    props: { data }, // will be passed to the page component as props
  };
}
