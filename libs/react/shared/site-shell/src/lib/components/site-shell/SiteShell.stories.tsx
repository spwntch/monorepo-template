import type { Meta, StoryObj } from '@storybook/react';
import { ReactSharedSiteShell } from './SiteShell';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ReactSharedSiteShell> = {
  component: ReactSharedSiteShell,
  title: 'ReactSharedSiteShell',
};
export default meta;
type Story = StoryObj<typeof ReactSharedSiteShell>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ReactSharedSiteShell!/gi)).toBeTruthy();
  },
};
