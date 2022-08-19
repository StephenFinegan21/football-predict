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

const ListContainer = ({ fixtures }: any) => {
//  console.log(fixtures.response)
  return (
    <>
      <div >
        <Centered>Fixtures</Centered>
    
        <Container>
          {fixtures && fixtures.response.map((fixture: any) => (
            <ListItem item={fixture}
            key={fixture.fixture.id} />
          ))}
        </Container>
        
      </div>
    </>
  );
};

export default ListContainer;
