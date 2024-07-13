import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'engin-ui';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput
        value="value"
        maxLength={200}
        multiline={true}
        showMaxLengthTextAlign="right"
      />
      <Button
        onPress={() => {}}
        title="Button"
        width="full"
        disabled={false}
        isHaveShadow={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
