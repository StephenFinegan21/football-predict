
export const useGetRecentFixtures = async (team: number) => {
    const axios = require("axios");
  
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      params: { season: "2022", team: `${team}`, last: "5" },
      headers: {
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
      },
    };
  
    const data = await axios.request(options).then( function  (response: any) {
      return  response.data;
    });

    return data.response
  };
  