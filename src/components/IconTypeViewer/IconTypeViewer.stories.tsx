import React from 'react';
import { StoryFn } from '@storybook/react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import IconTypeViewer from './IconTypeViewer';

export default {
  title: 'Theme/IconTypeViewer',
  component: IconTypeViewer,
};

const Template: StoryFn = () => (
  <SafeAreaView style={styles.container}>
    <IconTypeViewer />
  </SafeAreaView>
);

export const Default = Template.bind({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
