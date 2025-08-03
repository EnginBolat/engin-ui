import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import { AppColors } from '../../constants/AppColors';
import { useState } from 'react';

interface TextInputProps extends RNTextInputProps {
  hasError?: boolean;
}

const TextInput = (props: TextInputProps) => {
  const { hasError, style, ...restProps } = props;
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = hasError
    ? AppColors.alert.cancel
    : isFocused
    ? AppColors.primaryPurple[100]
    : AppColors.boarder.boarderInactive;

  return (
    <RNTextInput
      {...restProps}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={[styles.input, { borderColor }, style]}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    height: 50,
  },
});
