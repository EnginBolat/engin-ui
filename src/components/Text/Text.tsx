import { Text as RNText, TextStyle } from 'react-native';

import { TextProps } from './Types';

const Text = (props: TextProps) => {
  const { color, text: value, type, ...restProps } = props;
  const titleStyle: TextStyle = type ? { ...type } : {};

  return (
    <RNText {...restProps} style={{ ...titleStyle, color }}>
      {value}
    </RNText>
  );
};

export default Text;
