import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';

import { IconsType } from '../../assets/icons/Icons';
import CustomIcon from '../CustomIcon/CustomIcon';
import Seperator from '../Seperator/Seperator';

import { TextTypeKey } from '../../constants/AppTextType';
import { returnTextTypeFromKey } from '../../utils/helper';

export type Props = {
  leftIcon?: IconsType;
  leftIconHeight?: string;
  leftIconWidth?: string;
  leftIconColor?: string;
  leftIconOnPress?: () => void;

  rightIcon?: IconsType;
  rightIconHeight?: string;
  rightIconWidth?: string;
  rightIconColor?: string;
  rightIconOnPress?: () => void;

  title: string;
  titleStyle?: TextTypeKey;
};

const Header = ({
  leftIcon,
  leftIconHeight,
  leftIconWidth,
  leftIconColor,
  leftIconOnPress,
  rightIcon,
  rightIconHeight,
  rightIconWidth,
  rightIconColor,
  rightIconOnPress,
  title,
  titleStyle: outcomeTitleStyle,
}: Props) => {
  const titleStyle: TextStyle = outcomeTitleStyle
    ? returnTextTypeFromKey(outcomeTitleStyle)
    : {};

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {leftIcon && (
            <TouchableOpacity onPress={leftIconOnPress}>
              <CustomIcon
                iconName={leftIcon}
                color={leftIconColor}
                height={leftIconHeight}
                width={leftIconWidth}
              />
            </TouchableOpacity>
          )}
          <Text style={titleStyle}>{title}</Text>
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={rightIconOnPress}>
            <CustomIcon
              iconName={rightIcon}
              color={rightIconColor}
              height={rightIconHeight}
              width={rightIconWidth}
            />
          </TouchableOpacity>
        )}
      </View>
      <Seperator />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    gap: 12,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
});
