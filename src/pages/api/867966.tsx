import { NextApiRequest, NextApiResponse } from "next";

export default  function handler(req: NextApiRequest, res: NextApiResponse) {

  
  res.status(200).json({  
    data
});
}


const data = 
  {  
      
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
      
    
}