import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'WELCOME/Light',
};
export default meta;
type Story = StoryObj<typeof Light>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Light!/gi)).toBeTruthy();
  },
};
