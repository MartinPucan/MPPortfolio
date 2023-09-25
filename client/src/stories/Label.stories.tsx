import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label from '../components/Label/Label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};