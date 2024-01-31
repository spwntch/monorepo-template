import type { Meta, StoryObj } from '@storybook/react';
import BackgroundImageContainer from './BackgroundImageContainer';

const meta: Meta<typeof BackgroundImageContainer> = {
  component: BackgroundImageContainer,
  title: 'Containers/Background Image Container',
};
export default meta;
type Story = StoryObj<typeof BackgroundImageContainer>;

export const Simple: Story = {
  render: () => (
    <div className="h-96 aspect-video">
      <BackgroundImageContainer />
      
    </div>
  ),
};
