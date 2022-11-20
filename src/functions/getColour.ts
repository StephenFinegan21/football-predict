const colours = {
  Arsenal: ["rgb(239, 1, 7)", "rgb(230, 231, 237)"],
  AstonVilla: ["rgb(103,14,54)", "rgb(149,191,229)"],
  Bournemouth: ["rgb(218, 41, 28)", "rgb(33, 33, 33)"],
  Brentford: ["rgb(227, 6, 19)", "rgb(250, 245, 245)"],
  Brighton: ["rgb(0, 87, 184)", "rgb(255, 205, 0)"],
  Chelsea: ["rgb(3, 70, 148)", "rgb(238, 36, 44)"],
  CrystalPalace: ["rgb(27, 69, 143)", "rgb(196, 18, 46)"],
  Everton: ["rgb(39,68,136)", "rgb(250, 245, 245)"],
  Fulham: ["rgb(250, 245, 245)", "rgb(0, 0, 0)"],
  Leeds: ["rgb(250, 245, 245)", "rgb(255, 204, 0)"],
  Leicester: ["rgb(0,83,160)", "rgb(253,190,17)"],
  Liverpool: ["rgb(200, 16, 46)", "rgb(0, 178, 169)"],
  ManchesterCity: ["rgb(108, 171, 221)", "rgb(28, 44, 91)"],
  ManchesterUnited: ["rgb(218, 41, 28)", "rgb(0, 0, 0)"],
  Newcastle: ["rgb(45, 41, 38)", "rgb(250, 245, 245)"],
  NottinghamForest: ["rgb(229, 50, 51)", "rgb(250, 245, 245)"],
  Southampton: ["rgb(215, 25, 32)", "rgb(250, 245, 245)"],
  Tottenham: ["rgb(250, 245, 245)", "rgb(19, 34, 87)"],
  WestHam: ["rgb(122, 38, 58)", "rgb(27, 177, 231)"],
  Wolves: ["rgb(253,185,19)", "rgb(0, 0, 0)"],
};

export const getColours = (teamName: any) => {
  let match;
  for (const [key, value] of Object.entries(colours)) {
    if (`${key}` === teamName.split(" ").join("")) {
      match = value;
    }
  }

  return match;
};
