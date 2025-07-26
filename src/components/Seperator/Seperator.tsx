import { StyleSheet, View } from 'react-native';
import { AppColors } from '../../constants/AppColors';

const Seperator = () => <View style={styles.seperator} />;

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: AppColors.menu.inactive,
    opacity: 0.5,
  },
});
