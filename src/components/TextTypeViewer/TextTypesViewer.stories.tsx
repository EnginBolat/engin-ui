import React from 'react';
import { StoryFn } from '@storybook/react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import TextTypeViewer from './TextTypeViewer';

export default {
  title: 'Theme/TextTypeViewer',
  component: TextTypeViewer,
};

const Template: StoryFn = () => (
  <SafeAreaView style={styles.container}>
    <TextTypeViewer />
  </SafeAreaView>
);

export const Default = Template.bind({});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
