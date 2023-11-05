import type { Meta, StoryObj } from '@storybook/react';

import { Typography, HeadingType } from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: HeadingType.H1,
    content: "This is an H1 heading"
  },
};

export const H2: Story = {
  args: {
    type: HeadingType.H2,
    content: "This is an H2 heading"
  },
};

export const H3: Story = {
  args: {
    type: HeadingType.H3,
    content: "This is an H3 heading"
  },
};

export const H4: Story = {
  args: {
    type: HeadingType.H4,
    content: "This is an H4 heading"
  },
};

export const H5: Story = {
  args: {
    type: HeadingType.H5,
    content: "This is an H5 heading"
  },
};

export const H6: Story = {
  args: {
    type: HeadingType.H6,
    content: "This is an H6 heading"
  },
};