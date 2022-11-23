import React from 'react'
import { getNextFixtures } from '../functions/getNextFixtures'
import axios from 'axios'

const Team = ({data} : any) => {
    console.log(data)
  return (
    <div>team here</div>
  )
}




export default Team

export async function getStaticProps(context: any) {
    const slug = context.params.team;
  
    const options = {
      method: "GET",
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
      params: {league: '39', season: '2022', team: `${slug}`},
      headers: {
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
      },
    };
  
    const data = await axios.request(options).then(function (response: any) {
      return response.data.response;
    });
    return {
      props: { data }, // will be passed to the page component as props
    };
  }
  
  export async function getStaticPaths() {
  
  const dataObject = await getNextFixtures();
  const data = dataObject.data.teamIds
  
    const paths = data.map((id: any) => {
      return {
        params: {
          team: `${id}`,
        },
      };
    });
 
  
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    };

}