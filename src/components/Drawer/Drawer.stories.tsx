import React from 'react';
import { Meta, Story } from '@storybook/react';
import Drawer, { DrawerProps } from './Drawer';

const meta: Meta = {
  title: 'Example/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>
    <div>
      This is the content of the Drawer.
    </div>
  </Drawer>
);

export const Default: Story<DrawerProps> = Template.bind({});
Default.args = {
  placement: 'right',
  children: 'Your content here', // Provide values for required properties
};

export const LeftPlacement: Story<DrawerProps> = Template.bind({});
LeftPlacement.args = {
  placement: 'left',
  children: 'Your content here', // Provide values for required properties
};

export const TopPlacement: Story<DrawerProps> = Template.bind({});
TopPlacement.args = {
  placement: 'top',
  children: 'Your content here', // Provide values for required properties
};

export const BottomPlacement: Story<DrawerProps> = Template.bind({});
BottomPlacement.args = {
  placement: 'bottom',
  children: 'Your content here', // Provide values for required properties
};