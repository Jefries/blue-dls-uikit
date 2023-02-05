import React from 'react';
import { Meta, Story } from '@storybook/react';
import  { ProductCard, Props }  from '../src/ProductCard/ProductCard';

const meta: Meta = {
  title: 'uikit/Blue DLS by Jefri/ProductCard',
  component: ProductCard,
};

export default meta;

const Template: Story<Props> = args => <ProductCard {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  disabled: false,
  title: 'John Mayer PRS Silver Sky SE Dragon fruit Made in Indonesia',
  img: 'https://picsum.photos/200/200'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Product Name Small',
  img: 'https://picsum.photos/200/200'
};
