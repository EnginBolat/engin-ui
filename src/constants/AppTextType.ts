import { TextStyle } from 'react-native';

const STATIC_FONT_FAMILY = 'Euclid-Circular-A-Regular';

type IText = {
  regular: TextStyle;
  medium: TextStyle;
  bold: TextStyle;
};

export type ITextType = {
  heading: {
    small: IText;
    large: IText;
  };
  paragraph: {
    small: IText;
    normal: IText;
    large: IText;
  };
  label: {
    small: IText;
    normal: IText;
    large: IText;
  };
  tab: {
    inactive: TextStyle;
    active: TextStyle;
  };
};

export const TextType: ITextType = {
  heading: {
    small: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 700,
      },
    },
    large: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 700,
      },
    },
  },
  paragraph: {
    small: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 700,
      },
    },
    normal: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 700,
      },
    },
    large: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 18,
        lineHeight: 23,
        fontWeight: 700,
      },
    },
  },
  label: {
    small: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        fontWeight: 700,
      },
    },
    normal: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: 700,
      },
    },
    large: {
      regular: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 400,
      },
      medium: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 500,
      },
      bold: {
        fontFamily: STATIC_FONT_FAMILY,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 700,
      },
    },
  },
  tab: {
    inactive: {
      fontFamily: STATIC_FONT_FAMILY,
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 400,
    },
    active: {
      fontFamily: STATIC_FONT_FAMILY,
      fontSize: 14,
      lineHeight: 18,
      fontWeight: 700,
    },
  },
};

export type TextTypeKey =
  | 'heading.small.regular'
  | 'heading.small.medium'
  | 'heading.small.bold'
  | 'heading.large.regular'
  | 'heading.large.medium'
  | 'heading.large.bold'
  | 'paragraph.small.regular'
  | 'paragraph.small.medium'
  | 'paragraph.small.bold'
  | 'paragraph.normal.regular'
  | 'paragraph.normal.medium'
  | 'paragraph.normal.bold'
  | 'paragraph.large.regular'
  | 'paragraph.large.medium'
  | 'paragraph.large.bold'
  | 'label.small.regular'
  | 'label.small.medium'
  | 'label.small.bold'
  | 'label.normal.regular'
  | 'label.normal.medium'
  | 'label.normal.bold'
  | 'label.large.regular'
  | 'label.large.medium'
  | 'label.large.bold'
  | 'tab.inactive'
  | 'tab.active';

