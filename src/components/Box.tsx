import React from 'react'
import styled from 'styled-components'

const BoxStyle = styled.div`
  max-width: 95%;
  background-color: #162c41;
  margin: 20px auto;
  padding: 2rem ;

  @media (min-width: 1200px) {
    max-width: 70%;
    padding: 5rem ;
  }

 
`;

const Box = (props: any) => {
  return (
    <BoxStyle>{props.children}</BoxStyle>
  )
}

export default Box