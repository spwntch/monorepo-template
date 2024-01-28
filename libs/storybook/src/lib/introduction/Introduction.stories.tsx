import type { Meta, StoryObj } from '@storybook/react';
import Introduction from './Introduction';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof Introduction> = {
  component: Introduction,
  title: 'WELCOME/Introduction',
};
export default meta;
type Story = StoryObj<typeof Introduction>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Introduction!/gi)).toBeTruthy();
  },
};
