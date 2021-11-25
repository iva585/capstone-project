import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './reducers/shoppingListReducer';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
