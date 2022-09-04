import React from "react";

import ListItem from "./ListItem";
import styled from "styled-components";
import { Heading1, PageContainer } from "../styles/commonStyles";
import DateList from "./DateList";

const ListContainer = ({ fixtures }: any) => {
  const matchDates = fixtures.response.map((fixture: any) =>
    new Date(fixture.fixture.date).toDateString()
  );

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
        <Heading1>Stats of the day</Heading1>
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
