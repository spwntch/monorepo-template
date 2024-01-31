import type { Meta, StoryObj } from '@storybook/react';
import FullscreenImageContainer from './FullscreenImageContainer';

const meta: Meta<typeof FullscreenImageContainer> = {
  component: FullscreenImageContainer,
  title: 'Containers/FullscreenImageContainer',
};
export default meta;
type Story = StoryObj<typeof FullscreenImageContainer>;

export const Primary:Story = {
  args: {},
};
