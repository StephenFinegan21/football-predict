// components/layout.js

import Navbar from './Navbar'
import Head from 'next/head'


export default function Layout({ children } : any) {
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
      <main>{children}</main>
    </>
  )
}