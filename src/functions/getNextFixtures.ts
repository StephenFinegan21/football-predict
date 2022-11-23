
export const getNextFixtures = async () => {
    const axios = require("axios");
  
    const options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
        params: { league: "39", next: "10" },
        headers: {
          "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
          "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
        },
      };
      const premierLeague = await axios
        .request(options)
        .then(function (response : any) {
    
          return response.data.response
        })
        .catch(function (error : any) {
          console.error('err', error);
        });
    
        const world = {
          method: "GET",
          url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
          params: { league: "1", next: "15" },
          headers: {
            "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
            "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_HOST_NAME}`,
          },
        };


        const worldData = await axios
          .request(world)
          .then(function (response : any) {
      
            return response.data.response
          })
          .catch(function (error : any) {
            console.error('err', error);
          });
          const fixtures = [...premierLeague , ...worldData]
          const homeIds = fixtures.map(d => d.teams.home.id.toString())
          const awayIds = fixtures.map(d => d.teams.away.id.toString())

         
 
          const data = {
            fixtures : fixtures,
            ids : fixtures.map(d => d.fixture.id),
            teamIds : [...homeIds , ...awayIds]
          }

       
    return {data}
        
  };
  