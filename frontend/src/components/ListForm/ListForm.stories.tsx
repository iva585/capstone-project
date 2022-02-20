import React from 'react';
import ListForm from './index';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { addShoppingListItem } from '../../reducers/shoppingListReducer';

export default {
  title: 'Component/ShoppingListForm',
  component: ListForm,
};

export const Form = (): JSX.Element => (
  <Provider store={store}>
    <ListForm addListItem={addShoppingListItem} />
  </Provider>
);
