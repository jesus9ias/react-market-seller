import React from 'react';
import Cart from './Cart';
import ProductList from '../../components/ProductList';
import { getProducts } from '../../store/InventoryService';

export default () => <div>
  <p>Pos</p>
  <Cart>
    <ProductList title="Carrito de compras" products={getProducts()}></ProductList>
  </Cart>
</div>;
