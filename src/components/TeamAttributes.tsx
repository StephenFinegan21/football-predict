import { relative } from "path";
import React, { useState } from "react";
import styled from "styled-components";
import { boolean } from "zod";

type goals = {
  for: {
    total: number;
    average: string;
  };
  against: {
    total: number;
    average: string;
  };
};

type attributeProps = {
  attributes: {
    form: string;
    att: string;
    def: string;
    goals: goals;
  };
  isHomeTeam: boolean;
};


const Counter = styled.div<{ isHomeTeam: boolean }>`
width: 100%;
background-color: #e0eaf1;

display: flex;
justify-content: ${(props) =>
  props.isHomeTeam ? "flex-end" : "flex-start"};
text-align: ${(props) => (props.isHomeTeam ? "right" : "left")};
`;

const TeamAttributes = (props: attributeProps) => {
  const { attributes, isHomeTeam } = props;


  return (
    <>
      <div className="text-center">
        <p>Attacking</p> <p>{attributes?.att}</p>
        <Counter isHomeTeam={isHomeTeam}>
          {attributes?.att && (
            <>
              <div
                style={{
                  width: `${attributes.att}`,
                  background: "#ee7285",
                  height: "30px",
                }}
              ></div>
            </>
          )}
        </Counter>
        <p>Defense</p>
        {attributes?.def}
        <Counter isHomeTeam={isHomeTeam}>
          {attributes?.def && (
            <div
              style={{
                width: `${attributes.def}`,
                background: "#ee7285",
                height: "30px",
              }}
            ></div>
          )}
        </Counter>
        <p>Form</p>
        {attributes?.form}
        <Counter isHomeTeam={isHomeTeam}>
          {attributes?.def && (
            <div
              style={{
                width: `${attributes.form}`,
                background: "#ee7285",
                height: "30px",
              }}
            ></div>
          )}
        </Counter>
        <p>Goals Scored:{attributes?.goals.for.total}</p>
        <p>Goals Scored per game:{attributes?.goals.for.average}</p>
        <p>Goals conceded:{attributes?.goals.against.total}</p>
        <p>Goals conceded per game:{attributes?.goals.against.average}</p>
      </div>
    </>
  );
};

export default TeamAttributes;
