import type { Meta, StoryObj } from '@storybook/react-native';

import Header, { Props } from './Header';
import { IconList } from '../../assets/icons/Icons';

const meta: Meta<Props> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    leftIcon: {
      control: 'select',
      options: IconList,
    },
    rightIcon: {
      control: 'select',
      options: IconList,
    },
    leftIconColor: { control: 'color' },
    rightIconColor: { control: 'color' },
    leftIconHeight: { control: 'text' },
    leftIconWidth: { control: 'text' },
    rightIconHeight: { control: 'text' },
    rightIconWidth: { control: 'text' },
    title: { control: 'text' },
    titleStyle: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    title: 'Header Title',
    leftIcon: 'ArrowLeft',
    leftIconColor: '#333',
    leftIconHeight: '24',
    leftIconWidth: '24',
    rightIcon: 'Notification',
    rightIconColor: '#999',
    rightIconHeight: '24',
    rightIconWidth: '24',
  },
};

export const OnlyLeftIcon: Story = {
  args: {
    title: 'Back',
    titleStyle: 'heading.large.bold',
    leftIcon: 'ArrowLeft',
    leftIconColor: '#000',
    leftIconHeight: '20',
    leftIconWidth: '20',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Just Title',
  },
};

export const RightIconDanger: Story = {
  args: {
    title: 'Delete Mode',
    rightIcon: 'Notification',
    rightIconColor: '#f00',
    rightIconHeight: '20',
    rightIconWidth: '20',
  },
};
