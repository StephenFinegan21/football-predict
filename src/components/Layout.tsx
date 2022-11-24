// components/layout.js

import Navbar from './Navbar'
import Head from 'next/head'
import styled from 'styled-components'
import { useTheme } from 'next-themes'
import { globalTheme } from '../styles/theme'
import Footer from './Footer'





export default function Layout({ children } : any) {

  const Wrapper = styled.main<{ theme: string }>`
  background-color: ${(props) => (props.theme === 'light' ? globalTheme.colour.LIGHT : globalTheme.colour.DARK)};
  transition: 0.3s;
  color: ${(props) => (props.theme === 'light' ? globalTheme.colour.DARK : globalTheme.colour.LIGHT)};


`

  const { resolvedTheme } = useTheme()
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5030123259786817" crossOrigin="anonymous"></script>
     
      </Head>
      <Navbar />
     
      
      <Wrapper theme={resolvedTheme}>{children}</Wrapper>
      <Footer />
    </>
  )
}