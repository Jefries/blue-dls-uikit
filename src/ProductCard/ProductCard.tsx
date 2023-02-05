import React, { HTMLAttributes } from 'react';
import './ProductCard.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  img?: string;
  size?: 'default'|'small';
  title?: string;
  disabled?: boolean;
}

export const ProductCard = ({
    disabled = false,
    size = 'default',
    title,
    ...props
  }: Props) => {
  const mode =disabled ? 'disabled' : '';
  return (
    <div className={['product-card', `product-card--${size}`, mode].join(' ')} {...props}>
      <img src={props.img} alt="image product" />
      <div className='product-description'>
        <h2 className='product-title'>{title}</h2>
        <div className='product-price'>
          Rp 3.550.000
        </div>
        <div className='discount'>
          <span className='discount--value'>Rp 1.000.000</span>
          <span className='discount--percentage'>50%</span>
        </div>

        { disabled ? (
            <button className='button disabled'>Out of stock</button>
          ) : (
            <button className='button primary'>Add to bag</button>
          )
        }
      </div>
    </div>
  );
};

export default ProductCard;