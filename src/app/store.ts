import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './reducers/inventoryReducer';
import shoppingListReducer from './reducers/shoppingListReducer';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    inventory: inventoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
