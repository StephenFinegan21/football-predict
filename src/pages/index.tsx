import type { NextPage } from "next";
import Head from "next/head";
import ListContainer from "../components/fixtureinformation/ListContainer";
import axios from "axios";

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Who&apos;s Playing</title>
        <meta name="Football stats and match information for the next Premier league fixtures." content="Generated by create-t3-app" />
        <link rel="icon" href="/football-icon.jpeg" />
      </Head>
      <ListContainer fixtures={data} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await axios.get("https://football-predict.vercel.app/api/test");
  const data = res.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}
