# Prototype Blue Design System Libraries - by Jefri Edi Saputro
This prototype used to build accessible, consistent, customizable and high quality customer experiences. 
Create with React+TSDX & Storybook for more faster development and documentation process.

![Product Card - Component](https://i.ibb.co.com/B5YKWgCm/Product-Card-Package.png)

<hr />

## Getting Started

### Install the Package

```bash
npm i blue-dls-uikit
```

### Example Usage

```tsx
import React from 'react';
import { ProductCard } from 'blue-dls-uikit';

const App = () => (
  <ProductCard
    img="https://via.placeholder.com/150"
    size="default"
    className="your-custom-classname"
    title="Sample Product"
    price={100000}
    discountValue={20000}
    buttonText="Add to bag"
    disabledButtonText="Out of stock"
    rateValue={4.5}
    sold={1200}
    onButtonClick={() => alert('Button clicked!')}
  />
);

export default App;
```

### Another Components
Still on progress and will be update soon.