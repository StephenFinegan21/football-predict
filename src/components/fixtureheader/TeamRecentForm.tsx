import React from "react";
import styled from "styled-components";
import { LightText, ColouredResultCircle, FlexCenterDiv, Heading3 } from "../../styles/commonStyles";
import Column from '../Column'
import {globalTheme} from '../../styles/theme'


type formProps = {
  form: string;
};


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
      <Column>
        <LightText>Recent Form</LightText>
        <FlexCenterDiv>
          {formString(props.form).map(
            (result, index) =>
              (result === "W" && (
                <ColouredResultCircle key={index} bg={globalTheme.colour.WIN}>
                  W
                </ColouredResultCircle>
              )) ||
              (result === "D" && (
                <ColouredResultCircle key={index} bg={globalTheme.colour.DRAW}>
                  D
                </ColouredResultCircle>
              )) ||
              (result === "L" && (
                <ColouredResultCircle key={index} bg={globalTheme.colour.LOSS}>
                  L
                </ColouredResultCircle>
              )) || (
                <ColouredResultCircle key={index} bg="#a7a7a7">
                  -
                </ColouredResultCircle>
              )
          )}
        </FlexCenterDiv>
      </Column>
    </>
  );
};

export default TeamRecentForm;
