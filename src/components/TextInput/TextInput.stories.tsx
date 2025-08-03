import React from 'react';
import { Meta, StoryObj } from '@storybook/react-native';
import { View, StyleSheet } from 'react-native';
import TextInput from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Bir şeyler yaz...',
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: args => (
    <View style={styles.container}>
      <TextInput {...args} />
    </View>
  ),
};

export const ErrorState: Story = {
  render: args => (
    <View style={styles.container}>
      <TextInput {...args} hasError />
    </View>
  ),
};

export const PasswordState: Story = {
  render: args => (
    <View style={styles.container}>
      <TextInput {...args} hasError secureTextEntry/>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
