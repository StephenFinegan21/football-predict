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

const Fixture = styled.div<{ isLink: boolean }>`
  padding: 20px 0;
  width: 90%;
  border-radius: 2px;
  margin: auto;
  border-bottom: #d8d8d8 1px solid;
  cursor: ${(props) => (props.isLink ? "pointer" : "default")};
  &:hover {
    background: ${(props) => (props.isLink ? "#eaeaea" : "#ffffff")};
  }

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1800px) {
    width: 50%;
  }
`;

const DateContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: small;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

const ScoreContainer = styled.div`
  width: 40%;
  margin: auto;
  text-align: center;
  font-size: small;
  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    font-size: medium;
  }
`;

const ListItem = (props: any) => {
  const { fixture, teams, goals, league } = props.fixture;

  return (
    <>
      {
        <Link
          href={goals.home == null ? `/FixtureInformation/${fixture.id}` : "#"}
        >
          <Fixture isLink={goals.home == null ? true : false}>
            <FlexCenterDiv>
              <TeamContainer>
                <ImageContainer>
                  <Image
                    src={teams.home.logo}
                    alt={teams.home.name + "crest"}
                    width={40}
                    height={40}
                  />
                </ImageContainer>
                <Heading3>{teams.home.name}</Heading3>
              </TeamContainer>
              <DateContainer>
                {goals.home !== null && (
                  <DateContainer>
                    <ScoreContainer>
                      <p>{goals.home}</p>
                      <p> - </p>
                      <p>{goals.away}</p>
                    </ScoreContainer>
                  </DateContainer>
                )}
                <Image
                  src={league.logo}
                  alt={league.logo + "logo"}
                  width={20}
                  height={20}
                />
              </DateContainer>

              <TeamContainer>
                <ImageContainer>
                  <Image
                    src={teams.away.logo}
                    alt={teams.away.name + "crest"}
                    width={40}
                    height={40}
                  />
                </ImageContainer>
                <Heading3>{teams.away.name}</Heading3>
              </TeamContainer>
            </FlexCenterDiv>
          </Fixture>
        </Link>
      }
    </>
  );
};

export default ListItem;
