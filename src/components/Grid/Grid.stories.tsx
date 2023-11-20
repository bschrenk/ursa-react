import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Grid, GridProps } from './Grid';
import {Row} from './Row';
import {Column} from './Column';
import { Card } from '../Card/Card';

const meta: Meta = {
  title: 'Example/Grid Row Column',
  component: Grid,
  parameters: {
    layout: "fullscreen", // or `padded` by default
  },
  tags: ['autodocs'],
};

export default meta;

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Row>
      <Column>
        <Card>Column 1/3</Card>
      </Column>
      <Column>
        <Card>Column 1/3</Card>
      </Column>
      <Column>
        <Card>Column 1/3</Card>
      </Column>
    </Row>
  </Grid>
);

const Template2: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Row>
      <Column>
        <Card>Column 1/2</Card>
      </Column>
      <Column>
        <Card>Column 1/2</Card>
      </Column>
    </Row>
  </Grid>
);

const Template3: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Row>
      <Column>
        <Card>Column 1</Card>
      </Column>
    </Row>
  </Grid>
);

export const OneColumnLayout: Story<GridProps> = Template3.bind({});
OneColumnLayout.args = {
  children: '',
};

export const TwoColumnLayout: Story<GridProps> = Template2.bind({});
TwoColumnLayout.args = {
  children: '',
};


export const ThreeColumnLayout: Story<GridProps> = Template.bind({});
ThreeColumnLayout.args = {
  children: '',
};
