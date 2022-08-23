import type { NextPage } from "next";
import Head from "next/head";
import ListContainer from "../components/ListContainer";
import axios from "axios";

const Home: NextPage = ({ data }: any) => {

  return (
    <>
      <Head>
        <title>Stats of the day</title>
        <meta
          name="description"
          content="Football stats and match information for the next Premier league fixtures."
        />
        <link rel="icon" href="/football-icon.jpeg" />
      </Head>
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

  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
