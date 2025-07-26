import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed!' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Default Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    title: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Danger = {
  args: {
    ...Default.args,
    title: 'Danger Button',
    variant: 'danger',
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    title: 'Disabled Button',
    disabled: true,
  },
};
