import { TextStyle } from 'react-native';
import { TextType } from '../constants/AppTextType';

export const capitalize = (word: string): string => {
  if (!word) return '';

  const upperCasedFirstLetter = word[0].toUpperCase();
  const rest = word.slice(1);

  return upperCasedFirstLetter + rest;
};

export const splitCamelCase = (word: string): string => {
  const result = word.replace(/([a-z])([A-Z])/g, '$1 $2');
  return result;
};

export const returnTextTypeFromKey = (
  outcomeTitleStyle: string,
): TextStyle | undefined => {
  let titleStyle: TextStyle = {};

  if (outcomeTitleStyle) {
    const keys = outcomeTitleStyle.split('.') as [string, string?, string?];

    if (keys.length === 3) {
      titleStyle = (TextType as any)[keys[0]]?.[keys[1]!]?.[keys[2]!] ?? {};
    } else if (keys.length === 2) {
      titleStyle = (TextType as any)[keys[0]]?.[keys[1]!] ?? {};
    } else {
      return undefined;
    }
  }

  return titleStyle;
};
