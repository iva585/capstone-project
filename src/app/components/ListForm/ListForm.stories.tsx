import ListForm from '.';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

export default {
  title: 'Component/ShoppingListForm',
  component: ListForm,
};

export const Form = (): JSX.Element => (
  <Provider store={store}>
    <ListForm />
  </Provider>
);
