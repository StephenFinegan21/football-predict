import React from "react";
import FixtureDataNav from "./FixtureDataNav";
import TeamRecentForm from "./TeamRecentForm";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import styled from "styled-components";

import {
  SectionHeadingText,
  TeamContainer,
} from "../../styles/commonStyles";

const BackContainer = styled.div`
  font-size: xx-large;
  cursor: pointer;

  &:hover {
    color: #c334e3;
  }
`;

type headerProps = {
  teams: any;
  currentTab: string;
  changeTab: Function;
};

 const TwoTeamGrid = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const FixtureHeader = ({ teams, currentTab, changeTab }: headerProps) => {
  return (
    <>
      <Link href={`/`}>
        <BackContainer>
          <IoMdArrowRoundBack />
        </BackContainer>
      </Link>

      <TwoTeamGrid>
        <TeamContainer>
          <div>
            <Image
              src={teams.home.logo}
              alt={teams.home.name + "crest"}
              width={60}
              height={60}
            />

            <SectionHeadingText>{teams.home.name}</SectionHeadingText>
          </div>
          {!teams?.home.league.form && <p>No form</p>}
          {teams.home.league.form && (
            <TeamRecentForm form={teams?.home.league.form} />
          )}
        </TeamContainer>

        <TeamContainer>
          <div>
            <Image
              src={teams.away.logo}
              alt={teams.away.name + "crest"}
              width={60}
              height={60}
            />

            <SectionHeadingText> {teams.away.name}</SectionHeadingText>
          </div>
          {!teams?.away.league.form && <p>No form</p>}
          {teams.away.league.form && (
            <TeamRecentForm form={teams?.away.league.form} />
          )}
        </TeamContainer>
      </TwoTeamGrid>
      <FixtureDataNav currentTab={currentTab} changeTab={changeTab} />
    </>
  );
};

export default FixtureHeader;
