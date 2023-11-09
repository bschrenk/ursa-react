import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ButtonGroup } from './ButtonGroup'; // Make sure to import your ButtonGroup component and its props
import { Button } from '../Button/Button';

const meta = {
  title: 'Example/ButtonGroup', // Set the title for your story
  component: ButtonGroup,
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
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: (
      <>
        <Button onClick={(e) => { console.log(e) }} id='left'>Left</Button>
        <Button onClick={(e) => { console.log(e) }} id='middle'>Middle</Button>
        <Button onClick={(e) => { console.log(e) }} id='right'>Right</Button>
      </>
    )
  },
};