import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  Heading3,
  LightText,
  FlexCenterDiv,
  TeamContainer,
  ImageContainer,
} from "../styles/commonStyles";

const Fixture = styled.div`
  padding: 40px;
  border-radius: 2px;
  margin: 25px auto;
  border-bottom: #d8d8d8 1px solid;
`;

const DateContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: small;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

const ListItem = (props: any) => {
  const { fixture, teams } = props.item;

  const date = new Date(fixture.date);
  return (
    <>
      <Fixture>
        <FlexCenterDiv>
          <TeamContainer>
            <ImageContainer>
              <Image
                src={teams.home.logo}
                alt={teams.home.name + "crest"}
                width={50}
                height={50}
              />
            </ImageContainer>
            <Heading3>{teams.home.name}</Heading3>
          </TeamContainer>
          <DateContainer>
            <LightText>{date.toDateString()}</LightText>
          </DateContainer>
          <TeamContainer>
            <ImageContainer>
              <Image
                src={teams.away.logo}
                alt={teams.away.name + "crest"}
                width={50}
                height={50}
              />
            </ImageContainer>
            <Heading3>{teams.away.name}</Heading3>
          </TeamContainer>
        </FlexCenterDiv>
        <DateContainer>
          <Link href={`/FixtureInformation/${fixture.id}`}>Stats</Link>
        </DateContainer>
      </Fixture>
    </>
  );
};

export default ListItem;
