import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/Button/Button';

console.log(`STORYBOOK_ENABLED: ${process.env.STORYBOOK_ENABLED}`);

const App = () => (
  <View style={styles.container}>
    <Text>{process.env.STORYBOOK_ENABLED ? 'Storybook' : 'Normal'} Start</Text>
    <Button
      title="Click Me"
      onPress={() => console.log('Button Pressed!')}
      variant='primary'
    />
  </View>
);

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED === 'true') {
  AppEntryPoint = require('./.rnstorybook').default;
}

export default AppEntryPoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
});
