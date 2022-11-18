import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  max-width: 100%;
  height: 40px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 0;
`;

const Block = styled.div`
  display: block;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ComparisonBar = ({ values }: any) => {
  return (
    <>
      <Block>
        <Flex>
          <p>{values[0]}</p>
          <p>{values[1]} </p>
       {values[2] &&  <p>{values[2]}</p> }
        </Flex>
        <Bar>
          {values.length > 2 ? (
            <>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[0]}`,
                  borderRadius: "20px 0 0 20px",
                  background: "#46b3f1",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[1]}`,

                  background: "#631fd8",
                  height: "100%",
                }}
              ></div>

              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[2]}`,
                  borderRadius: "0 20px 20px 0",
                  background: "#ff3c83",
                  height: "100%",
                }}
              ></div>
            </>
          ) : (
            <>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[0]}`,
                  borderRadius: "5px 0 0 5px",
                  background: "#3680ff",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[1]}`,
                  borderRadius: "0 5px 5px 0",
                  background: "#54ffd4",
                  height: "100%",
                }}
              ></div>
            </>
          )}
        </Bar>
      </Block>
    </>
  );
};

export default ComparisonBar;
