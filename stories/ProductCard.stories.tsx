import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProductCard, Props } from '../src/ProductCard/ProductCard';

export default {
  title: 'uikit/Blue DLS by Jefri/ProductCard',
  component: ProductCard,
  tags:['autodocs'],
  argTypes: {
    img: { control: 'text' },
    size: { control: 'radio', options: ['default', 'small'] },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    price: { control: 'number' },
    discountValue: { control: 'number' },
    buttonText: { control: 'text' },
    disabledButtonText: { control: 'text' },
    rateValue: { 
      control: { type: 'range', min: 0, max: 5, step: 0.1 }
    },
    sold: { control: 'number' }
  }
} as Meta<typeof ProductCard>;

const Template: StoryFn<Props> = (args) => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return <ProductCard {...args} onButtonClick={handleButtonClick} />;
};

export const Default = Template.bind({});
Default.args = {
  img: 'https://picsum.photos/200/200',
  size: 'default',
  title: 'Sample Product Name',
  disabled: false,
  price: 3550000,
  discountValue: 1000000,
  buttonText: 'Add to bag',
  disabledButtonText: 'Out of stock',
  rateValue: 4.7,
  sold: 1000,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Product Name Small',
  img: 'https://picsum.photos/200/200',
};
