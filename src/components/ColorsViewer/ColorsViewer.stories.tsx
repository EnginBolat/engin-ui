import React from 'react';
import { StoryFn } from '@storybook/react-native';
import { SafeAreaView } from 'react-native';
import Colors from './ColorsViewer';

export default {
  title: 'Theme/ColorViewer',
  component: Colors,
};

const Template: StoryFn = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Colors />
  </SafeAreaView>
);

export const Default = Template.bind({});
