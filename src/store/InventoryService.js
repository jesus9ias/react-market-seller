import storage from 'key-storage';
import allInventory from './inventory';

export const getProducts = () => {
  if (!storage.get('inventory')) {
    storage.set('inventory', JSON.stringify(allInventory));
  }
  const inventory = storage.get('inventory');
  return inventory ? JSON.parse(inventory) : [];
};

export const getCart = () => {
  const cart = storage.get('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addProductCart = (product) => {
  const cart = storage.get('cart');
  const newCart = cart ? JSON.parse(cart) : [];
  newCart.push(product);
  storage.set('cart', JSON.stringify(newCart));
  return newCart;
};
