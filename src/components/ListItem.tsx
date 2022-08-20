import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Fixture = styled.div `
  background-color: #f6f6f6;
  padding: 40px;
  border-radius:2px;
  margin:  25px auto;
`

const FixtureDetails = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TeamContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const DateContainer = styled.div `
  width: 100%;
  text-align: center;
  font-size: small;

  @media (min-width: 800px) {
  font-size: medium;
  }
`

const TeamName = styled.h3 `
 
  font-size: x-small;

  @media (min-width: 800px) {
  font-size: medium;
  }
`


const ListItem = (props: any) => {
  const { fixture, teams } = props.item;
 

  const date = new Date(fixture.date);
  return (
    <>
      <Fixture>
        <FixtureDetails>
          <TeamContainer>
            
            <Image
              src={teams.home.logo}
              alt={teams.home.name + "crest"}
              width={50}
              height={50}
            />
            <TeamName>{teams.home.name}</TeamName>
          </TeamContainer>
          <DateContainer>
          <p>{date.toDateString()}</p>
          </DateContainer>
          <TeamContainer>
          
            <Image
              src={teams.away.logo}
              alt={teams.away.name + "crest"}
              width={50}
              height={50}
            />
            <TeamName>{teams.away.name}</TeamName>
            
          </TeamContainer>
        </FixtureDetails>
        <DateContainer>
          <Link href={`/FixtureInformation/${fixture.id}`}>Stats</Link>
        </DateContainer>
      </Fixture>
    </>
  );
};

export default ListItem;
