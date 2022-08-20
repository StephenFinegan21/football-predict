import styled from "styled-components";



export const TwoTeamGrid = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns:1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const TwoTeamGridTables = styled.div`
  max-width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns:1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: 600px) {
    grid-template-columns:1fr 1fr;
  }
`;

export const Centered = styled.h2`
  text-align: center;
`



export const LightText = styled.h4`
font-size: smaller;
color: #666666;
text-align: center;
font-weight: 400;

@media (min-width: 800px) {
  font-size: medium;
  }
`;

export const UnderlinedHeading = styled.h4<{ isHomeTeam: boolean }>`
font-size: small;
color: #666666;
font-weight: 400;
text-decoration: underline;
text-underline-offset: 5px;



text-align: ${(props) => (props.isHomeTeam ? "left" : "right")};

@media (min-width: 800px) {
  font-size: large;
  }
`;

export const SectionHeadingText = styled.p`

font-size: small;
color: #282828;
text-align: center;
font-weight: 800;

@media (min-width: 800px) {
  font-size: x-large;
  }

`;

export const GridItem = styled.div`
 
  margin: 10px;
  padding-bottom: 10px;

`

export const SectionContainer = styled.div`
max-width: 100%;
margin: auto;
padding: 5% 0;
overflow: hidden;

@media (min-width: 800px) {
  
  }


`;

