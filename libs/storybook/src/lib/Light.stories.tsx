import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
  title: 'WELCOME/Light',
  component: Light,
  // tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Light>;

/** With no color speficied, we'll default to green. */
export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement);
  },
};

/** color = red */
export const red: Story = {
  args: { color: 'red' },
};

/** color = yellow */
export const yellow: Story = {
  args: { color: 'yellow' },
};

/** color = green */
export const green: Story = {
  args: { color: 'green' },
};

/** Compose lights in a flex column div for a regular traffic light*/
export const composedTrafficLight: Story = {
  render: () => {
    return (
      <div
        style={{
          width: 50,
          borderRadius: 25,
          background: 'lightgrey',
          padding: 10,
          border: '2px solid black',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <Light color="red" />
        <Light color="yellow" />
        <Light />
      </div>
    );
  },
};
