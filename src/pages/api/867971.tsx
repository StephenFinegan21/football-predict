import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =  {
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
          "att": "33%",
          "def": "50%",
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
          "att": "25%",
          "def": "50%",
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
        "home": "70%",
        "away": "30%"
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
        "home": "63.8%",
        "away": "36.2%"
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
      }
    ]
  }