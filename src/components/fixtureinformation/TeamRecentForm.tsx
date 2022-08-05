import React from "react";
import styled from "styled-components";
import { LightText } from "../../styles/commonStyles";

type formProps = {
  form: string;
};

const ColouredResultCircle = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 5px;
  color: #f5f5f5;
  margin-right: 5px;
  font-weight: 800;
  font-size: xx-small;
`;

const ResultsRow = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: -15px;
  max-width: 100%;

`;

const FormContainer = styled.div`


`;

const TeamRecentForm = (props: formProps) => {
  const test = (str: string) => {
    let array = [];
    for (let i = str.length - 1; i > str.length - 6; i--) {
      array.push(str.charAt(i));
    }
    return array.reverse();
  };

  return (
    <>
    <FormContainer>
      <LightText>Recent Form</LightText>
      <ResultsRow>
        {test(props.form).map(
          (result, index) =>
            (result === "W" && (
              <ColouredResultCircle key={index} bg="#00b271">
                W
              </ColouredResultCircle>
            )) ||
            (result === "D" && (
              <ColouredResultCircle key={index} bg="orange">
                D
              </ColouredResultCircle>
            )) || (
              <ColouredResultCircle key={index} bg="#fa314f">
                L
              </ColouredResultCircle>
            )
        )}
      </ResultsRow>
      </FormContainer>
    </>
  );
};

export default TeamRecentForm;
