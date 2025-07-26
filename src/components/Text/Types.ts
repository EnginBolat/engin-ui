import { TextProps as RNTextProps, TextStyle } from 'react-native';

export interface TextProps extends RNTextProps {
  color?: string;
  type?: TextStyle;
  text: string;
}
