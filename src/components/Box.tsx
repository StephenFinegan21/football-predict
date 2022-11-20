import React from 'react'
import styled from 'styled-components'
import { useTheme } from 'next-themes'


const BoxStyle = styled.div<{  theme: string }>`
  max-width: 95%;
  background-color: ${(props) => (props.theme === 'light' ? `#f1f1f1` : "#24292f")};
  transition: 0.3s;
  margin: 20px auto;
  padding: 2rem ;

  @media (min-width: 1200px) {
    max-width: 70%;
    padding: 5rem ;
  }

 
`;

const Box = (props: any) => {
  const { theme, setTheme } = useTheme()

  return (
    <BoxStyle theme={theme}>{props.children}</BoxStyle>
  )
}

export default Box