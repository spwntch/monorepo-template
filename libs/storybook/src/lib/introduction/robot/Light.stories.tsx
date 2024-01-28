import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Light> = {
  title: 'WELCOME/Light',
  component: Light,
};
export default meta;

type Story = StoryObj<typeof Light>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};

export const green: Story = {
  args: { color: 'green' },
};

export const orange: Story = {
  args: { color: 'orange' },
};

export const red: Story = {
  args: { color: 'red' },
};
