import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =  {
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