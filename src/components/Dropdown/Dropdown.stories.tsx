import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    options: [
      { label: 'Eugenia', value: 'Eugenia' },
      { label: 'Bryan', value: 'Bryan' },
      { label: 'Linda', value: 'Linda' },
      { label: 'Nancy', value: 'Nancy' },
      { label: 'Lloyd', value: 'Lloyd' },
      { label: 'Alice', value: 'Alice' },
      { label: 'Julia', value: 'Julia' },
      { label: 'Albert', value: 'Albert' }
    ],
    inputTitle: "Name Picker",
    buttonText: 'Clear',
    inputPlaceholder: 'Pick a Name'
  },
};
