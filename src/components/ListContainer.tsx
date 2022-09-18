import React from "react";
import { PageContainer, FlexCenterDiv, Heading2 } from "../styles/commonStyles";
import Fixture from "./Fixture";

//List of fixtures on a particular date (Sat Oct 01 2022)
const DateList = ({ date, fixtures }: any) => {
  const checkFixtures = () => {
    let matches = []; //Matches that take place on a date
    for (let i in fixtures.response) {
      //Loop through the fixtures,
      if (new Date(fixtures.response[i].fixture.date).toDateString() === date) {
        //check if the date of that fixture matches the passed in date
        matches.push(fixtures.response[i]); // push that fixture into the matches array
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

const ListContainer = ({ fixtures }: any) => {
  //array of all the dates for a list of fixtures
  const matchDates = fixtures.response.map((fixture: any) =>
    new Date(fixture.fixture.date).toDateString()
  );

  //Removes duplicates from list of dates
  const getDates = (matchDates: any) => {
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
        <PageContainer>
          {getDates(matchDates).map((date) => (
            <DateList date={date} fixtures={fixtures} key={date} />
          ))}
        </PageContainer>
      </div>
    </>
  );
};

export default ListContainer;
