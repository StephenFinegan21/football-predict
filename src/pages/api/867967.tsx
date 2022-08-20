import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}

const data = 
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
  }