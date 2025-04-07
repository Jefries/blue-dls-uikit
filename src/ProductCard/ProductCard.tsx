import React, { HTMLAttributes } from 'react';
import './ProductCard.css';
import StarIcon from '../../src/assets/StarIcon/StarIcon';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  img?: string;
  size?: 'default' | 'small';
  className?: string;
  title?: string;
  disabled?: boolean;
  price?: number;
  discountValue?: number;
  buttonText?: string;
  disabledButtonText?: string;
  onButtonClick?: () => void;
  rateValue?: number;
  sold?: number;
}

export const ProductCard = ({
    disabled = false,
    size = 'default',
    className = '',
    title,
    price = 0,
    discountValue = 0,
    buttonText = 'Add to bag',
    disabledButtonText = 'Out of stock',
    onButtonClick,
    rateValue = 0,
    sold = 0,
    ...props
  }: Props) => {
  const mode = disabled ? 'disabled' : '';
  const discountedPrice = price - discountValue;
  const discountPercentage = price > 0 ? Math.round((discountValue / price) * 100) : 0;
  const cappedRateValue = Math.min(rateValue, 5.0).toFixed(1);

  const formatSoldValue = (value: number): string => {
    if (value >= 1000) {
      const roundedValue = Math.floor(value / 100) / 10;
      return Number.isInteger(roundedValue) ? `${roundedValue}rb` : `${roundedValue.toFixed(1)}rb`;
    }
    return value.toString();
  };

  return (
    <div className={['product-card', `product-card--${size}`, mode, className].join(' ').trim()} {...props}>
      <img src={props.img} alt="image product" />
      <div className='product-description'>
        <h2 className='product-title'>{title}</h2>
        <div className='product-price'>
          Rp{price.toLocaleString('id-ID')}
        </div>
        {discountValue > 0 && (
          <div className='discount'>
            <span className='discount--value'>Rp{discountedPrice.toLocaleString('id-ID')}</span>
            <span className='discount--percentage'>{discountPercentage}%</span>
          </div>
        )}
        <div className='product-rating'>
          <StarIcon width={14} height={14} fill="#ffca1c" />
          <span className='rating-value'>{cappedRateValue}</span>
          <span className='separator'/>
          <span className='sold-value'>{formatSoldValue(sold)} terjual</span>
        </div>

        {disabled ? (
          <button className='button disabled'>{disabledButtonText}</button>
        ) : (
          <button className='button primary' onClick={onButtonClick}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;