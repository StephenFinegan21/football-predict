import React from "react";
import { LightText, SectionHeadingText} from "../../styles/commonStyles";

const Predictions = (props: any) => {
  return (
    <>
      <div>
        <SectionHeadingText>Predicted Winner</SectionHeadingText>
        <LightText>{props.data.winner.name}</LightText>
        <SectionHeadingText>Advice</SectionHeadingText>
        <LightText>{props.data.advice}</LightText>
      </div>
    </>
  );
};

export default Predictions;
