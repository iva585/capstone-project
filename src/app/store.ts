import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from './reducers/inventoryReducer';
import recipeFormReducer from './reducers/recipeFormReducer';
import recipeReducer from './reducers/recipeReducer';
import shoppingListReducer from './reducers/shoppingListReducer';

export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    inventory: inventoryReducer,
    recipes: recipeReducer,
    recipeForm: recipeFormReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
