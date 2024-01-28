import type { Meta, StoryObj } from '@storybook/react';
import  ImageContainer  from './ImageContainer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ImageContainer> = {
  component: ImageContainer,
  title: 'REACT-SHARED-UI/CONTAINERS/ImageContainer',
};
export default meta;
type Story = StoryObj<typeof ImageContainer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ImageContainer!/gi)).toBeTruthy();
  },
};
