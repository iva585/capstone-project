import React from 'react';
import Header from './HeaderDefault';

export default {
  title: 'Component/Header',
  component: Header,
};

export const HeaderShoppingList = (): JSX.Element => (
  <Header children="Shopping List" />
);

export const HeaderInventory = (): JSX.Element => (
  <Header children="Inventory" />
);
