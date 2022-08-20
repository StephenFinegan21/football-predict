import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data,
  });
}

const data = {
    "predictions": {
    "winner": {
      "id": 65,
      "name": "Nottingham Forest",
      "comment": "Win or draw"
    },
    "win_or_draw": true,
    "under_over": "-3.5",
    "goals": {
      "home": "-1.5",
      "away": "-1.5"
    },
    "advice": "Combo Double chance : draw or Nottingham Forest and -3.5 goals",
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
      "id": 45,
      "name": "Everton",
      "logo": "https://media.api-sports.io/football/teams/45.png",
      "last_5": {
        "form": "0%",
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
                "total": 1,
                "percentage": "25.00%"
              },
              "46-60": {
                "total": 1,
                "percentage": "25.00%"
              },
              "61-75": {
                "total": null,
                "percentage": null
              },
              "76-90": {
                "total": 2,
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
            "loses": 2
          },
          "wins": {
            "home": null,
            "away": null
          },
          "loses": {
            "home": "0-1",
            "away": "2-1"
          },
          "goals": {
            "for": {
              "home": 0,
              "away": 1
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
            "formation": "5-4-1",
            "played": 1
          },
          {
            "formation": "3-4-3",
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
              "percentage": "25.00%"
            },
            "46-60": {
              "total": 1,
              "percentage": "25.00%"
            },
            "61-75": {
              "total": null,
              "percentage": null
            },
            "76-90": {
              "total": 1,
              "percentage": "25.00%"
            },
            "91-105": {
              "total": 1,
              "percentage": "25.00%"
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
      "id": 65,
      "name": "Nottingham Forest",
      "logo": "https://media.api-sports.io/football/teams/65.png",
      "last_5": {
        "form": "50%",
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
          }
        },
        "biggest": {
          "streak": {
            "wins": 0,
            "draws": 0,
            "loses": 1
          },
          "wins": {
            "home": "1-0",
            "away": null
          },
          "loses": {
            "home": null,
            "away": "2-0"
          },
          "goals": {
            "for": {
              "home": 1,
              "away": 0
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
            "formation": "3-4-1-2",
            "played": 2
          }
        ],
        "cards": {
          "yellow": {
            "0-15": {
              "total": 1,
              "percentage": "14.29%"
            },
            "16-30": {
              "total": 1,
              "percentage": "14.29%"
            },
            "31-45": {
              "total": null,
              "percentage": null
            },
            "46-60": {
              "total": 1,
              "percentage": "14.29%"
            },
            "61-75": {
              "total": 2,
              "percentage": "28.57%"
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
      "home": "0%",
      "away": "100%"
    },
    "att": {
      "home": "50%",
      "away": "50%"
    },
    "def": {
      "home": "40%",
      "away": "60%"
    },
    "poisson_distribution": {
      "home": "0%",
      "away": "0%"
    },
    "h2h": {
      "home": "0%",
      "away": "0%"
    },
    "goals": {
      "home": "0%",
      "away": "0%"
    },
    "total": {
      "home": "45.0%",
      "away": "55.0%"
    }
  },
  "h2h": []
}
