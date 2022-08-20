import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}



const data = 
    {
        "predictions": {
          "winner": {
            "id": 51,
            "name": "Brighton",
            "comment": null
          },
          "win_or_draw": false,
          "under_over": null,
          "goals": {
            "home": null,
            "away": "-3.5"
          },
          "advice": "Winner : Brighton",
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
            "id": 48,
            "name": "West Ham",
            "logo": "https://media.api-sports.io/football/teams/48.png",
            "last_5": {
              "form": "0%",
              "att": "0%",
              "def": "75%",
              "goals": {
                "for": {
                  "total": 0,
                  "average": "0.0"
                },
                "against": {
                  "total": 3,
                  "average": "1.5"
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
                  "home": "0-2",
                  "away": "1-0"
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 0
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
                "away": 1,
                "total": 2
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
                    "total": 1,
                    "percentage": "100.00%"
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
          },
          "away": {
            "id": 51,
            "name": "Brighton",
            "logo": "https://media.api-sports.io/football/teams/51.png",
            "last_5": {
              "form": "67%",
              "att": "17%",
              "def": "92%",
              "goals": {
                "for": {
                  "total": 2,
                  "average": "1.0"
                },
                "against": {
                  "total": 1,
                  "average": "0.5"
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
                  "home": null,
                  "away": "1-2"
                },
                "loses": {
                  "home": null,
                  "away": null
                },
                "goals": {
                  "for": {
                    "home": 0,
                    "away": 2
                  },
                  "against": {
                    "home": 0,
                    "away": 1
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
                  "formation": "3-3-3-1",
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
                    "percentage": "33.33%"
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
            "home": "0%",
            "away": "100%"
          },
          "att": {
            "home": "0%",
            "away": "100%"
          },
          "def": {
            "home": "25%",
            "away": "75%"
          },
          "poisson_distribution": {
            "home": "0%",
            "away": "100%"
          },
          "h2h": {
            "home": "36%",
            "away": "64%"
          },
          "goals": {
            "home": "44%",
            "away": "56%"
          },
          "total": {
            "home": "35.0%",
            "away": "65.0%"
          }
        },
        "h2h": [
          {
            "fixture": {
              "id": 710928,
              "referee": "K. Friend",
              "timezone": "UTC",
              "date": "2022-05-22T15:00:00+00:00",
              "timestamp": 1653231600,
              "periods": {
                "first": 1653231600,
                "second": 1653235200
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
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
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              }
            },
            "goals": {
              "home": 3,
              "away": 1
            },
            "score": {
              "halftime": {
                "home": 0,
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
              "id": 710690,
              "referee": "C. Kavanagh",
              "timezone": "UTC",
              "date": "2021-12-01T19:30:00+00:00",
              "timestamp": 1638387000,
              "periods": {
                "first": 1638387000,
                "second": 1638390600
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
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
              "round": "Regular Season - 14"
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
              "id": 592846,
              "referee": "A. Marriner",
              "timezone": "UTC",
              "date": "2021-05-15T19:00:00+00:00",
              "timestamp": 1621105200,
              "periods": {
                "first": 1621105200,
                "second": 1621108800
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
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
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
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
              "id": 592289,
              "referee": "S. Hooper",
              "timezone": "UTC",
              "date": "2020-12-27T14:15:00+00:00",
              "timestamp": 1609078500,
              "periods": {
                "first": 1609078500,
                "second": 1609082100
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
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
              "round": "Regular Season - 15"
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
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
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
              "id": 157264,
              "referee": "Michael Oliver, England",
              "timezone": "UTC",
              "date": "2020-02-01T15:00:00+00:00",
              "timestamp": 1580569200,
              "periods": {
                "first": 1580569200,
                "second": 1580572800
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
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
              "round": "Regular Season - 25"
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
              "home": 3,
              "away": 3
            },
            "score": {
              "halftime": {
                "home": 2,
                "away": 0
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
              "id": 157027,
              "referee": "Anthony Taylor, England",
              "timezone": "UTC",
              "date": "2019-08-17T14:00:00+00:00",
              "timestamp": 1566050400,
              "periods": {
                "first": 1566050400,
                "second": 1566054000
              },
              "venue": {
                "id": 508,
                "name": "The American Express Community Stadium",
                "city": "Falmer, East Sussex"
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
              "round": "Regular Season - 2"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": null
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
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
              "id": 273,
              "referee": "Chris Kavanagh, England",
              "timezone": "UTC",
              "date": "2019-01-02T19:45:00+00:00",
              "timestamp": 1546458300,
              "periods": {
                "first": 1546458300,
                "second": 1546461900
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
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
              "home": 2,
              "away": 2
            },
            "score": {
              "halftime": {
                "home": 0,
                "away": 0
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
              "id": 135,
              "referee": "Kevin Friend, England",
              "timezone": "UTC",
              "date": "2018-10-05T19:00:00+00:00",
              "timestamp": 1538766000,
              "periods": {
                "first": 1538766000,
                "second": 1538769600
              },
              "venue": {
                "id": null,
                "name": "American Express Community Stadium",
                "city": "Falmer"
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
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
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
              "id": 11657,
              "referee": "Roger East, England",
              "timezone": "UTC",
              "date": "2018-02-03T15:00:00+00:00",
              "timestamp": 1517670000,
              "periods": {
                "first": 1517670000,
                "second": 1517673600
              },
              "venue": {
                "id": null,
                "name": "American Express Community Stadium",
                "city": "Falmer"
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
              "round": "Regular Season - 26"
            },
            "teams": {
              "home": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
                "winner": true
              },
              "away": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
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
              "id": 11831,
              "referee": "Martin Atkinson, England",
              "timezone": "UTC",
              "date": "2017-10-20T19:00:00+00:00",
              "timestamp": 1508526000,
              "periods": {
                "first": 1508526000,
                "second": 1508529600
              },
              "venue": {
                "id": 598,
                "name": "London Stadium",
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
              "season": 2017,
              "round": "Regular Season - 9"
            },
            "teams": {
              "home": {
                "id": 48,
                "name": "West Ham",
                "logo": "https://media.api-sports.io/football/teams/48.png",
                "winner": false
              },
              "away": {
                "id": 51,
                "name": "Brighton",
                "logo": "https://media.api-sports.io/football/teams/51.png",
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
                "away": 2
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
          }
        ]
      }