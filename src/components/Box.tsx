import React from 'react'
import styled from 'styled-components'

const BoxStyle = styled.div`
  background-color: #162c41;
  margin: 20px auto;
  padding: 50px ;

  @media (min-width: 1200px) {
    max-width: 60%;
  }

  @media (min-width: 1800px) {
    max-width: 50%;
  }
`;

const Box = (props: any) => {
  return (
    <BoxStyle>{props.children}</BoxStyle>
  )
}

export default Box