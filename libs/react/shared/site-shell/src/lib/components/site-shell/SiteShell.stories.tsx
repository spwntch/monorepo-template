import type { Meta, StoryObj } from '@storybook/react';
import SiteShell from './SiteShell';

const meta: Meta<typeof SiteShell> = {
  component: SiteShell,
  title: 'Site Shell',
};
export default meta;
type Story = StoryObj<typeof SiteShell>;

export const FullyComposed = {
  render: () => {
    return <SiteShell></SiteShell>;
  },
};
