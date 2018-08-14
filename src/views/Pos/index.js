import React from 'react';
import {
  lifecycle,
  withStateHandlers
} from 'recompose';
import Cart from './Cart';
import Block from '../../components/Block';
import SearchBox from '../../components/SearchBox';
import ProductList from '../../components/ProductList';
import {
  getCart,
  addProductCart
} from '../../store/InventoryService';

const Pos = () => <div>
  <p>Pos</p>
  <SearchBox />
  <Cart>
    <ProductList title="Carrito de compras" products={getCart()} />
  </Cart>
  <Block>
    <button>Pagar</button>
  </Block>
</div>;

const PosWithLifeCycle = lifecycle({
  componentDidMount() {
    global.eventHub.addListener('productFound', (result) => {
      if (result) {
        addProductCart(result);
        this.props.addProduct(result);
      }
    });
  }
})(Pos);

const PosWithState = withStateHandlers(
  ({ initialCart = getCart() }) => ({
    cart: initialCart,
  }),
  {
    addProduct: ({ cart }) => (product) => ({
      cart: [product, ...cart],
    }),
  }
)(PosWithLifeCycle);

export default PosWithState;