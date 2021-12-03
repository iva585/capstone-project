import React from 'react';
import { Provider } from 'react-redux';
import InventoryItem from '.';
import { store } from '../../store';

export default {
  title: 'Component/InventoryItem',
  component: InventoryItem,
};

const exampleItemDefault = {
  id: 1,
  title: 'coffee',
  checked: false,
};

const exampleItemChecked = {
  id: 1,
  title: 'beer',
  checked: true,
};

export const Item = (): JSX.Element => (
  <Provider store={store}>
    <InventoryItem item={exampleItemDefault} />
  </Provider>
);

export const ItemChecked = (): JSX.Element => (
  <Provider store={store}>
    <InventoryItem item={exampleItemChecked} />
  </Provider>
);
