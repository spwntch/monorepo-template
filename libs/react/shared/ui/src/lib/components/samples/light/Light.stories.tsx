import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
  title: 'REACT-SHARED-UI/Samples/Light',
  component: Light,
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
      <div className="w-fit rounded-full bg-slate-200 p-3 border-2 border-black grid grid-cols-1 gap-2">
        <Light color="red" />
        <Light color="yellow" />
        <Light />
      </div>
    );
  },
};
