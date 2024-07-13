import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type GestureResponderEvent,
  type LayoutChangeEvent,
  type TargetedEvent,
  type NativeSyntheticEvent,
  type DimensionValue,
} from 'react-native';

interface IPrimaryButton {
  id?: string;
  title: string;
  disabled?: boolean;
  isHaveShadow?: boolean;
  width: 'full' | 'half' | 'querter';
  onPress: (event: GestureResponderEvent) => void;
  onLayout?: (event: LayoutChangeEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
  onFocus?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
}

const PrimaryButton: React.FC<IPrimaryButton> = ({
  id,
  title,
  disabled = false,
  isHaveShadow = true,
  width = 'full',
  onPress,
  onLayout,
  onLongPress,
  onPressIn,
  onPressOut,
  onBlur,
  onFocus,
}) => {
  const [buttonWidth, setButtonWidth] = useState<DimensionValue>();

  useEffect(() => {
    setupButtonWidth();
  });

  const setupButtonWidth = () => {
    let bw = '';
    switch (width) {
      case 'full':
        bw = '100%';
        break;
      case 'half':
        bw = '50%';
        break;
      case 'querter':
        bw = '25%';
        break;
      default:
        break;
    }
    setButtonWidth(bw as DimensionValue);
  };

  return (
    <TouchableOpacity
      id={id}
      disabled={disabled}
      style={
        styles({
          disabled: disabled,
          isHaveShadow: isHaveShadow,
          width: buttonWidth,
        }).button
      }
      onPress={onPress}
      onLayout={onLayout}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      <Text style={styles({ disabled: disabled }).text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

interface StyleProps {
  disabled?: boolean;
  isHaveShadow?: boolean;
  width?: DimensionValue;
}

const styles = (props: Readonly<StyleProps>) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.disabled ? 'grey' : 'black',
      width: props.width,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: props.isHaveShadow ? 1 : 0,
    },
    text: {
      fontWeight: '500',
      color: 'white',
    },
  });
};
