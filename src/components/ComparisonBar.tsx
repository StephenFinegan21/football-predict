import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  max-width: 100%;
  height: 10px;
  
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

const ComparisonBar = ({ values, homeColours, awayColours }: any) => {

  
  
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
                  background: homeColours[0],
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[1]}`,

                  background: "#0e2439",
                  height: "100%",
                }}
              ></div>

              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[2]}`,
                  borderRadius: "0 20px 20px 0",
                  background: awayColours[0],
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

                  height: "100%",
                  background:`${homeColours[0]}`

                   
                }}
              ></div>
               <div
                style={{
                  width: "10px",
                  background: "#0e2439",
                  height: "100%",
                }}
              ></div>
              <div
                style={{
                  maxWidth: "100%",
                  width: `${values[1]}`,
                  borderRadius: "0 5px 5px 0",
                  background:`${awayColours[0]}`,
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
