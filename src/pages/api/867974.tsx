import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =  {
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
      }
    ]
  }
   