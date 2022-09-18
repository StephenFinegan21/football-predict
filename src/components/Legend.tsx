import React from "react";
import styled from "styled-components";
import { ColouredResultCircle } from "../styles/commonStyles";

const LegendStyle = styled.div`
  max-width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 800px) {
    width: 50%;
  }
`;

const LegendIcon = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Legend = ({ data }: any) => {
  return (
    <LegendStyle>
      {data.map((data : any) => (
        <LegendIcon>
          <p>{data.description}</p>
          <ColouredResultCircle bg={data.colour}></ColouredResultCircle>
        </LegendIcon>
      ))}
    </LegendStyle>
  );
};

export default Legend;
