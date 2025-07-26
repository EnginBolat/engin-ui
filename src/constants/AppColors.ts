type Pallete = {
  100: string;
  80: string;
  60: string;
  40: string;
  20: string;
};

export type IAppColors = {
  primaryPurple: Pallete;
  secondaryYellow: Pallete;
  secondaryOrange: Pallete;
  secondaryBlue: Pallete;
  accentRed: Pallete;
  text: {
    main: string;
    white: string;
    styled: string;
    highContrast: string;
    lowContrast: string;
    disableText: string;
    placeholderDefault: string;
    placeholderTyping: string;
  };
  alert: {
    success: string;
    warning: string;
    cancel: string;
  };
  artboard: {
    mainArtboard: string;
    modalArtboard: string;
    creamArtboard: string;
    darkArtboard: string;
  };
  seperator: {
    lightSeperator: string;
    darkSeperator: string;
  };
  boarder: {
    boarderInactive: string;
    boarderActive: string;
  };
  placeholder: {
    default: string;
    typeFilled: string;
  };
  label: {
    active: string;
    inactive: string;
  };
  menu: {
    tagBackground: string;
    active: string;
    inactive: string;
  };
  icons: {
    default: string;
    white: string;
    primary: string;
    secondary: string;
  };
  toggle: {
    on: string;
    off: string;
  };
};

export const AppColors: IAppColors = {
  primaryPurple: {
    100: '#DB00FF',
    80: '#E233FF',
    60: '#EA66FF',
    40: '#F199FF',
    20: '#F8CCFF',
  },
  secondaryYellow: {
    100: '#FFCB45',
    80: '#FFD56A',
    60: '#FFE08F',
    40: '#FFEAB5',
    20: '#FFF5DA',
  },
  secondaryOrange: {
    100: '#FF7644',
    80: '#FF9169',
    60: '#FFAD8F',
    40: '#FFC8B4',
    20: '#FFE4DA',
  },
  secondaryBlue: {
    100: '#0093FF',
    80: '#33A9FF',
    60: '#66BEFF',
    40: '#99D4FF',
    20: '#CCE9FF',
  },
  accentRed: {
    100: '#FF4179',
    80: '#FF6794',
    60: '#FF8DAF',
    40: '#FFB3C9',
    20: '#FFD9E4',
  },
  text: {
    main: '#393938',
    white: '#FFFFFF',
    styled: '#DB00FF',
    highContrast: '#000000',
    lowContrast: '#666666',
    disableText: '#777675',
    placeholderDefault: '#666666',
    placeholderTyping: '#393938',
  },
  alert: {
    success: '#00C814',
    warning: '#FFD569',
    cancel: '#E10000',
  },
  artboard: {
    mainArtboard: '#FFFFFF',
    modalArtboard: '#FBFBFB',
    creamArtboard: '#FFF7E4',
    darkArtboard: '#0D0D0D',
  },
  seperator: {
    lightSeperator: '#D9D9D9',
    darkSeperator: '#171717',
  },
  boarder: {
    boarderInactive: '#E5E5E5',
    boarderActive: '#DB00FF',
  },
  placeholder: {
    default: '#FFFF',
    typeFilled: '#EFEFEF',
  },
  label: {
    active: '#DB00FF',
    inactive: '#D7D5D3',
  },
  menu: {
    tagBackground: '#00000',
    active: '#DB00FF',
    inactive: '#D9D9D9',
  },
  icons: {
    default: '#C4C4C4',
    white: '#FFF',
    primary: '#DB00FF',
    secondary: '#FFCB45',
  },
  toggle: {
    on: '#DB00FF',
    off: '#D7D5D3',
  },
};
