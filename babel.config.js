module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['STORYBOOK_ENABLED'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
