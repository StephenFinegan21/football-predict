import { NextApiRequest, NextApiResponse } from "next";

export default  function handler(req: NextApiRequest, res: NextApiResponse) {

    const query = req.query;
    const { id } = query;
    //console.log(id)
    //console.log(data.response.map(f => f.id === id))
    const selectedData = data.response.filter(f => f.id === id)

  res.status(200).json({  
    data: selectedData
});
}
  const data = 
  {  response: [
      {
        id: "867966",
        predictions: {
          winner: {
            id: 42,
            name: "Arsenal",
            comment: null,
          },
          win_or_draw: false,
          under_over: null,
          goals: {
            home: "-1.5",
            away: "-3.5",
          },
          advice: "Winner : Arsenal",
          percent: {
            home: "0%",
            draw: "50%",
            away: "50%",
          },
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        teams: {
          home: {
            id: 35,
            name: "Bournemouth",
            logo: "https://media.api-sports.io/football/teams/35.png",
            last_5: {
              form: "50%",
              att: "18%",
              def: "64%",
              goals: {
                for: {
                  total: 2,
                  average: "1.0",
                },
                against: {
                  total: 4,
                  average: "2.0",
                },
              },
            },
            league: {
              form: "WL",
              fixtures: {
                played: {
                  home: 1,
                  away: 1,
                  total: 2,
                },
                wins: {
                  home: 1,
                  away: 0,
                  total: 1,
                },
                draws: {
                  home: 0,
                  away: 0,
                  total: 0,
                },
                loses: {
                  home: 0,
                  away: 1,
                  total: 1,
                },
              },
              goals: {
                for: {
                  total: {
                    home: 2,
                    away: 0,
                    total: 2,
                  },
                  average: {
                    home: "2.0",
                    away: "0.0",
                    total: "1.0",
                  },
                  minute: {
                    "0-15": {
                      total: 1,
                      percentage: "33.33%",
                    },
                    "16-30": {
                      total: null,
                      percentage: null,
                    },
                    "31-45": {
                      total: null,
                      percentage: null,
                    },
                    "46-60": {
                      total: null,
                      percentage: null,
                    },
                    "61-75": {
                      total: null,
                      percentage: null,
                    },
                    "76-90": {
                      total: 2,
                      percentage: "66.67%",
                    },
                    "91-105": {
                      total: null,
                      percentage: null,
                    },
                    "106-120": {
                      total: null,
                      percentage: null,
                    },
                  },
                },
                against: {
                  total: {
                    home: 0,
                    away: 4,
                    total: 4,
                  },
                  average: {
                    home: "0.0",
                    away: "4.0",
                    total: "2.0",
                  },
                  minute: {
                    "0-15": {
                      total: null,
                      percentage: null,
                    },
                    "16-30": {
                      total: 1,
                      percentage: "33.33%",
                    },
                    "31-45": {
                      total: 2,
                      percentage: "66.67%",
                    },
                    "46-60": {
                      total: null,
                      percentage: null,
                    },
                    "61-75": {
                      total: null,
                      percentage: null,
                    },
                    "76-90": {
                      total: null,
                      percentage: null,
                    },
                    "91-105": {
                      total: null,
                      percentage: null,
                    },
                    "106-120": {
                      total: null,
                      percentage: null,
                    },
                  },
                },
              },
              biggest: {
                streak: {
                  wins: 1,
                  draws: 0,
                  loses: 0,
                },
                wins: {
                  home: "2-0",
                  away: null,
                },
                loses: {
                  home: null,
                  away: "4-0",
                },
                goals: {
                  for: {
                    home: 2,
                    away: 0,
                  },
                  against: {
                    home: 0,
                    away: 4,
                  },
                },
              },
              clean_sheet: {
                home: 1,
                away: 0,
                total: 1,
              },
              failed_to_score: {
                home: 0,
                away: 1,
                total: 1,
              },
              penalty: {
                scored: {
                  total: 0,
                  percentage: "0%",
                },
                missed: {
                  total: 0,
                  percentage: "0%",
                },
                total: 0,
              },
              lineups: [
                {
                  formation: "3-4-2-1",
                  played: 2,
                },
              ],
              cards: {
                yellow: {
                  "0-15": {
                    total: 1,
                    percentage: "16.67%",
                  },
                  "16-30": {
                    total: null,
                    percentage: null,
                  },
                  "31-45": {
                    total: 1,
                    percentage: "16.67%",
                  },
                  "46-60": {
                    total: 2,
                    percentage: "33.33%",
                  },
                  "61-75": {
                    total: 1,
                    percentage: "16.67%",
                  },
                  "76-90": {
                    total: null,
                    percentage: null,
                  },
                  "91-105": {
                    total: 1,
                    percentage: "16.67%",
                  },
                  "106-120": {
                    total: null,
                    percentage: null,
                  },
                },
                red: {
                  "0-15": {
                    total: null,
                    percentage: null,
                  },
                  "16-30": {
                    total: null,
                    percentage: null,
                  },
                  "31-45": {
                    total: null,
                    percentage: null,
                  },
                  "46-60": {
                    total: null,
                    percentage: null,
                  },
                  "61-75": {
                    total: null,
                    percentage: null,
                  },
                  "76-90": {
                    total: null,
                    percentage: null,
                  },
                  "91-105": {
                    total: null,
                    percentage: null,
                  },
                  "106-120": {
                    total: null,
                    percentage: null,
                  },
                },
              },
            },
          },
          away: {
            id: 42,
            name: "Arsenal",
            logo: "https://media.api-sports.io/football/teams/42.png",
            last_5: {
              form: "100%",
              att: "55%",
              def: "82%",
              goals: {
                for: {
                  total: 6,
                  average: "3.0",
                },
                against: {
                  total: 2,
                  average: "1.0",
                },
              },
            },
            league: {
              form: "WW",
              fixtures: {
                played: {
                  home: 1,
                  away: 1,
                  total: 2,
                },
                wins: {
                  home: 1,
                  away: 1,
                  total: 2,
                },
                draws: {
                  home: 0,
                  away: 0,
                  total: 0,
                },
                loses: {
                  home: 0,
                  away: 0,
                  total: 0,
                },
              },
              goals: {
                for: {
                  total: {
                    home: 4,
                    away: 2,
                    total: 6,
                  },
                  average: {
                    home: "4.0",
                    away: "2.0",
                    total: "3.0",
                  },
                  minute: {
                    "0-15": {
                      total: null,
                      percentage: null,
                    },
                    "16-30": {
                      total: 2,
                      percentage: "33.33%",
                    },
                    "31-45": {
                      total: 1,
                      percentage: "16.67%",
                    },
                    "46-60": {
                      total: 2,
                      percentage: "33.33%",
                    },
                    "61-75": {
                      total: 1,
                      percentage: "16.67%",
                    },
                    "76-90": {
                      total: null,
                      percentage: null,
                    },
                    "91-105": {
                      total: null,
                      percentage: null,
                    },
                    "106-120": {
                      total: null,
                      percentage: null,
                    },
                  },
                },
                against: {
                  total: {
                    home: 2,
                    away: 0,
                    total: 2,
                  },
                  average: {
                    home: "2.0",
                    away: "0.0",
                    total: "1.0",
                  },
                  minute: {
                    "0-15": {
                      total: null,
                      percentage: null,
                    },
                    "16-30": {
                      total: null,
                      percentage: null,
                    },
                    "31-45": {
                      total: null,
                      percentage: null,
                    },
                    "46-60": {
                      total: null,
                      percentage: null,
                    },
                    "61-75": {
                      total: 1,
                      percentage: "50.00%",
                    },
                    "76-90": {
                      total: 1,
                      percentage: "50.00%",
                    },
                    "91-105": {
                      total: null,
                      percentage: null,
                    },
                    "106-120": {
                      total: null,
                      percentage: null,
                    },
                  },
                },
              },
              biggest: {
                streak: {
                  wins: 2,
                  draws: 0,
                  loses: 0,
                },
                wins: {
                  home: "4-2",
                  away: "0-2",
                },
                loses: {
                  home: null,
                  away: null,
                },
                goals: {
                  for: {
                    home: 4,
                    away: 2,
                  },
                  against: {
                    home: 2,
                    away: 0,
                  },
                },
              },
              clean_sheet: {
                home: 0,
                away: 1,
                total: 1,
              },
              failed_to_score: {
                home: 0,
                away: 0,
                total: 0,
              },
              penalty: {
                scored: {
                  total: 0,
                  percentage: "0%",
                },
                missed: {
                  total: 0,
                  percentage: "0%",
                },
                total: 0,
              },
              lineups: [
                {
                  formation: "4-2-3-1",
                  played: 2,
                },
              ],
              cards: {
                yellow: {
                  "0-15": {
                    total: null,
                    percentage: null,
                  },
                  "16-30": {
                    total: null,
                    percentage: null,
                  },
                  "31-45": {
                    total: 1,
                    percentage: "33.33%",
                  },
                  "46-60": {
                    total: 1,
                    percentage: "33.33%",
                  },
                  "61-75": {
                    total: null,
                    percentage: null,
                  },
                  "76-90": {
                    total: 1,
                    percentage: "33.33%",
                  },
                  "91-105": {
                    total: null,
                    percentage: null,
                  },
                  "106-120": {
                    total: null,
                    percentage: null,
                  },
                },
                red: {
                  "0-15": {
                    total: null,
                    percentage: null,
                  },
                  "16-30": {
                    total: null,
                    percentage: null,
                  },
                  "31-45": {
                    total: null,
                    percentage: null,
                  },
                  "46-60": {
                    total: null,
                    percentage: null,
                  },
                  "61-75": {
                    total: null,
                    percentage: null,
                  },
                  "76-90": {
                    total: null,
                    percentage: null,
                  },
                  "91-105": {
                    total: null,
                    percentage: null,
                  },
                  "106-120": {
                    total: null,
                    percentage: null,
                  },
                },
              },
            },
          },
        },
        comparison: {
          form: {
            home: "33%",
            away: "67%",
          },
          att: {
            home: "25%",
            away: "75%",
          },
          def: {
            home: "33%",
            away: "67%",
          },
          poisson_distribution: {
            home: "0%",
            away: "0%",
          },
          h2h: {
            home: "7%",
            away: "93%",
          },
          goals: {
            home: "27%",
            away: "73%",
          },
          total: {
            home: "25.0%",
            away: "75.0%",
          },
        },
        h2h: [
          {
            fixture: {
              id: 313303,
              referee: "M. Atkinson",
              timezone: "UTC",
              date: "2020-01-27T20:00:00+00:00",
              timestamp: 1580155200,
              periods: {
                first: 1580155200,
                second: 1580158800,
              },
              venue: {
                id: 504,
                name: "Vitality Stadium",
                city: "Bournemouth, Dorset",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 45,
              name: "FA Cup",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/45.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2019,
              round: "4th Round",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
            },
            goals: {
              home: 1,
              away: 2,
            },
            score: {
              halftime: {
                home: 0,
                away: 2,
              },
              fulltime: {
                home: 1,
                away: 2,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 157195,
              referee: "Stuart Attwell, England",
              timezone: "UTC",
              date: "2019-12-26T15:00:00+00:00",
              timestamp: 1577372400,
              periods: {
                first: 1577372400,
                second: 1577376000,
              },
              venue: {
                id: 504,
                name: "Vitality Stadium",
                city: "Bournemouth, Dorset",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2019,
              round: "Regular Season - 19",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: null,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: null,
              },
            },
            goals: {
              home: 1,
              away: 1,
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: 1,
                away: 1,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 157085,
              referee: "Martin Atkinson, England",
              timezone: "UTC",
              date: "2019-10-06T13:00:00+00:00",
              timestamp: 1570366800,
              periods: {
                first: 1570366800,
                second: 1570370400,
              },
              venue: {
                id: 494,
                name: "Emirates Stadium",
                city: "London",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2019,
              round: "Regular Season - 8",
            },
            teams: {
              home: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
              away: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
            },
            goals: {
              home: 1,
              away: 0,
            },
            score: {
              halftime: {
                home: 1,
                away: 0,
              },
              fulltime: {
                home: 1,
                away: 0,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 335,
              referee: "Chris Kavanagh, England",
              timezone: "UTC",
              date: "2019-02-27T19:45:00+00:00",
              timestamp: 1551296700,
              periods: {
                first: 1551296700,
                second: 1551300300,
              },
              venue: {
                id: 494,
                name: "Emirates Stadium",
                city: "London",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2018,
              round: "Regular Season - 28",
            },
            teams: {
              home: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
              away: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
            },
            goals: {
              home: 5,
              away: 1,
            },
            score: {
              halftime: {
                home: 2,
                away: 1,
              },
              fulltime: {
                home: 5,
                away: 1,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 185,
              referee: "Craig Pawson, England",
              timezone: "UTC",
              date: "2018-11-25T13:30:00+00:00",
              timestamp: 1543152600,
              periods: {
                first: 1543152600,
                second: 1543156200,
              },
              venue: {
                id: null,
                name: "Vitality Stadium",
                city: "Bournemouth",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2018,
              round: "Regular Season - 13",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
            },
            goals: {
              home: 1,
              away: 2,
            },
            score: {
              halftime: {
                home: 1,
                away: 1,
              },
              fulltime: {
                home: 1,
                away: 2,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 11684,
              referee: "Kevin Friend, England",
              timezone: "UTC",
              date: "2018-01-14T13:30:00+00:00",
              timestamp: 1515936600,
              periods: {
                first: 1515936600,
                second: 1515940200,
              },
              venue: {
                id: null,
                name: "Vitality Stadium",
                city: "Bournemouth",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2017,
              round: "Regular Season - 23",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: true,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: false,
              },
            },
            goals: {
              home: 2,
              away: 1,
            },
            score: {
              halftime: {
                home: 0,
                away: 0,
              },
              fulltime: {
                home: 2,
                away: 1,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 11876,
              referee: "Anthony Taylor, England",
              timezone: "UTC",
              date: "2017-09-09T14:00:00+00:00",
              timestamp: 1504965600,
              periods: {
                first: 1504965600,
                second: 1504969200,
              },
              venue: {
                id: 494,
                name: "Emirates Stadium",
                city: "London",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2017,
              round: "Regular Season - 4",
            },
            teams: {
              home: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
              away: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
            },
            goals: {
              home: 3,
              away: 0,
            },
            score: {
              halftime: {
                home: 2,
                away: 0,
              },
              fulltime: {
                home: 3,
                away: 0,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 17500,
              referee: "Michael Oliver, England",
              timezone: "UTC",
              date: "2017-01-03T19:45:00+00:00",
              timestamp: 1483472700,
              periods: {
                first: 1483472700,
                second: 1483476300,
              },
              venue: {
                id: null,
                name: "Vitality Stadium",
                city: "Bournemouth",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2016,
              round: "Regular Season - 20",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: null,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: null,
              },
            },
            goals: {
              home: 3,
              away: 3,
            },
            score: {
              halftime: {
                home: 2,
                away: 0,
              },
              fulltime: {
                home: 3,
                away: 3,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 17569,
              referee: "Mike Jones, England",
              timezone: "UTC",
              date: "2016-11-27T14:15:00+00:00",
              timestamp: 1480256100,
              periods: {
                first: 1480256100,
                second: 1480259700,
              },
              venue: {
                id: 494,
                name: "Emirates Stadium",
                city: "London",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2016,
              round: "Regular Season - 13",
            },
            teams: {
              home: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
              away: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
            },
            goals: {
              home: 3,
              away: 1,
            },
            score: {
              halftime: {
                home: 1,
                away: 1,
              },
              fulltime: {
                home: 3,
                away: 1,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
          {
            fixture: {
              id: 192545,
              referee: "Kevin Friend, England",
              timezone: "UTC",
              date: "2016-02-07T13:30:00+00:00",
              timestamp: 1454851800,
              periods: {
                first: 1454851800,
                second: 1454855400,
              },
              venue: {
                id: null,
                name: "Vitality Stadium",
                city: "Bournemouth",
              },
              status: {
                long: "Match Finished",
                short: "FT",
                elapsed: 90,
              },
            },
            league: {
              id: 39,
              name: "Premier League",
              country: "England",
              logo: "https://media.api-sports.io/football/leagues/39.png",
              flag: "https://media.api-sports.io/flags/gb.svg",
              season: 2015,
              round: "Regular Season - 25",
            },
            teams: {
              home: {
                id: 35,
                name: "Bournemouth",
                logo: "https://media.api-sports.io/football/teams/35.png",
                winner: false,
              },
              away: {
                id: 42,
                name: "Arsenal",
                logo: "https://media.api-sports.io/football/teams/42.png",
                winner: true,
              },
            },
            goals: {
              home: 0,
              away: 2,
            },
            score: {
              halftime: {
                home: 0,
                away: 2,
              },
              fulltime: {
                home: 0,
                away: 2,
              },
              extratime: {
                home: null,
                away: null,
              },
              penalty: {
                home: null,
                away: null,
              },
            },
          },
        ],
      },

      {
        "id": "867967",
        "predictions": {
          "winner": {
            "id": 66,
            "name": "Aston Villa",
            "comment": "Win or draw"
          },
          "win_or_draw": true,
          "under_over": null,
          "goals": {
            "home": "-1.5",
            "away": "-1.5"
          },
          "advice": "Double chance : draw or Aston Villa",
          "percent": {
            "home": "10%",
            "draw": "45%",
            "away": "45%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 52,
            "name": "Crystal Palace",
            "logo": "https://media.api-sports.io/football/teams/52.png",
            "last_5": {
              "form": "17%",
              "att": "9%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 1,
                  "average": "0.5"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "LD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "loses": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 0,
                    "away": 1,
                    "total": 1
                  },
                  "average": {
                    "home": "0.0",
                    "away": "1.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 1,
                    "total": 3
                  },
                  "average": {
                    "home": "2.0",
                    "away": "1.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 1
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": "0-2",
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 1
                  },
                  "against": {
                    "home": 2,
                    "away": 1
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 1
                },
                {
                  "formation": "5-4-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "61-75": {
                    "total": 2,
                    "percentage": "40.00%"
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 66,
            "name": "Aston Villa",
            "logo": "https://media.api-sports.io/football/teams/66.png",
            "last_5": {
              "form": "50%",
              "att": "18%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "LW",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 2,
                      "percentage": "66.67%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 1
                },
                "wins": {
                  "home": "2-1",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": "2-0"
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 0
                  },
                  "against": {
                    "home": 1,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 1
                },
                {
                  "formation": "4-3-1-2",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 2,
                    "percentage": "28.57%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 2,
                    "percentage": "28.57%"
                  },
                  "61-75": {
                    "total": 1,
                    "percentage": "14.29%"
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 2,
                    "percentage": "28.57%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "25%",
            "away": "75%"
          },
          "att": {
            "home": "33%",
            "away": "67%"
          },
          "def": {
            "home": "50%",
            "away": "50%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "0%"
          },
          "h2h": {
            "home": "29%",
            "away": "71%"
          },
          "goals": {
            "home": "33%",
            "away": "67%"
          },
          "total": {
            "home": "34.0%",
            "away": "66.0%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710916,
              "referee": "C. Kavanagh",
              "timezone": "UTC",
              "date": "2022-05-15T13:00:00+00:00",
              "timestamp": 1652619600,
              "periods": {
                "first": 1652619600,
                "second": 1652623200
              },
              "venue": {
                "id": 495,
                "name": "Villa Park",
                "city": "Birmingham"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 37"
            },
            "teams": {
              "home": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": null
              },
              "away": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710681,
              "referee": "M. Salisbury",
              "timezone": "UTC",
              "date": "2021-11-27T15:00:00+00:00",
              "timestamp": 1638025200,
              "periods": {
                "first": 1638025200,
                "second": 1638028800
              },
              "venue": {
                "id": 525,
                "name": "Selhurst Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 13"
            },
            "teams": {
              "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": false
              },
              "away": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592855,
              "referee": "D. Coote",
              "timezone": "UTC",
              "date": "2021-05-16T11:00:00+00:00",
              "timestamp": 1621162800,
              "periods": {
                "first": 1621162800,
                "second": 1621166400
              },
              "venue": {
                "id": 525,
                "name": "Selhurst Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 36"
            },
            "teams": {
              "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": true
              },
              "away": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 2
              },
              "fulltime": {
                "home": 3,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592282,
              "referee": "A. Taylor",
              "timezone": "UTC",
              "date": "2020-12-26T15:00:00+00:00",
              "timestamp": 1608994800,
              "periods": {
                "first": 1608994800,
                "second": 1608998400
              },
              "venue": {
                "id": 495,
                "name": "Villa Park",
                "city": "Birmingham"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 15"
            },
            "teams": {
              "home": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": true
              },
              "away": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 3,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157356,
              "referee": "Martin Atkinson, England",
              "timezone": "UTC",
              "date": "2020-07-12T13:15:00+00:00",
              "timestamp": 1594559700,
              "periods": {
                "first": 1594559700,
                "second": 1594563300
              },
              "venue": {
                "id": 495,
                "name": "Villa Park",
                "city": "Birmingham"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 35"
            },
            "teams": {
              "home": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": true
              },
              "away": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157048,
              "referee": "Kevin Friend, England",
              "timezone": "UTC",
              "date": "2019-08-31T14:00:00+00:00",
              "timestamp": 1567260000,
              "periods": {
                "first": 1567260000,
                "second": 1567263600
              },
              "venue": {
                "id": 525,
                "name": "Selhurst Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 4"
            },
            "teams": {
              "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": true
              },
              "away": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": false
              }
            },
            "goals": {
              "home": 1,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 192497,
              "referee": "Mark Clattenburg, England",
              "timezone": "UTC",
              "date": "2016-01-12T19:45:00+00:00",
              "timestamp": 1452627900,
              "periods": {
                "first": 1452627900,
                "second": 1452631500
              },
              "venue": {
                "id": 495,
                "name": "Villa Park",
                "city": "Birmingham"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2015,
              "round": "Regular Season - 21"
            },
            "teams": {
              "home": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": true
              },
              "away": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": false
              }
            },
            "goals": {
              "home": 1,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 192318,
              "referee": "Keith Stroud, England",
              "timezone": "UTC",
              "date": "2015-08-22T14:00:00+00:00",
              "timestamp": 1440252000,
              "periods": {
                "first": 1440252000,
                "second": 1440255600
              },
              "venue": {
                "id": 525,
                "name": "Selhurst Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2015,
              "round": "Regular Season - 3"
            },
            "teams": {
              "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": true
              },
              "away": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 192868,
              "referee": "Robert Madley, England",
              "timezone": "UTC",
              "date": "2015-01-01T15:00:00+00:00",
              "timestamp": 1420124400,
              "periods": {
                "first": 1420124400,
                "second": 1420128000
              },
              "venue": {
                "id": null,
                "name": "Villa Park (Birmingham)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2014,
              "round": "Regular Season - 20"
            },
            "teams": {
              "home": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": null
              },
              "away": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": null
              }
            },
            "goals": {
              "home": 0,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 192811,
              "referee": null,
              "timezone": "UTC",
              "date": "2014-12-02T20:00:00+00:00",
              "timestamp": 1417550400,
              "periods": {
                "first": 1417550400,
                "second": 1417554000
              },
              "venue": {
                "id": null,
                "name": "Selhurst Park (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2014,
              "round": "Regular Season - 14"
            },
            "teams": {
              "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
                "winner": false
              },
              "away": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media.api-sports.io/football/teams/66.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id" : "867968",
        "predictions": {
          "winner": {
            "id": 65,
            "name": "Nottingham Forest",
            "comment": "Win or draw"
          },
          "win_or_draw": true,
          "under_over": "-3.5",
          "goals": {
            "home": "-1.5",
            "away": "-1.5"
          },
          "advice": "Combo Double chance : draw or Nottingham Forest and -3.5 goals",
          "percent": {
            "home": "10%",
            "draw": "45%",
            "away": "45%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 45,
            "name": "Everton",
            "logo": "https://media.api-sports.io/football/teams/45.png",
            "last_5": {
              "form": "0%",
              "att": "9%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 1,
                  "average": "0.5"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "LL",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 0,
                    "away": 1,
                    "total": 1
                  },
                  "average": {
                    "home": "0.0",
                    "away": "1.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 2,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 2
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": "0-1",
                  "away": "2-1"
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 1
                  },
                  "against": {
                    "home": 1,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "5-4-1",
                  "played": 1
                },
                {
                  "formation": "3-4-3",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "25.00%"
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "25.00%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "25.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "25.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 65,
            "name": "Nottingham Forest",
            "logo": "https://media.api-sports.io/football/teams/65.png",
            "last_5": {
              "form": "50%",
              "att": "9%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 1,
                  "average": "0.5"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "LW",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 1,
                    "away": 0,
                    "total": 1
                  },
                  "average": {
                    "home": "1.0",
                    "away": "0.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "100.00%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 2,
                    "total": 2
                  },
                  "average": {
                    "home": "0.0",
                    "away": "2.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 1
                },
                "wins": {
                  "home": "1-0",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": "2-0"
                },
                "goals": {
                  "for": {
                    "home": 1,
                    "away": 0
                  },
                  "against": {
                    "home": 0,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "3-4-1-2",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": 1,
                    "percentage": "14.29%"
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "14.29%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "14.29%"
                  },
                  "61-75": {
                    "total": 2,
                    "percentage": "28.57%"
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 2,
                    "percentage": "28.57%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "0%",
            "away": "100%"
          },
          "att": {
            "home": "50%",
            "away": "50%"
          },
          "def": {
            "home": "40%",
            "away": "60%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "0%"
          },
          "h2h": {
            "home": "0%",
            "away": "0%"
          },
          "goals": {
            "home": "0%",
            "away": "0%"
          },
          "total": {
            "home": "45.0%",
            "away": "55.0%"
          }
        },
        "h2h": []
      },
      {
        "id": "867969",
        "predictions": {
          "winner": {
            "id": 55,
            "name": "Brentford",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": "+1.5",
          "goals": {
            "home": "-2.5",
            "away": "-4.5"
          },
          "advice": "Combo Winner : Brentford and +1.5 goals",
          "percent": {
            "home": "10%",
            "draw": "45%",
            "away": "45%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media.api-sports.io/football/teams/36.png",
            "last_5": {
              "form": "33%",
              "att": "18%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "DD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 2,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 0
                  },
                  "against": {
                    "home": 2,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 1,
                  "percentage": "100.00%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 1
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
            "last_5": {
              "form": "67%",
              "att": "55%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 6,
                  "average": "3.0"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "DW",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 4,
                    "away": 2,
                    "total": 6
                  },
                  "average": {
                    "home": "4.0",
                    "away": "2.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "16-30": {
                      "total": 2,
                      "percentage": "33.33%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 2,
                    "total": 2
                  },
                  "average": {
                    "home": "0.0",
                    "away": "2.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 1,
                  "loses": 0
                },
                "wins": {
                  "home": "4-0",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 4,
                    "away": 2
                  },
                  "against": {
                    "home": 0,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 1
                },
                {
                  "formation": "5-3-2",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "33%",
            "away": "67%"
          },
          "att": {
            "home": "25%",
            "away": "75%"
          },
          "def": {
            "home": "50%",
            "away": "50%"
          },
          "poisson_distribution": {
            "home": "38%",
            "away": "63%"
          },
          "h2h": {
            "home": "29%",
            "away": "71%"
          },
          "goals": {
            "home": "27%",
            "away": "73%"
          },
          "total": {
            "home": "33.7%",
            "away": "66.5%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 635176,
              "referee": "Jonathan Moss, England",
              "timezone": "UTC",
              "date": "2020-10-01T16:30:00+00:00",
              "timestamp": 1601569800,
              "periods": {
                "first": 1601569800,
                "second": 1601573400
              },
              "venue": {
                "id": 10503,
                "name": "Brentford Community Stadium",
                "city": "Brentford, Middlesex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 48,
              "name": "League Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/48.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "8th Finals"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 3,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 575674,
              "referee": "M. Atkinson",
              "timezone": "UTC",
              "date": "2020-08-04T18:45:00+00:00",
              "timestamp": 1596566700,
              "periods": {
                "first": 1596566700,
                "second": 1596570300
              },
              "venue": {
                "id": 489,
                "name": "Wembley Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "AET",
                "elapsed": 120
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Promotion Play-offs - Final"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": false
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": null,
                "away": null
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 164620,
              "referee": "J. Linington",
              "timezone": "UTC",
              "date": "2020-06-20T11:30:00+00:00",
              "timestamp": 1592652600,
              "periods": {
                "first": 1592652600,
                "second": 1592656200
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 38"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              },
              "away": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 164428,
              "referee": "O. Langford",
              "timezone": "UTC",
              "date": "2019-12-14T15:00:00+00:00",
              "timestamp": 1576335600,
              "periods": {
                "first": 1576335600,
                "second": 1576339200
              },
              "venue": {
                "id": 507,
                "name": "Griffin Park",
                "city": "Brentford, Middlesex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 22"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 1,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 11951,
              "referee": "Neil Swarbrick, England",
              "timezone": "UTC",
              "date": "2018-04-14T16:30:00+00:00",
              "timestamp": 1523723400,
              "periods": {
                "first": 1523723400,
                "second": 1523727000
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2017,
              "round": "Regular Season - 43"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              },
              "away": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 12227,
              "referee": "Robert Madley, England",
              "timezone": "UTC",
              "date": "2017-12-02T15:00:00+00:00",
              "timestamp": 1512226800,
              "periods": {
                "first": 1512226800,
                "second": 1512230400
              },
              "venue": {
                "id": null,
                "name": "Griffin Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2017,
              "round": "Regular Season - 20"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 17714,
              "referee": "Darren Bond, England",
              "timezone": "UTC",
              "date": "2017-04-29T14:00:00+00:00",
              "timestamp": 1493474400,
              "periods": {
                "first": 1493474400,
                "second": 1493478000
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2016,
              "round": "Regular Season - 45"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              },
              "away": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 18068,
              "referee": "Tim Robinson, England",
              "timezone": "UTC",
              "date": "2016-11-04T19:45:00+00:00",
              "timestamp": 1478288700,
              "periods": {
                "first": 1478288700,
                "second": 1478292300
              },
              "venue": {
                "id": null,
                "name": "Griffin Park",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2016,
              "round": "Regular Season - 16"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": false
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 371337,
              "referee": "Mark Haywood, England",
              "timezone": "UTC",
              "date": "2016-04-30T14:00:00+00:00",
              "timestamp": 1462024800,
              "periods": {
                "first": 1462024800,
                "second": 1462028400
              },
              "venue": {
                "id": 507,
                "name": "Griffin Park",
                "city": "Brentford, Middlesex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2015,
              "round": "Regular Season - 45"
            },
            "teams": {
              "home": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 3,
                "away": 0
              },
              "fulltime": {
                "home": 3,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 371041,
              "referee": "David Coote, England",
              "timezone": "UTC",
              "date": "2015-12-12T15:00:00+00:00",
              "timestamp": 1449932400,
              "periods": {
                "first": 1449932400,
                "second": 1449936000
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 40,
              "name": "Championship",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/40.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2015,
              "round": "Regular Season - 20"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              },
              "away": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media.api-sports.io/football/teams/55.png",
                "winner": null
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867970",
        "predictions": {
          "winner": {
            "id": 49,
            "name": "Chelsea",
            "comment": "Win or draw"
          },
          "win_or_draw": true,
          "under_over": null,
          "goals": {
            "home": "-2.5",
            "away": "-2.5"
          },
          "advice": "Double chance : draw or Chelsea",
          "percent": {
            "home": "10%",
            "draw": "45%",
            "away": "45%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 63,
            "name": "Leeds",
            "logo": "https://media.api-sports.io/football/teams/63.png",
            "last_5": {
              "form": "67%",
              "att": "36%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 4,
                  "average": "2.0"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "WD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 2,
                    "total": 4
                  },
                  "average": {
                    "home": "2.0",
                    "away": "2.0",
                    "total": "2.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": 2,
                      "percentage": "66.67%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 2,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 1,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": "2-1",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 2
                  },
                  "against": {
                    "home": 1,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "31-45": {
                    "total": 2,
                    "percentage": "40.00%"
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 2,
                    "percentage": "40.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 49,
            "name": "Chelsea",
            "logo": "https://media.api-sports.io/football/teams/49.png",
            "last_5": {
              "form": "67%",
              "att": "27%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 3,
                  "average": "1.5"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "WD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "draws": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 1,
                    "total": 3
                  },
                  "average": {
                    "home": "2.0",
                    "away": "1.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 1,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": "0-1"
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 1
                  },
                  "against": {
                    "home": 2,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 1,
                  "percentage": "100.00%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 1
              },
              "lineups": [
                {
                  "formation": "3-4-3",
                  "played": 1
                },
                {
                  "formation": "3-4-2-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "61-75": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "50%",
            "away": "50%"
          },
          "att": {
            "home": "57%",
            "away": "43%"
          },
          "def": {
            "home": "40%",
            "away": "60%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "100%"
          },
          "h2h": {
            "home": "7%",
            "away": "93%"
          },
          "goals": {
            "home": "22%",
            "away": "78%"
          },
          "total": {
            "home": "35.2%",
            "away": "64.8%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710878,
              "referee": "A. Taylor",
              "timezone": "UTC",
              "date": "2022-05-11T18:30:00+00:00",
              "timestamp": 1652293800,
              "periods": {
                "first": 1652293800,
                "second": 1652297400
              },
              "venue": {
                "id": 546,
                "name": "Elland Road",
                "city": "Leeds, West Yorkshire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 33"
            },
            "teams": {
              "home": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "winner": false
              },
              "away": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710710,
              "referee": "C. Kavanagh",
              "timezone": "UTC",
              "date": "2021-12-11T15:00:00+00:00",
              "timestamp": 1639234800,
              "periods": {
                "first": 1639234800,
                "second": 1639238400
              },
              "venue": {
                "id": 519,
                "name": "Stamford Bridge",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 16"
            },
            "teams": {
              "home": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "winner": true
              },
              "away": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592770,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2021-03-13T12:30:00+00:00",
              "timestamp": 1615638600,
              "periods": {
                "first": 1615638600,
                "second": 1615642200
              },
              "venue": {
                "id": 546,
                "name": "Elland Road",
                "city": "Leeds, West Yorkshire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 28"
            },
            "teams": {
              "home": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "winner": null
              },
              "away": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "winner": null
              }
            },
            "goals": {
              "home": 0,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592244,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2020-12-05T20:00:00+00:00",
              "timestamp": 1607198400,
              "periods": {
                "first": 1607198400,
                "second": 1607202000
              },
              "venue": {
                "id": 519,
                "name": "Stamford Bridge",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 11"
            },
            "teams": {
              "home": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "winner": true
              },
              "away": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 455513,
              "referee": null,
              "timezone": "UTC",
              "date": "2012-12-19T19:45:00+00:00",
              "timestamp": 1355946300,
              "periods": {
                "first": 1355946300,
                "second": 1355949900
              },
              "venue": {
                "id": null,
                "name": "Elland Road",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 48,
              "name": "League Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/48.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2012,
              "round": "Quarter-finals"
            },
            "teams": {
              "home": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
                "winner": false
              },
              "away": {
                "id": 49,
                "name": "Chelsea",
                "logo": "https://media.api-sports.io/football/teams/49.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 5
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 5
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867971",
        "predictions": {
          "winner": {
            "id": 46,
            "name": "Leicester",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": "+2.5",
          "goals": {
            "home": "-4.5",
            "away": "-2.5"
          },
          "advice": "Combo Winner : Leicester and +2.5 goals",
          "percent": {
            "home": "45%",
            "draw": "45%",
            "away": "10%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 46,
            "name": "Leicester",
            "logo": "https://media.api-sports.io/football/teams/46.png",
            "last_5": {
              "form": "17%",
              "att": "36%",
              "def": "45%",
              "goals": {
                "for": {
                  "total": 4,
                  "average": "2.0"
                },
                "against": {
                  "total": 6,
                  "average": "3.0"
                }
              }
            },
            "league": {
              "form": "DL",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 2,
                    "total": 4
                  },
                  "average": {
                    "home": "2.0",
                    "away": "2.0",
                    "total": "2.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 4,
                    "total": 6
                  },
                  "average": {
                    "home": "2.0",
                    "away": "4.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "14.29%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "14.29%"
                    },
                    "46-60": {
                      "total": 2,
                      "percentage": "28.57%"
                    },
                    "61-75": {
                      "total": 2,
                      "percentage": "28.57%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "14.29%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 1,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": "4-2"
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 2
                  },
                  "against": {
                    "home": 2,
                    "away": 4
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "3-5-1-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "100.00%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 41,
            "name": "Southampton",
            "logo": "https://media.api-sports.io/football/teams/41.png",
            "last_5": {
              "form": "17%",
              "att": "27%",
              "def": "45%",
              "goals": {
                "for": {
                  "total": 3,
                  "average": "1.5"
                },
                "against": {
                  "total": 6,
                  "average": "3.0"
                }
              }
            },
            "league": {
              "form": "LD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 1,
                    "total": 3
                  },
                  "average": {
                    "home": "2.0",
                    "away": "1.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 2,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 4,
                    "total": 6
                  },
                  "average": {
                    "home": "2.0",
                    "away": "4.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "46-60": {
                      "total": 2,
                      "percentage": "40.00%"
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 1
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": "4-1"
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 1
                  },
                  "against": {
                    "home": 2,
                    "away": 4
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "5-3-2",
                  "played": 1
                },
                {
                  "formation": "3-4-2-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "100.00%"
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "50%",
            "away": "50%"
          },
          "att": {
            "home": "57%",
            "away": "43%"
          },
          "def": {
            "home": "50%",
            "away": "50%"
          },
          "poisson_distribution": {
            "home": "71%",
            "away": "29%"
          },
          "h2h": {
            "home": "85%",
            "away": "15%"
          },
          "goals": {
            "home": "71%",
            "away": "29%"
          },
          "total": {
            "home": "64.0%",
            "away": "36.0%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710932,
              "referee": "J. Moss",
              "timezone": "UTC",
              "date": "2022-05-22T15:00:00+00:00",
              "timestamp": 1653231600,
              "periods": {
                "first": 1653231600,
                "second": 1653235200
              },
              "venue": {
                "id": 547,
                "name": "King Power Stadium",
                "city": "Leicester, Leicestershire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 38"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              }
            },
            "goals": {
              "home": 4,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 4,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710694,
              "referee": "R. Jones",
              "timezone": "UTC",
              "date": "2021-12-01T19:30:00+00:00",
              "timestamp": 1638387000,
              "periods": {
                "first": 1638387000,
                "second": 1638390600
              },
              "venue": {
                "id": 585,
                "name": "St. Mary's Stadium",
                "city": "Southampton, Hampshire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 14"
            },
            "teams": {
              "home": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": null
              },
              "away": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": null
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592833,
              "referee": "R. Jones",
              "timezone": "UTC",
              "date": "2021-04-30T19:00:00+00:00",
              "timestamp": 1619809200,
              "periods": {
                "first": 1619809200,
                "second": 1619812800
              },
              "venue": {
                "id": 585,
                "name": "St. Mary's Stadium",
                "city": "Southampton, Hampshire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 34"
            },
            "teams": {
              "home": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": null
              },
              "away": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 686167,
              "referee": "Chris Kavanagh, England",
              "timezone": "UTC",
              "date": "2021-04-18T17:30:00+00:00",
              "timestamp": 1618767000,
              "periods": {
                "first": 1618767000,
                "second": 1618770600
              },
              "venue": {
                "id": 489,
                "name": "Wembley Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 45,
              "name": "FA Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/45.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Semi-finals"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              }
            },
            "goals": {
              "home": 1,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592325,
              "referee": "S. Attwell",
              "timezone": "UTC",
              "date": "2021-01-16T20:00:00+00:00",
              "timestamp": 1610827200,
              "periods": {
                "first": 1610827200,
                "second": 1610830800
              },
              "venue": {
                "id": 547,
                "name": "King Power Stadium",
                "city": "Leicester, Leicestershire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 19"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157230,
              "referee": "Lee Mason, England",
              "timezone": "UTC",
              "date": "2020-01-11T15:00:00+00:00",
              "timestamp": 1578754800,
              "periods": {
                "first": 1578754800,
                "second": 1578758400
              },
              "venue": {
                "id": 547,
                "name": "King Power Stadium",
                "city": "Leicester, Leicestershire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 22"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": false
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157112,
              "referee": "Andre Marriner, England",
              "timezone": "UTC",
              "date": "2019-10-25T19:00:00+00:00",
              "timestamp": 1572030000,
              "periods": {
                "first": 1572030000,
                "second": 1572033600
              },
              "venue": {
                "id": 585,
                "name": "St. Mary's Stadium",
                "city": "Southampton, Hampshire"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 10"
            },
            "teams": {
              "home": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              },
              "away": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 9
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 5
              },
              "fulltime": {
                "home": 0,
                "away": 9
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 281,
              "referee": "Michael Oliver, England",
              "timezone": "UTC",
              "date": "2019-01-12T15:00:00+00:00",
              "timestamp": 1547305200,
              "periods": {
                "first": 1547305200,
                "second": 1547308800
              },
              "venue": {
                "id": null,
                "name": "King Power Stadium",
                "city": "Leicester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 22"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": false
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 454963,
              "referee": "Roger East, England",
              "timezone": "UTC",
              "date": "2018-11-27T19:45:00+00:00",
              "timestamp": 1543347900,
              "periods": {
                "first": 1543347900,
                "second": 1543351500
              },
              "venue": {
                "id": 547,
                "name": "King Power Stadium",
                "city": "Leicester, Leicestershire"
              },
              "status": {
                "long": "Match Finished",
                "short": "PEN",
                "elapsed": 120
              }
            },
            "league": {
              "id": 48,
              "name": "League Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/48.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "8th Finals"
            },
            "teams": {
              "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              },
              "away": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              }
            },
            "goals": {
              "home": 0,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": 6,
                "away": 5
              }
            }
          },
          {
            "fixture": {
              "id": 90,
              "referee": "Jonathan Moss, England",
              "timezone": "UTC",
              "date": "2018-08-25T14:00:00+00:00",
              "timestamp": 1535205600,
              "periods": {
                "first": 1535205600,
                "second": 1535209200
              },
              "venue": {
                "id": null,
                "name": "St. Mary's Stadium",
                "city": "Southampton"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 3"
            },
            "teams": {
              "home": {
                "id": 41,
                "name": "Southampton",
                "logo": "https://media.api-sports.io/football/teams/41.png",
                "winner": false
              },
              "away": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867972",
        "predictions": {
          "winner": {
            "id": 40,
            "name": "Liverpool",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": "+1.5",
          "goals": {
            "home": "-1.5",
            "away": "-3.5"
          },
          "advice": "Combo Winner : Liverpool and +1.5 goals",
          "percent": {
            "home": "0%",
            "draw": "50%",
            "away": "50%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 33,
            "name": "Manchester United",
            "logo": "https://media.api-sports.io/football/teams/33.png",
            "last_5": {
              "form": "0%",
              "att": "9%",
              "def": "45%",
              "goals": {
                "for": {
                  "total": 1,
                  "average": "0.5"
                },
                "against": {
                  "total": 6,
                  "average": "3.0"
                }
              }
            },
            "league": {
              "form": "LL",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 1,
                    "away": 0,
                    "total": 1
                  },
                  "average": {
                    "home": "1.0",
                    "away": "0.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 4,
                    "total": 6
                  },
                  "average": {
                    "home": "2.0",
                    "away": "4.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "14.29%"
                    },
                    "16-30": {
                      "total": 3,
                      "percentage": "42.86%"
                    },
                    "31-45": {
                      "total": 2,
                      "percentage": "28.57%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "14.29%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 2
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": "1-2",
                  "away": "4-0"
                },
                "goals": {
                  "for": {
                    "home": 1,
                    "away": 0
                  },
                  "against": {
                    "home": 2,
                    "away": 4
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 1
                },
                {
                  "formation": "4-2-3-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 2,
                    "percentage": "25.00%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 2,
                    "percentage": "25.00%"
                  },
                  "61-75": {
                    "total": 1,
                    "percentage": "12.50%"
                  },
                  "76-90": {
                    "total": 2,
                    "percentage": "25.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "12.50%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 40,
            "name": "Liverpool",
            "logo": "https://media.api-sports.io/football/teams/40.png",
            "last_5": {
              "form": "33%",
              "att": "27%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 3,
                  "average": "1.5"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "DD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 2,
                      "percentage": "66.67%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 2,
                      "percentage": "66.67%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 2,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 1,
                    "away": 2
                  },
                  "against": {
                    "home": 1,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "50.00%"
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "50.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "100.00%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "0%",
            "away": "100%"
          },
          "att": {
            "home": "25%",
            "away": "75%"
          },
          "def": {
            "home": "33%",
            "away": "67%"
          },
          "poisson_distribution": {
            "home": "23%",
            "away": "77%"
          },
          "h2h": {
            "home": "40%",
            "away": "60%"
          },
          "goals": {
            "home": "38%",
            "away": "63%"
          },
          "total": {
            "home": "31.8%",
            "away": "68.4%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 869514,
              "referee": "A. Marriner",
              "timezone": "UTC",
              "date": "2022-07-12T13:00:00+00:00",
              "timestamp": 1657630800,
              "periods": {
                "first": 1657630800,
                "second": 1657634400
              },
              "venue": {
                "id": 1551,
                "name": "Rajamangala National Stadium",
                "city": "Bangkok"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 667,
              "name": "Friendlies Clubs",
              "country": "World",
              "logo": "https://media.api-sports.io/football/leagues/667.png",
              "flag": null,
              "season": 2022,
              "round": "Club Friendlies 1"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": true
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": false
              }
            },
            "goals": {
              "home": 4,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 3,
                "away": 0
              },
              "fulltime": {
                "home": 4,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710849,
              "referee": "M. Atkinson",
              "timezone": "UTC",
              "date": "2022-04-19T19:00:00+00:00",
              "timestamp": 1650394800,
              "periods": {
                "first": 1650394800,
                "second": 1650398400
              },
              "venue": {
                "id": 550,
                "name": "Anfield",
                "city": "Liverpool"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 30"
            },
            "teams": {
              "home": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": true
              },
              "away": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": false
              }
            },
            "goals": {
              "home": 4,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 0
              },
              "fulltime": {
                "home": 4,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710643,
              "referee": "A. Taylor",
              "timezone": "UTC",
              "date": "2021-10-24T15:30:00+00:00",
              "timestamp": 1635089400,
              "periods": {
                "first": 1635089400,
                "second": 1635093000
              },
              "venue": {
                "id": 556,
                "name": "Old Trafford",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 9"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": false
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 5
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 4
              },
              "fulltime": {
                "home": 0,
                "away": 5
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592831,
              "referee": "A. Taylor",
              "timezone": "UTC",
              "date": "2021-05-13T19:15:00+00:00",
              "timestamp": 1620933300,
              "periods": {
                "first": 1620933300,
                "second": 1620936900
              },
              "venue": {
                "id": 556,
                "name": "Old Trafford",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 34"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": false
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": true
              }
            },
            "goals": {
              "home": 2,
              "away": 4
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 2
              },
              "fulltime": {
                "home": 2,
                "away": 4
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 656823,
              "referee": "Craig Pawson, England",
              "timezone": "UTC",
              "date": "2021-01-24T17:00:00+00:00",
              "timestamp": 1611507600,
              "periods": {
                "first": 1611507600,
                "second": 1611511200
              },
              "venue": {
                "id": 556,
                "name": "Old Trafford",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 45,
              "name": "FA Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/45.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "4th Round"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": true
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592326,
              "referee": "P. Tierney",
              "timezone": "UTC",
              "date": "2021-01-17T16:30:00+00:00",
              "timestamp": 1610901000,
              "periods": {
                "first": 1610901000,
                "second": 1610904600
              },
              "venue": {
                "id": 550,
                "name": "Anfield",
                "city": "Liverpool"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 19"
            },
            "teams": {
              "home": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": null
              },
              "away": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": null
              }
            },
            "goals": {
              "home": 0,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157238,
              "referee": "Craig Pawson, England",
              "timezone": "UTC",
              "date": "2020-01-19T16:30:00+00:00",
              "timestamp": 1579451400,
              "periods": {
                "first": 1579451400,
                "second": 1579455000
              },
              "venue": {
                "id": 550,
                "name": "Anfield",
                "city": "Liverpool"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 23"
            },
            "teams": {
              "home": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": true
              },
              "away": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157101,
              "referee": "Martin Atkinson, England",
              "timezone": "UTC",
              "date": "2019-10-20T15:30:00+00:00",
              "timestamp": 1571585400,
              "periods": {
                "first": 1571585400,
                "second": 1571589000
              },
              "venue": {
                "id": 556,
                "name": "Old Trafford",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 9"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": null
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 332,
              "referee": "Michael Oliver, England",
              "timezone": "UTC",
              "date": "2019-02-24T14:05:00+00:00",
              "timestamp": 1551017100,
              "periods": {
                "first": 1551017100,
                "second": 1551020700
              },
              "venue": {
                "id": 556,
                "name": "Old Trafford",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 27"
            },
            "teams": {
              "home": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": null
              },
              "away": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": null
              }
            },
            "goals": {
              "home": 0,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 0,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 229,
              "referee": "Martin Atkinson, England",
              "timezone": "UTC",
              "date": "2018-12-16T16:00:00+00:00",
              "timestamp": 1544976000,
              "periods": {
                "first": 1544976000,
                "second": 1544979600
              },
              "venue": {
                "id": 550,
                "name": "Anfield",
                "city": "Liverpool"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 17"
            },
            "teams": {
              "home": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media.api-sports.io/football/teams/40.png",
                "winner": true
              },
              "away": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media.api-sports.io/football/teams/33.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867973",
        "predictions": {
          "winner": {
            "id": 50,
            "name": "Manchester City",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": "+1.5",
          "goals": {
            "home": "-1.5",
            "away": "-3.5"
          },
          "advice": "Combo Winner : Manchester City and +1.5 goals",
          "percent": {
            "home": "0%",
            "draw": "50%",
            "away": "50%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 34,
            "name": "Newcastle",
            "logo": "https://media.api-sports.io/football/teams/34.png",
            "last_5": {
              "form": "67%",
              "att": "18%",
              "def": "100%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 0,
                  "average": "0.0"
                }
              }
            },
            "league": {
              "form": "WD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 0,
                    "total": 0
                  },
                  "average": {
                    "home": "0.0",
                    "away": "0.0",
                    "total": "0.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 1,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": "2-0",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 0
                  },
                  "against": {
                    "home": 0,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 1,
                "total": 2
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 50,
            "name": "Manchester City",
            "logo": "https://media.api-sports.io/football/teams/50.png",
            "last_5": {
              "form": "100%",
              "att": "55%",
              "def": "100%",
              "goals": {
                "for": {
                  "total": 6,
                  "average": "3.0"
                },
                "against": {
                  "total": 0,
                  "average": "0.0"
                }
              }
            },
            "league": {
              "form": "WW",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 4,
                    "away": 2,
                    "total": 6
                  },
                  "average": {
                    "home": "4.0",
                    "away": "2.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "31-45": {
                      "total": 3,
                      "percentage": "60.00%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 0,
                    "total": 0
                  },
                  "average": {
                    "home": "0.0",
                    "away": "0.0",
                    "total": "0.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "100.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 2,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": "4-0",
                  "away": "0-2"
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 4,
                    "away": 2
                  },
                  "against": {
                    "home": 0,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 1,
                "total": 2
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 1,
                  "percentage": "100.00%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 1
              },
              "lineups": [
                {
                  "formation": "4-3-3",
                  "played": 1
                },
                {
                  "formation": "4-2-3-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "100.00%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "40%",
            "away": "60%"
          },
          "att": {
            "home": "25%",
            "away": "75%"
          },
          "def": {
            "home": "0%",
            "away": "0%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "0%"
          },
          "h2h": {
            "home": "0%",
            "away": "100%"
          },
          "goals": {
            "home": "13%",
            "away": "87%"
          },
          "total": {
            "home": "26.0%",
            "away": "74.0%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710914,
              "referee": "S. Attwell",
              "timezone": "UTC",
              "date": "2022-05-08T15:30:00+00:00",
              "timestamp": 1652023800,
              "periods": {
                "first": 1652023800,
                "second": 1652027400
              },
              "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 36"
            },
            "teams": {
              "home": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              },
              "away": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              }
            },
            "goals": {
              "home": 5,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 0
              },
              "fulltime": {
                "home": 5,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710730,
              "referee": "M. Atkinson",
              "timezone": "UTC",
              "date": "2021-12-19T14:00:00+00:00",
              "timestamp": 1639922400,
              "periods": {
                "first": 1639922400,
                "second": 1639926000
              },
              "venue": {
                "id": 562,
                "name": "St. James' Park",
                "city": "Newcastle upon Tyne"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 18"
            },
            "teams": {
              "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              },
              "away": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 4
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 0,
                "away": 4
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592852,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2021-05-14T19:00:00+00:00",
              "timestamp": 1621018800,
              "periods": {
                "first": 1621018800,
                "second": 1621022400
              },
              "venue": {
                "id": 562,
                "name": "St. James' Park",
                "city": "Newcastle upon Tyne"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 36"
            },
            "teams": {
              "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              },
              "away": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              }
            },
            "goals": {
              "home": 3,
              "away": 4
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 2
              },
              "fulltime": {
                "home": 3,
                "away": 4
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592287,
              "referee": "A. Marriner",
              "timezone": "UTC",
              "date": "2020-12-26T20:00:00+00:00",
              "timestamp": 1609012800,
              "periods": {
                "first": 1609012800,
                "second": 1609016400
              },
              "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 15"
            },
            "teams": {
              "home": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              },
              "away": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157351,
              "referee": "Andy Madley, England",
              "timezone": "UTC",
              "date": "2020-07-08T17:00:00+00:00",
              "timestamp": 1594227600,
              "periods": {
                "first": 1594227600,
                "second": 1594231200
              },
              "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 34"
            },
            "teams": {
              "home": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              },
              "away": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              }
            },
            "goals": {
              "home": 5,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 0
              },
              "fulltime": {
                "home": 5,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 338396,
              "referee": "L. Mason",
              "timezone": "UTC",
              "date": "2020-06-28T17:30:00+00:00",
              "timestamp": 1593365400,
              "periods": {
                "first": 1593365400,
                "second": 1593369000
              },
              "venue": {
                "id": 562,
                "name": "St. James' Park",
                "city": "Newcastle upon Tyne"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 45,
              "name": "FA Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/45.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Quarter-finals"
            },
            "teams": {
              "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              },
              "away": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157150,
              "referee": "Chris Kavanagh, England",
              "timezone": "UTC",
              "date": "2019-11-30T12:30:00+00:00",
              "timestamp": 1575117000,
              "periods": {
                "first": 1575117000,
                "second": 1575120600
              },
              "venue": {
                "id": 562,
                "name": "St. James' Park",
                "city": "Newcastle upon Tyne"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 14"
            },
            "teams": {
              "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": null
              },
              "away": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": null
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 301,
              "referee": "Paul Tierney, England",
              "timezone": "UTC",
              "date": "2019-01-29T20:00:00+00:00",
              "timestamp": 1548792000,
              "periods": {
                "first": 1548792000,
                "second": 1548795600
              },
              "venue": {
                "id": 562,
                "name": "St James' Park",
                "city": "Newcastle upon Tyne"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 24"
            },
            "teams": {
              "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": true
              },
              "away": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 102,
              "referee": "Kevin Friend, England",
              "timezone": "UTC",
              "date": "2018-09-01T16:30:00+00:00",
              "timestamp": 1535819400,
              "periods": {
                "first": 1535819400,
                "second": 1535823000
              },
              "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 4"
            },
            "teams": {
              "home": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              },
              "away": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 11674,
              "referee": "Paul Tierney, England",
              "timezone": "UTC",
              "date": "2018-01-20T17:30:00+00:00",
              "timestamp": 1516469400,
              "periods": {
                "first": 1516469400,
                "second": 1516473000
              },
              "venue": {
                "id": 555,
                "name": "Etihad Stadium",
                "city": "Manchester"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2017,
              "round": "Regular Season - 24"
            },
            "teams": {
              "home": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media.api-sports.io/football/teams/50.png",
                "winner": true
              },
              "away": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867974",
        "predictions": {
          "winner": {
            "id": 47,
            "name": "Tottenham",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": "+1.5",
          "goals": {
            "home": "-4.5",
            "away": "-1.5"
          },
          "advice": "Combo Winner : Tottenham and +1.5 goals",
          "percent": {
            "home": "45%",
            "draw": "45%",
            "away": "10%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 47,
            "name": "Tottenham",
            "logo": "https://media.api-sports.io/football/teams/47.png",
            "last_5": {
              "form": "67%",
              "att": "55%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 6,
                  "average": "3.0"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "WD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "draws": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 4,
                    "away": 2,
                    "total": 6
                  },
                  "average": {
                    "home": "4.0",
                    "away": "2.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 2,
                      "percentage": "40.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": 1,
                      "percentage": "20.00%"
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 1,
                    "away": 2,
                    "total": 3
                  },
                  "average": {
                    "home": "1.0",
                    "away": "2.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "25.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 1,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": "4-1",
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 4,
                    "away": 2
                  },
                  "against": {
                    "home": 1,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "3-4-2-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 39,
            "name": "Wolves",
            "logo": "https://media.api-sports.io/football/teams/39.png",
            "last_5": {
              "form": "17%",
              "att": "9%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 1,
                  "average": "0.5"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "LD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 0,
                    "away": 1,
                    "total": 1
                  },
                  "average": {
                    "home": "0.0",
                    "away": "1.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 2,
                    "total": 2
                  },
                  "average": {
                    "home": "0.0",
                    "away": "2.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "100.00%"
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 1
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": "2-1"
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 1
                  },
                  "against": {
                    "home": 0,
                    "away": 2
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "failed_to_score": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "80%",
            "away": "20%"
          },
          "att": {
            "home": "86%",
            "away": "14%"
          },
          "def": {
            "home": "40%",
            "away": "60%"
          },
          "poisson_distribution": {
            "home": "83%",
            "away": "17%"
          },
          "h2h": {
            "home": "62%",
            "away": "38%"
          },
          "goals": {
            "home": "55%",
            "away": "45%"
          },
          "total": {
            "home": "67.7%",
            "away": "32.3%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710804,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2022-02-13T14:00:00+00:00",
              "timestamp": 1644760800,
              "periods": {
                "first": 1644760800,
                "second": 1644764400
              },
              "venue": {
                "id": 593,
                "name": "Tottenham Hotspur Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 25"
            },
            "teams": {
              "home": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": false
              },
              "away": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 0,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 787062,
              "referee": "P. Bankes",
              "timezone": "UTC",
              "date": "2021-09-22T18:45:00+00:00",
              "timestamp": 1632336300,
              "periods": {
                "first": 1632336300,
                "second": 1632339900
              },
              "venue": {
                "id": 600,
                "name": "Molineux Stadium",
                "city": "Wolverhampton, West Midlands"
              },
              "status": {
                "long": "Match Finished",
                "short": "PEN",
                "elapsed": 120
              }
            },
            "league": {
              "id": 48,
              "name": "League Cup",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/48.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "3rd Round"
            },
            "teams": {
              "home": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": false
              },
              "away": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": true
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 2
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": 0,
                "away": 0
              },
              "penalty": {
                "home": 2,
                "away": 3
              }
            }
          },
          {
            "fixture": {
              "id": 710575,
              "referee": "S. Attwell",
              "timezone": "UTC",
              "date": "2021-08-22T13:00:00+00:00",
              "timestamp": 1629637200,
              "periods": {
                "first": 1629637200,
                "second": 1629640800
              },
              "venue": {
                "id": 600,
                "name": "Molineux Stadium",
                "city": "Wolverhampton, West Midlands"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 2"
            },
            "teams": {
              "home": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": false
              },
              "away": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592854,
              "referee": "M. Atkinson",
              "timezone": "UTC",
              "date": "2021-05-16T13:05:00+00:00",
              "timestamp": 1621170300,
              "periods": {
                "first": 1621170300,
                "second": 1621173900
              },
              "venue": {
                "id": 593,
                "name": "Tottenham Hotspur Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 36"
            },
            "teams": {
              "home": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": true
              },
              "away": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592290,
              "referee": "P. Tierney",
              "timezone": "UTC",
              "date": "2020-12-27T19:15:00+00:00",
              "timestamp": 1609096500,
              "periods": {
                "first": 1609096500,
                "second": 1609100100
              },
              "venue": {
                "id": 600,
                "name": "Molineux Stadium",
                "city": "Wolverhampton, West Midlands"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 15"
            },
            "teams": {
              "home": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": null
              },
              "away": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157292,
              "referee": "Stuart Attwell, England",
              "timezone": "UTC",
              "date": "2020-03-01T14:00:00+00:00",
              "timestamp": 1583071200,
              "periods": {
                "first": 1583071200,
                "second": 1583074800
              },
              "venue": {
                "id": 593,
                "name": "Tottenham Hotspur Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 28"
            },
            "teams": {
              "home": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": false
              },
              "away": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": true
              }
            },
            "goals": {
              "home": 2,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157184,
              "referee": "Stuart Attwell, England",
              "timezone": "UTC",
              "date": "2019-12-15T14:00:00+00:00",
              "timestamp": 1576418400,
              "periods": {
                "first": 1576418400,
                "second": 1576422000
              },
              "venue": {
                "id": 600,
                "name": "Molineux Stadium",
                "city": "Wolverhampton, West Midlands"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 17"
            },
            "teams": {
              "home": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": false
              },
              "away": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 263,
              "referee": "Stuart Attwell, England",
              "timezone": "UTC",
              "date": "2018-12-29T15:00:00+00:00",
              "timestamp": 1546095600,
              "periods": {
                "first": 1546095600,
                "second": 1546099200
              },
              "venue": {
                "id": 489,
                "name": "Wembley Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 20"
            },
            "teams": {
              "home": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": false
              },
              "away": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 174,
              "referee": "Mike Dean, England",
              "timezone": "UTC",
              "date": "2018-11-03T19:45:00+00:00",
              "timestamp": 1541274300,
              "periods": {
                "first": 1541274300,
                "second": 1541277900
              },
              "venue": {
                "id": null,
                "name": "Molineux Stadium",
                "city": "Wolverhampton"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 11"
            },
            "teams": {
              "home": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": false
              },
              "away": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": true
              }
            },
            "goals": {
              "home": 2,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 2,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 194022,
              "referee": null,
              "timezone": "UTC",
              "date": "2012-01-14T15:00:00+00:00",
              "timestamp": 1326553200,
              "periods": {
                "first": 1326553200,
                "second": 1326556800
              },
              "venue": {
                "id": null,
                "name": "White Hart Lane (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2011,
              "round": "Regular Season - 21"
            },
            "teams": {
              "home": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media.api-sports.io/football/teams/47.png",
                "winner": null
              },
              "away": {
                "id": 39,
                "name": "Wolves",
                "logo": "https://media.api-sports.io/football/teams/39.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867975",
        "predictions": {
          "winner": {
            "id": 51,
            "name": "Brighton",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": null,
          "goals": {
            "home": null,
            "away": "-3.5"
          },
          "advice": "Winner : Brighton",
          "percent": {
            "home": "10%",
            "draw": "45%",
            "away": "45%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 48,
            "name": "West Ham",
            "logo": "https://media.api-sports.io/football/teams/48.png",
            "last_5": {
              "form": "0%",
              "att": "0%",
              "def": "73%",
              "goals": {
                "for": {
                  "total": 0,
                  "average": "0.0"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
                }
              }
            },
            "league": {
              "form": "LL",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 0,
                    "away": 0,
                    "total": 0
                  },
                  "average": {
                    "home": "0.0",
                    "away": "0.0",
                    "total": "0.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 1,
                    "total": 3
                  },
                  "average": {
                    "home": "2.0",
                    "away": "1.0",
                    "total": "1.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "46-60": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 0,
                  "loses": 2
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": "0-2",
                  "away": "1-0"
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 0
                  },
                  "against": {
                    "home": 2,
                    "away": 1
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "failed_to_score": {
                "home": 1,
                "away": 1,
                "total": 2
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": 1,
                    "percentage": "100.00%"
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media.api-sports.io/football/teams/51.png",
            "last_5": {
              "form": "67%",
              "att": "18%",
              "def": "91%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 1,
                  "average": "0.5"
                }
              }
            },
            "league": {
              "form": "WD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 1,
                  "total": 1
                },
                "draws": {
                  "home": 1,
                  "away": 0,
                  "total": 1
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 0,
                    "away": 2,
                    "total": 2
                  },
                  "average": {
                    "home": "0.0",
                    "away": "2.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "33.33%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 0,
                    "away": 1,
                    "total": 1
                  },
                  "average": {
                    "home": "0.0",
                    "away": "1.0",
                    "total": "0.5"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": null,
                      "percentage": null
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 1,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": "1-2"
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 2
                  },
                  "against": {
                    "home": 0,
                    "away": 1
                  }
                }
              },
              "clean_sheet": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "failed_to_score": {
                "home": 1,
                "away": 0,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "3-3-3-1",
                  "played": 1
                },
                {
                  "formation": "3-4-2-1",
                  "played": 1
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "46-60": {
                    "total": 2,
                    "percentage": "66.67%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "0%",
            "away": "100%"
          },
          "att": {
            "home": "0%",
            "away": "100%"
          },
          "def": {
            "home": "25%",
            "away": "75%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "100%"
          },
          "h2h": {
            "home": "36%",
            "away": "64%"
          },
          "goals": {
            "home": "44%",
            "away": "56%"
          },
          "total": {
            "home": "35.0%",
            "away": "65.0%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710928,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2022-05-22T15:00:00+00:00",
              "timestamp": 1653231600,
              "periods": {
                "first": 1653231600,
                "second": 1653235200
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 38"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 710690,
              "referee": "C. Kavanagh",
              "timezone": "UTC",
              "date": "2021-12-01T19:30:00+00:00",
              "timestamp": 1638387000,
              "periods": {
                "first": 1638387000,
                "second": 1638390600
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2021,
              "round": "Regular Season - 14"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592846,
              "referee": "A. Marriner",
              "timezone": "UTC",
              "date": "2021-05-15T19:00:00+00:00",
              "timestamp": 1621105200,
              "periods": {
                "first": 1621105200,
                "second": 1621108800
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 36"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592289,
              "referee": "S. Hooper",
              "timezone": "UTC",
              "date": "2020-12-27T14:15:00+00:00",
              "timestamp": 1609078500,
              "periods": {
                "first": 1609078500,
                "second": 1609082100
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 15"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157264,
              "referee": "Michael Oliver, England",
              "timezone": "UTC",
              "date": "2020-02-01T15:00:00+00:00",
              "timestamp": 1580569200,
              "periods": {
                "first": 1580569200,
                "second": 1580572800
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 25"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              }
            },
            "goals": {
              "home": 3,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 0
              },
              "fulltime": {
                "home": 3,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 157027,
              "referee": "Anthony Taylor, England",
              "timezone": "UTC",
              "date": "2019-08-17T14:00:00+00:00",
              "timestamp": 1566050400,
              "periods": {
                "first": 1566050400,
                "second": 1566054000
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2019,
              "round": "Regular Season - 2"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 273,
              "referee": "Chris Kavanagh, England",
              "timezone": "UTC",
              "date": "2019-01-02T19:45:00+00:00",
              "timestamp": 1546458300,
              "periods": {
                "first": 1546458300,
                "second": 1546461900
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 21"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": null
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              }
            },
            "goals": {
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 2
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 135,
              "referee": "Kevin Friend, England",
              "timezone": "UTC",
              "date": "2018-10-05T19:00:00+00:00",
              "timestamp": 1538766000,
              "periods": {
                "first": 1538766000,
                "second": 1538769600
              },
              "venue": {
                "id": null,
                "name": "American Express Community Stadium",
                "city": "Falmer"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 8"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              }
            },
            "goals": {
              "home": 1,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 11657,
              "referee": "Roger East, England",
              "timezone": "UTC",
              "date": "2018-02-03T15:00:00+00:00",
              "timestamp": 1517670000,
              "periods": {
                "first": 1517670000,
                "second": 1517673600
              },
              "venue": {
                "id": null,
                "name": "American Express Community Stadium",
                "city": "Falmer"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2017,
              "round": "Regular Season - 26"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 3,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 11831,
              "referee": "Martin Atkinson, England",
              "timezone": "UTC",
              "date": "2017-10-20T19:00:00+00:00",
              "timestamp": 1508526000,
              "periods": {
                "first": 1508526000,
                "second": 1508529600
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2017,
              "round": "Regular Season - 9"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 0,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      },
      {
        "id": "867976",
        "predictions": {
          "winner": {
            "id": 42,
            "name": "Arsenal",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": null,
          "goals": {
            "home": "-3.5",
            "away": "-1.5"
          },
          "advice": "Winner : Arsenal",
          "percent": {
            "home": "45%",
            "draw": "45%",
            "away": "10%"
          }
        },
        "league": {
          "id": 39,
          "name": "Premier League",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/39.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2022
        },
        "teams": {
          "home": {
            "id": 42,
            "name": "Arsenal",
            "logo": "https://media.api-sports.io/football/teams/42.png",
            "last_5": {
              "form": "100%",
              "att": "55%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 6,
                  "average": "3.0"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "WW",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "draws": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 4,
                    "away": 2,
                    "total": 6
                  },
                  "average": {
                    "home": "4.0",
                    "away": "2.0",
                    "total": "3.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": 2,
                      "percentage": "33.33%"
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "46-60": {
                      "total": 2,
                      "percentage": "33.33%"
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "16.67%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 2,
                  "draws": 0,
                  "loses": 0
                },
                "wins": {
                  "home": "4-2",
                  "away": "0-2"
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 4,
                    "away": 2
                  },
                  "against": {
                    "home": 2,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 0,
                "total": 0
              },
              "penalty": {
                "scored": {
                  "total": 0,
                  "percentage": "0%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 0
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "33.33%"
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media.api-sports.io/football/teams/36.png",
            "last_5": {
              "form": "33%",
              "att": "18%",
              "def": "82%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 2,
                  "average": "1.0"
                }
              }
            },
            "league": {
              "form": "DD",
              "fixtures": {
                "played": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "wins": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                },
                "draws": {
                  "home": 1,
                  "away": 1,
                  "total": 2
                },
                "loses": {
                  "home": 0,
                  "away": 0,
                  "total": 0
                }
              },
              "goals": {
                "for": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": null,
                      "percentage": null
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                },
                "against": {
                  "total": {
                    "home": 2,
                    "away": 0,
                    "total": 2
                  },
                  "average": {
                    "home": "2.0",
                    "away": "0.0",
                    "total": "1.0"
                  },
                  "minute": {
                    "0-15": {
                      "total": null,
                      "percentage": null
                    },
                    "16-30": {
                      "total": null,
                      "percentage": null
                    },
                    "31-45": {
                      "total": null,
                      "percentage": null
                    },
                    "46-60": {
                      "total": null,
                      "percentage": null
                    },
                    "61-75": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "76-90": {
                      "total": 1,
                      "percentage": "50.00%"
                    },
                    "91-105": {
                      "total": null,
                      "percentage": null
                    },
                    "106-120": {
                      "total": null,
                      "percentage": null
                    }
                  }
                }
              },
              "biggest": {
                "streak": {
                  "wins": 0,
                  "draws": 2,
                  "loses": 0
                },
                "wins": {
                  "home": null,
                  "away": null
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 2,
                    "away": 0
                  },
                  "against": {
                    "home": 2,
                    "away": 0
                  }
                }
              },
              "clean_sheet": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "failed_to_score": {
                "home": 0,
                "away": 1,
                "total": 1
              },
              "penalty": {
                "scored": {
                  "total": 1,
                  "percentage": "100.00%"
                },
                "missed": {
                  "total": 0,
                  "percentage": "0%"
                },
                "total": 1
              },
              "lineups": [
                {
                  "formation": "4-2-3-1",
                  "played": 2
                }
              ],
              "cards": {
                "yellow": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "31-45": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "46-60": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "91-105": {
                    "total": 1,
                    "percentage": "20.00%"
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                },
                "red": {
                  "0-15": {
                    "total": null,
                    "percentage": null
                  },
                  "16-30": {
                    "total": null,
                    "percentage": null
                  },
                  "31-45": {
                    "total": null,
                    "percentage": null
                  },
                  "46-60": {
                    "total": null,
                    "percentage": null
                  },
                  "61-75": {
                    "total": null,
                    "percentage": null
                  },
                  "76-90": {
                    "total": null,
                    "percentage": null
                  },
                  "91-105": {
                    "total": null,
                    "percentage": null
                  },
                  "106-120": {
                    "total": null,
                    "percentage": null
                  }
                }
              }
            }
          }
        },
        "comparison": {
          "form": {
            "home": "75%",
            "away": "25%"
          },
          "att": {
            "home": "75%",
            "away": "25%"
          },
          "def": {
            "home": "50%",
            "away": "50%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "0%"
          },
          "h2h": {
            "home": "93%",
            "away": "7%"
          },
          "goals": {
            "home": "83%",
            "away": "17%"
          },
          "total": {
            "home": "75.2%",
            "away": "24.8%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 592806,
              "referee": "C. Pawson",
              "timezone": "UTC",
              "date": "2021-04-18T12:30:00+00:00",
              "timestamp": 1618749000,
              "periods": {
                "first": 1618749000,
                "second": 1618752600
              },
              "venue": {
                "id": 494,
                "name": "Emirates Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 32"
            },
            "teams": {
              "home": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": null
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 592143,
              "referee": "C. Kavanagh",
              "timezone": "UTC",
              "date": "2020-09-12T11:30:00+00:00",
              "timestamp": 1599910200,
              "periods": {
                "first": 1599910200,
                "second": 1599913800
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2020,
              "round": "Regular Season - 1"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              },
              "away": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 265,
              "referee": "Graham Scott, England",
              "timezone": "UTC",
              "date": "2019-01-01T15:00:00+00:00",
              "timestamp": 1546354800,
              "periods": {
                "first": 1546354800,
                "second": 1546358400
              },
              "venue": {
                "id": 494,
                "name": "Emirates Stadium",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 21"
            },
            "teams": {
              "home": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 4,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 0
              },
              "fulltime": {
                "home": 4,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 138,
              "referee": "Paul Tierney, England",
              "timezone": "UTC",
              "date": "2018-10-07T11:00:00+00:00",
              "timestamp": 1538910000,
              "periods": {
                "first": 1538910000,
                "second": 1538913600
              },
              "venue": {
                "id": 535,
                "name": "Craven Cottage",
                "city": "London"
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2018,
              "round": "Regular Season - 8"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              },
              "away": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 5
            },
            "score": {
              "halftime": {
                "home": 1,
                "away": 1
              },
              "fulltime": {
                "home": 1,
                "away": 5
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 193268,
              "referee": null,
              "timezone": "UTC",
              "date": "2014-01-18T15:00:00+00:00",
              "timestamp": 1390057200,
              "periods": {
                "first": 1390057200,
                "second": 1390060800
              },
              "venue": {
                "id": null,
                "name": "Emirates Stadium (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2013,
              "round": "Regular Season - 22"
            },
            "teams": {
              "home": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 0
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 2,
                "away": 0
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 193067,
              "referee": null,
              "timezone": "UTC",
              "date": "2013-08-24T11:45:00+00:00",
              "timestamp": 1377344700,
              "periods": {
                "first": 1377344700,
                "second": 1377348300
              },
              "venue": {
                "id": null,
                "name": "Craven Cottage (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2013,
              "round": "Regular Season - 2"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              },
              "away": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              }
            },
            "goals": {
              "home": 1,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 2
              },
              "fulltime": {
                "home": 1,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 193767,
              "referee": null,
              "timezone": "UTC",
              "date": "2013-04-20T14:00:00+00:00",
              "timestamp": 1366466400,
              "periods": {
                "first": 1366466400,
                "second": 1366470000
              },
              "venue": {
                "id": null,
                "name": "Craven Cottage (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2012,
              "round": "Regular Season - 34"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": false
              },
              "away": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": true
              }
            },
            "goals": {
              "home": 0,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 0,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 193537,
              "referee": null,
              "timezone": "UTC",
              "date": "2012-11-10T15:00:00+00:00",
              "timestamp": 1352559600,
              "periods": {
                "first": 1352559600,
                "second": 1352563200
              },
              "venue": {
                "id": null,
                "name": "Emirates Stadium (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2012,
              "round": "Regular Season - 11"
            },
            "teams": {
              "home": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": null
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              }
            },
            "goals": {
              "home": 3,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 2
              },
              "fulltime": {
                "home": 3,
                "away": 3
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 194011,
              "referee": null,
              "timezone": "UTC",
              "date": "2012-01-02T17:30:00+00:00",
              "timestamp": 1325525400,
              "periods": {
                "first": 1325525400,
                "second": 1325529000
              },
              "venue": {
                "id": null,
                "name": "Craven Cottage (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2011,
              "round": "Regular Season - 20"
            },
            "teams": {
              "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": true
              },
              "away": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": false
              }
            },
            "goals": {
              "home": 2,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 1
              },
              "fulltime": {
                "home": 2,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          },
          {
            "fixture": {
              "id": 193944,
              "referee": null,
              "timezone": "UTC",
              "date": "2011-11-26T17:30:00+00:00",
              "timestamp": 1322328600,
              "periods": {
                "first": 1322328600,
                "second": 1322332200
              },
              "venue": {
                "id": null,
                "name": "Emirates Stadium (London)",
                "city": null
              },
              "status": {
                "long": "Match Finished",
                "short": "FT",
                "elapsed": 90
              }
            },
            "league": {
              "id": 39,
              "name": "Premier League",
              "country": "England",
              "logo": "https://media.api-sports.io/football/leagues/39.png",
              "flag": "https://media.api-sports.io/flags/gb.svg",
              "season": 2011,
              "round": "Regular Season - 13"
            },
            "teams": {
              "home": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media.api-sports.io/football/teams/42.png",
                "winner": null
              },
              "away": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
                "winner": null
              }
            },
            "goals": {
              "home": 1,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
              },
              "fulltime": {
                "home": 1,
                "away": 1
              },
              "extratime": {
                "home": null,
                "away": null
              },
              "penalty": {
                "home": null,
                "away": null
              }
            }
          }
        ]
      }
    ],

  }