import React from "react";

import ListItem from "./ListItem";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin:auto;

  @media (min-width: 800px) {
    width: 80%;
  }
`

const Centered = styled.h2`
  text-align: center;
`

const ListContainer = ({ data }: any) => {
  return (
    <>
      <div >
        <Centered>Fixtures</Centered>
        <Container>
          {data.map((fixture: any) => (
            <ListItem item={fixture}
            key={fixture.id} />
          ))}
        </Container>
      </div>
    </>
  );
};

export default ListContainer;
