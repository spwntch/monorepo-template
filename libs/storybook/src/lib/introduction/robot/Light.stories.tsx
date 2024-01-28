import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
  title: 'WELCOME/Light',
  component: Light,
};
export default meta;

type Story = StoryObj<typeof Light>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
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

export const trafficLight: Story = {
  render: () => {
    return (
      <div>
        <Light color="red" />
        <Light color="orange" />
        <Light />
      </div>
    );
  },
};
