import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data = {
    "id": "867969",
    "predictions": {
      "winner": {
        "id": 55,
        "name": "Brentford",
        "comment": null
      },
      "win_or_draw": false,
      "under_over": "+1.5",
      "goals": {
        "home": "-2.5",
        "away": "-4.5"
      },
      "advice": "Combo Winner : Brentford and +1.5 goals",
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
      },
      "away": {
        "id": 55,
        "name": "Brentford",
        "logo": "https://media.api-sports.io/football/teams/55.png",
        "last_5": {
          "form": "67%",
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
          "form": "DW",
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
                  "total": 1,
                  "percentage": "16.67%"
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
                  "total": null,
                  "percentage": null
                },
                "61-75": {
                  "total": 1,
                  "percentage": "16.67%"
                },
                "76-90": {
                  "total": 1,
                  "percentage": "16.67%"
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
                  "total": null,
                  "percentage": null
                },
                "31-45": {
                  "total": 1,
                  "percentage": "50.00%"
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
              "draws": 1,
              "loses": 0
            },
            "wins": {
              "home": "4-0",
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
              "played": 1
            },
            {
              "formation": "5-3-2",
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
        "home": "33%",
        "away": "67%"
      },
      "att": {
        "home": "25%",
        "away": "75%"
      },
      "def": {
        "home": "50%",
        "away": "50%"
      },
      "poisson_distribution": {
        "home": "38%",
        "away": "63%"
      },
      "h2h": {
        "home": "29%",
        "away": "71%"
      },
      "goals": {
        "home": "27%",
        "away": "73%"
      },
      "total": {
        "home": "33.7%",
        "away": "66.5%"
      }
    },
    "h2h": [
      {
        "fixture": {
          "id": 635176,
          "referee": "Jonathan Moss, England",
          "timezone": "UTC",
          "date": "2020-10-01T16:30:00+00:00",
          "timestamp": 1601569800,
          "periods": {
            "first": 1601569800,
            "second": 1601573400
          },
          "venue": {
            "id": 10503,
            "name": "Brentford Community Stadium",
            "city": "Brentford, Middlesex"
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
          "season": 2020,
          "round": "8th Finals"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
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
          "id": 575674,
          "referee": "M. Atkinson",
          "timezone": "UTC",
          "date": "2020-08-04T18:45:00+00:00",
          "timestamp": 1596566700,
          "periods": {
            "first": 1596566700,
            "second": 1596570300
          },
          "venue": {
            "id": 489,
            "name": "Wembley Stadium",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "AET",
            "elapsed": 120
          }
        },
        "league": {
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2019,
          "round": "Promotion Play-offs - Final"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
            "winner": false
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media.api-sports.io/football/teams/36.png",
            "winner": true
          }
        },
        "goals": {
          "home": 1,
          "away": 2
        },
        "score": {
          "halftime": {
            "home": null,
            "away": null
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
          "id": 164620,
          "referee": "J. Linington",
          "timezone": "UTC",
          "date": "2020-06-20T11:30:00+00:00",
          "timestamp": 1592652600,
          "periods": {
            "first": 1592652600,
            "second": 1592656200
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
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2019,
          "round": "Regular Season - 38"
        },
        "teams": {
          "home": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media.api-sports.io/football/teams/36.png",
            "winner": false
          },
          "away": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
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
            "away": 0
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
          "id": 164428,
          "referee": "O. Langford",
          "timezone": "UTC",
          "date": "2019-12-14T15:00:00+00:00",
          "timestamp": 1576335600,
          "periods": {
            "first": 1576335600,
            "second": 1576339200
          },
          "venue": {
            "id": 507,
            "name": "Griffin Park",
            "city": "Brentford, Middlesex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2019,
          "round": "Regular Season - 22"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
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
          "home": 1,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 1,
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
          "id": 11951,
          "referee": "Neil Swarbrick, England",
          "timezone": "UTC",
          "date": "2018-04-14T16:30:00+00:00",
          "timestamp": 1523723400,
          "periods": {
            "first": 1523723400,
            "second": 1523727000
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
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2017,
          "round": "Regular Season - 43"
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
          "id": 12227,
          "referee": "Robert Madley, England",
          "timezone": "UTC",
          "date": "2017-12-02T15:00:00+00:00",
          "timestamp": 1512226800,
          "periods": {
            "first": 1512226800,
            "second": 1512230400
          },
          "venue": {
            "id": null,
            "name": "Griffin Park",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2017,
          "round": "Regular Season - 20"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
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
          "id": 17714,
          "referee": "Darren Bond, England",
          "timezone": "UTC",
          "date": "2017-04-29T14:00:00+00:00",
          "timestamp": 1493474400,
          "periods": {
            "first": 1493474400,
            "second": 1493478000
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
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2016,
          "round": "Regular Season - 45"
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
          "home": 1,
          "away": 1
        },
        "score": {
          "halftime": {
            "home": 1,
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
          "id": 18068,
          "referee": "Tim Robinson, England",
          "timezone": "UTC",
          "date": "2016-11-04T19:45:00+00:00",
          "timestamp": 1478288700,
          "periods": {
            "first": 1478288700,
            "second": 1478292300
          },
          "venue": {
            "id": null,
            "name": "Griffin Park",
            "city": "London"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2016,
          "round": "Regular Season - 16"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
            "winner": false
          },
          "away": {
            "id": 36,
            "name": "Fulham",
            "logo": "https://media.api-sports.io/football/teams/36.png",
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
          "id": 371337,
          "referee": "Mark Haywood, England",
          "timezone": "UTC",
          "date": "2016-04-30T14:00:00+00:00",
          "timestamp": 1462024800,
          "periods": {
            "first": 1462024800,
            "second": 1462028400
          },
          "venue": {
            "id": 507,
            "name": "Griffin Park",
            "city": "Brentford, Middlesex"
          },
          "status": {
            "long": "Match Finished",
            "short": "FT",
            "elapsed": 90
          }
        },
        "league": {
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2015,
          "round": "Regular Season - 45"
        },
        "teams": {
          "home": {
            "id": 55,
            "name": "Brentford",
            "logo": "https://media.api-sports.io/football/teams/55.png",
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
          "home": 3,
          "away": 0
        },
        "score": {
          "halftime": {
            "home": 3,
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
          "id": 371041,
          "referee": "David Coote, England",
          "timezone": "UTC",
          "date": "2015-12-12T15:00:00+00:00",
          "timestamp": 1449932400,
          "periods": {
            "first": 1449932400,
            "second": 1449936000
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
          "id": 40,
          "name": "Championship",
          "country": "England",
          "logo": "https://media.api-sports.io/football/leagues/40.png",
          "flag": "https://media.api-sports.io/flags/gb.svg",
          "season": 2015,
          "round": "Regular Season - 20"
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
      }
    ]
  }