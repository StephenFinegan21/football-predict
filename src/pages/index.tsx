import ListContainer from "../components/ListContainer";
import { Fixtures } from "../types";
import { getNextFixtures } from "../functions/getNextFixtures";
import { PageContainer } from "../styles/commonStyles";
import styled from "styled-components";


const Home = ({ data }: Fixtures) => {

  const OptionsGrid = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 5%;
    margin: auto;
    max-width: 100%;
    margin-bottom: 2%;

    @media (min-width: 800px) {
      max-width: 70%;
    }

    @media (min-width: 1800px) {
      max-width: 40%;
    }
  `;

  return (
    <>
      <PageContainer>
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
