import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json( {
    
      "response": [
        {
          "fixture": {
            "id": 867966,
            "referee": "C. Pawson",
            "timezone": "UTC",
            "date": "2022-08-20T16:30:00+00:00",
            "timestamp": 1661013000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 504,
              "name": "Vitality Stadium",
              "city": "Bournemouth, Dorset"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
          },
          "teams": {
            "home": {
              "id": 35,
              "name": "Bournemouth",
              "logo": "https://media.api-sports.io/football/teams/35.png",
              "winner": null
            },
            "away": {
              "id": 42,
              "name": "Arsenal",
              "logo": "https://media.api-sports.io/football/teams/42.png",
              "winner": null
            }
          },
          "goals": {
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867967,
            "referee": "A. Madley",
            "timezone": "UTC",
            "date": "2022-08-20T14:00:00+00:00",
            "timestamp": 1661004000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 525,
              "name": "Selhurst Park",
              "city": "London"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
          },
          "teams": {
            "home": {
              "id": 52,
              "name": "Crystal Palace",
              "logo": "https://media.api-sports.io/football/teams/52.png",
              "winner": null
            },
            "away": {
              "id": 66,
              "name": "Aston Villa",
              "logo": "https://media.api-sports.io/football/teams/66.png",
              "winner": null
            }
          },
          "goals": {
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867968,
            "referee": "A. Marriner",
            "timezone": "UTC",
            "date": "2022-08-20T14:00:00+00:00",
            "timestamp": 1661004000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 8560,
              "name": "Goodison Park",
              "city": "Liverpool"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
          },
          "teams": {
            "home": {
              "id": 45,
              "name": "Everton",
              "logo": "https://media.api-sports.io/football/teams/45.png",
              "winner": null
            },
            "away": {
              "id": 65,
              "name": "Nottingham Forest",
              "logo": "https://media.api-sports.io/football/teams/65.png",
              "winner": null
            }
          },
          "goals": {
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867969,
            "referee": "P. Bankes",
            "timezone": "UTC",
            "date": "2022-08-20T14:00:00+00:00",
            "timestamp": 1661004000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 535,
              "name": "Craven Cottage",
              "city": "London"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867970,
            "referee": "S. Attwell",
            "timezone": "UTC",
            "date": "2022-08-21T13:00:00+00:00",
            "timestamp": 1661086800,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 546,
              "name": "Elland Road",
              "city": "Leeds, West Yorkshire"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867971,
            "referee": "M. Salisbury",
            "timezone": "UTC",
            "date": "2022-08-20T14:00:00+00:00",
            "timestamp": 1661004000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 547,
              "name": "King Power Stadium",
              "city": "Leicester, Leicestershire"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
          },
          "teams": {
            "home": {
              "id": 46,
              "name": "Leicester",
              "logo": "https://media.api-sports.io/football/teams/46.png",
              "winner": null
            },
            "away": {
              "id": 41,
              "name": "Southampton",
              "logo": "https://media.api-sports.io/football/teams/41.png",
              "winner": null
            }
          },
          "goals": {
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867972,
            "referee": "M. Oliver",
            "timezone": "UTC",
            "date": "2022-08-22T19:00:00+00:00",
            "timestamp": 1661194800,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 556,
              "name": "Old Trafford",
              "city": "Manchester"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867973,
            "referee": "J. Gillett",
            "timezone": "UTC",
            "date": "2022-08-21T15:30:00+00:00",
            "timestamp": 1661095800,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 562,
              "name": "St. James' Park",
              "city": "Newcastle upon Tyne"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867974,
            "referee": "S. Hooper",
            "timezone": "UTC",
            "date": "2022-08-20T11:30:00+00:00",
            "timestamp": 1660995000,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 593,
              "name": "Tottenham Hotspur Stadium",
              "city": "London"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
            "id": 867975,
            "referee": "A. Taylor",
            "timezone": "UTC",
            "date": "2022-08-21T13:00:00+00:00",
            "timestamp": 1661086800,
            "periods": {
              "first": null,
              "second": null
            },
            "venue": {
              "id": 598,
              "name": "London Stadium",
              "city": "London"
            },
            "status": {
              "long": "Not Started",
              "short": "NS",
              "elapsed": null
            }
          },
          "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2022,
            "round": "Regular Season - 3"
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
            "home": null,
            "away": null
          },
          "score": {
            "halftime": {
              "home": null,
              "away": null
            },
            "fulltime": {
              "home": null,
              "away": null
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
    })
  }

 