// components/layout.js

import Navbar from './Navbar'
import Head from 'next/head'
import styled from 'styled-components'
import { useTheme } from 'next-themes'



const Wrapper = styled.main<{ theme: string }>`
  background-color: ${(props) => (props.theme === 'light' ? `#EBECED` : "#1b1f24")};
  transition: 0.3s;
  color: ${(props) => (props.theme === 'light' ?  "#1b1f24" : `#EBECED`)};


`

export default function Layout({ children } : any) {

  const { theme } = useTheme()
  return (
    <>
     <Head>
        <title>Stats of the day</title>
        <meta
          name="description"
          content="Football stats and match information for the next Premier league fixtures."
        />
        <link rel="icon" href="/football-icon.jpeg" />
        <script defer data-domain="statsoftheday.com" src="https://plausible.io/js/plausible.js"></script>

      </Head>
      <Navbar />
     
      
      <Wrapper theme={theme}>{children}</Wrapper>
    </>
  )
}