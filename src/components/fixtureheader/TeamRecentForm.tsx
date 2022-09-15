import React from "react";
import styled from "styled-components";
import { LightText, ColouredResultCircle } from "../../styles/commonStyles";

type formProps = {
  form: string;
};

const ResultsRow = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: -15px;
  max-width: 100%;
`;

const FormContainer = styled.div``;

const TeamRecentForm = (props: formProps) => {
  const formString = (str: string) => {
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
          {formString(props.form).map(
            (result, index) =>
              (result === "W" && (
                <ColouredResultCircle key={index} bg="#049c9c">
                  W
                </ColouredResultCircle>
              )) ||
              (result === "D" && (
                <ColouredResultCircle key={index} bg="#521ffa">
                  D
                </ColouredResultCircle>
              )) ||
              (result === "L" && (
                <ColouredResultCircle key={index} bg="#e01e62">
                  L
                </ColouredResultCircle>
              )) || (
                <ColouredResultCircle key={index} bg="#a7a7a7">
                  -
                </ColouredResultCircle>
              )
          )}
        </ResultsRow>
      </FormContainer>
    </>
  );
};

export default TeamRecentForm;
