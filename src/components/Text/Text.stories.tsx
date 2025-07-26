import { Meta, StoryObj } from '@storybook/react-native';

import Text from './Text';
import { TextProps } from './Types';
import { TextType } from '../../constants/AppTextType';
import { AppColors } from '../../constants/AppColors';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    type: {
      control: 'object',
      defaultValue: {
        ...TextType.heading.large.medium,
      },
    },
    color: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    text: 'Text',
    type: TextType.heading.large.medium,
    color: AppColors.primaryPurple[20],
  },
};
