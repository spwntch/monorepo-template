import type { Meta, StoryObj } from '@storybook/react';
import BackgroundImageContainer from './BackgroundImageContainer';

const meta: Meta<typeof BackgroundImageContainer> = {
  component: BackgroundImageContainer,
  title: 'Containers/Background Image Container',
  tags: ['autodocs'],

};
export default meta;
type Story = StoryObj<typeof BackgroundImageContainer>;

export const ContainerOnly: Story = {
  render: () => (
    <div className="h-96 aspect-video">
      <BackgroundImageContainer />
    </div>
  ),
};

export const WithAStyledChild: Story = {
  render: () => (
    <div className="h-96 aspect-video">
      <BackgroundImageContainer>
        <div className="h-full flex justify-center items-center ">
          <div className="text-red-500 text-5xl bg-cyan-200 p-4 rounded-2xl">
            Hello World!
          </div>
        </div>
      </BackgroundImageContainer>
    </div>
  ),
};
