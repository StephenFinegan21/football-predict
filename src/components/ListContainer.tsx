import React from "react";

import ListItem from "./ListItem";
import styled from "styled-components";
import { Heading1 } from "../styles/commonStyles";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  margin: auto;
  background-color: white;
  @media (min-width: 800px) {
    width: 90%;
  }
`;

const ListContainer = ({ fixtures }: any) => {
  const { isLoading, data, error } = useQuery(["data"], {
    initialData: fixtures,
  });
  

  return (
    <>
      {isLoading && (
        <>
          <p>loading</p>
        </>
      )}
      <div>
        <Heading1>Stats of the day</Heading1>
        <Container>
          {data &&
            data.response.map((fixture: any) => (
              <ListItem item={fixture} key={fixture.fixture.id} />
            ))}
        </Container>
      </div>
    </>
  );
};

export default ListContainer;
