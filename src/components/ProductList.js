import React from 'react';
import ProductItem from './ProductItem';

export default (props) => <div>
  <p>{props.title}</p>
  {
    props.products.map((product, i) => <ProductItem key={i} value={product} type="cart"></ProductItem>)
  }
</div>;
