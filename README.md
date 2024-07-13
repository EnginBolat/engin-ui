# engin-ui

UI components for my self

## Installation

```sh
npm install engin-ui
```

## Usage

```js
import { Button, TextInput } from 'engin-ui';

// ...
      <TextInput
        value="value"
        onChangeText={(text) => {}}
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
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
