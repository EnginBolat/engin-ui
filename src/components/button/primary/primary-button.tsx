import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IPrimaryButton {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  onPress,
  title,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles(disabled).button}
    >
      <Text style={styles().text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = (disabled?: boolean) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: disabled ? 'black' : 'grey',
    },
    text: {
      fontWeight: '500',
    },
  });
};
