import ListContainer from "../components/ListContainer";
import { Fixtures } from "../types";
import { getNextFixtures } from "../functions/getNextFixtures";
import { PageContainer } from "../styles/commonStyles";


const Home = ({ data }: Fixtures) => {

 

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
    revalidate: 60,
  };
}
