

import React, { useState, useEffect } from 'react';
import axios from "axios";

 export const useTestGetFixtures = () => {
  

  const options =[
    {
        "fixture": {
            "id": 867946,
            "referee": null,
            "timezone": "UTC",
            "date": "2022-08-05T19:00:00+00:00",
            "timestamp": 1659726000,
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
            "round": "Regular Season - 1"
        },
        "teams": {
            "home": {
                "id": 52,
                "name": "Crystal Palace",
                "logo": "https://media.api-sports.io/football/teams/52.png",
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
            "id": 867947,
            "referee": null,
            "timezone": "UTC",
            "date": "2022-08-06T11:30:00+00:00",
            "timestamp": 1659785400,
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
            "round": "Regular Season - 1"
        },
        "teams": {
            "home": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media.api-sports.io/football/teams/36.png",
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
            "id": 867948,
            "referee": null,
            "timezone": "UTC",
            "date": "2022-08-06T14:00:00+00:00",
            "timestamp": 1659794400,
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
            "round": "Regular Season - 1"
        },
        "teams": {
            "home": {
                "id": 35,
                "name": "Bournemouth",
                "logo": "https://media.api-sports.io/football/teams/35.png",
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
            "id": 867949,
            "referee": null,
            "timezone": "UTC",
            "date": "2022-08-06T14:00:00+00:00",
            "timestamp": 1659794400,
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
            "round": "Regular Season - 1"
        },
        "teams": {
            "home": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media.api-sports.io/football/teams/63.png",
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
            "id": 867951,
            "referee": null,
            "timezone": "UTC",
            "date": "2022-08-06T14:00:00+00:00",
            "timestamp": 1659794400,
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
            "round": "Regular Season - 1"
        },
        "teams": {
            "home": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media.api-sports.io/football/teams/34.png",
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
    }
]
return options

};




