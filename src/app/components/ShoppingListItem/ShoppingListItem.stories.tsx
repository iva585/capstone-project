import ShoppingListItem from '.';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default {
  title: 'Component/ShoppingListItem',
  component: ShoppingListItem,
};

const exampleItemDefault = {
  id: 1,
  title: 'bread',
  checked: false,
};

const exampleItemChecked = {
  id: 1,
  title: 'bread',
  checked: true,
};

export const Item = (): JSX.Element => (
  <Provider store={store}>
    <ShoppingListItem item={exampleItemDefault} />
  </Provider>
);

export const ItemChecked = (): JSX.Element => (
  <Provider store={store}>
    <ShoppingListItem item={exampleItemChecked} />
  </Provider>
);
