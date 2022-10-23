import React from "react";
import styled from "styled-components";
import { ColouredResultCircle } from "../styles/commonStyles";

const LegendStyle = styled.div`
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 800px) {
    width: 40%;
 
  }
`;

const LegendIcon = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  


  @media (min-width: 800px) {
    width: 70px;
  
  }

`;

const Legend = ({ data }: any) => {
  return (
    <LegendStyle>
      {data.map((data : any) => (
        <LegendIcon key={data.description}>
          <p>{data.description}</p>
          <ColouredResultCircle bg={data.colour}></ColouredResultCircle>
        </LegendIcon>
      ))}
    </LegendStyle>
  );
};

export default Legend;
