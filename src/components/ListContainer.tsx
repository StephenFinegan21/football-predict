;
import { PageContainer, FlexCenterDiv, Heading2 } from "../styles/commonStyles";
import { singleFixture } from "../types";
import Fixture from "./Fixture";

//List of fixtures on a particular date (Sat Oct 01 2022)
const DateList = ({ date, fixtures }: any) => {
  const checkFixtures = () => {
    let matches = []; //Matches that take place on a date
    for (let i in fixtures) {
      //Loop through the fixtures,
      if (new Date(fixtures[i].fixture.date).toDateString() === date) {
        //check if the date of that fixture matches the passed in date
        matches.push(fixtures[i]); // push that fixture into the matches array
      }
    }
    return matches;
  };


  return (
    <>
      <FlexCenterDiv>
        <Heading2>{date}</Heading2>
      </FlexCenterDiv>
      {checkFixtures().map((f) => (
        <Fixture fixture={f} key={f.fixture.id} />
      ))}
    </>
  );
};

type matchDateProps = string[]

const ListContainer = ({fixtures} : any ) => {



  //array of all the dates for a list of fixtures
  const matchDates = fixtures.map((fixture: singleFixture) =>
  
    new Date(fixture.fixture.date).toDateString()
  );


  //Removes duplicates from list of dates
  const getDates = (matchDates: matchDateProps) => {
    let dates = [];
    for (let i = 0; i < matchDates.length; i++) {
      if (matchDates[i] != matchDates[i - 1]) {
        dates.push(matchDates[i]);
      }
    }
    return dates;
  };

  return (
    <>
      <div>
       
          {getDates(matchDates).map((date) => (
            <DateList date={date} fixtures={fixtures} key={date} />
          ))}
      
      </div>
    </>
  );
};

export default ListContainer;
