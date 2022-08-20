import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data =   {
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
          "att": "33%",
          "def": "75%",
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
          "att": "25%",
          "def": "83%",
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
  }