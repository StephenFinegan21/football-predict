import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =  {
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
  }