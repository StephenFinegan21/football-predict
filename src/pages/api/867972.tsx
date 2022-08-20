import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =  {
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
          "att": "8%",
          "def": "50%",
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
          "att": "25%",
          "def": "75%",
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
  }