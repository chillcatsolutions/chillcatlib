import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*Default config of Button*/
export const defaultTheme: Story = {
  args: {
    label: 'default',
  },
};

export const defaultOutlined: Story = {
  args: {
    label: 'default Outlined',
    outlined: true,
  },
};

export const defaultAnimated: Story = {
  args: {
    label: 'Default Animated',
    clickAnimation: true,
  },
};

export const defaultOutlinedAnimated: Story = {
  args: {
    label: 'default outlined animated',
    outlined: true,
    clickAnimation: true,
  },
};
/*END ---- Default config of Button*/

/*Dark config of Button*/
export const darkTheme: Story = {
  args: {
    label: 'dark',
    mode: 'dark',
  },
};

export const darkOutlined: Story = {
  args: {
    label: 'dark Outlined',
    mode: 'dark',
    outlined: true,
  },
};

export const darkAnimated: Story = {
  args: {
    label: 'dark Animated',
    mode: 'dark',
    clickAnimation: true,
  },
};

export const darkOutlinedAnimated: Story = {
  args: {
    label: 'dark outlined animated',
    mode: 'dark',
    outlined: true,
    clickAnimation: true,
  },
};
/*END ---- Dark config of Button*/

/*Light config of Button*/
export const lightTheme: Story = {
  args: {
    label: 'light',
    mode: 'light',
  },
};

export const lightOutlined: Story = {
  args: {
    label: 'light Outlined',
    mode: 'light',
    outlined: true,
  },
};

export const lightAnimated: Story = {
  args: {
    label: 'light Animated',
    mode: 'light',
    clickAnimation: true,
  },
};

export const lightOutlinedAnimated: Story = {
  args: {
    label: 'light outlined animated',
    mode: 'light',
    outlined: true,
    clickAnimation: true,
  },
};
/*END ---- Light config of Button*/