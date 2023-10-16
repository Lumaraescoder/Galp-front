import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import StyledButton from './Buttton';

export default {
  title: 'StyledButton',
  component: StyledButton
} as Meta<typeof StyledButton>;

const Template: StoryFn<typeof StyledButton> = (args) => <StyledButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Login',
  onClick: action('button-click')
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  children: 'Click Me!',
  onClick: action('button-click')
};
