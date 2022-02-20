import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ShoppingListItemType } from '../components/ShoppingListItem';
import {
  addShoppingListItemToStorage,
  removeShoppingListItemFromStorage,
  updateShoppingListItemInStorage,
} from '../api/storage/shoppingList';
import { getAllShoppingListItemsFromStorage } from '../api/storage/shoppingList';

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: getAllShoppingListItemsFromStorage(),
  reducers: {
    updateShoppingListItem(state, action: PayloadAction<ShoppingListItemType>) {
      updateShoppingListItemInStorage(action.payload);
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteShoppingListItem(state, action: PayloadAction<ShoppingListItemType>) {
      removeShoppingListItemFromStorage(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },

    addShoppingListItem(
      state,
      action: PayloadAction<ShoppingListItemType['title']>
    ) {
      return [...state, addShoppingListItemToStorage(action.payload)];
    },
  },
});

export const { updateShoppingListItem } = shoppingListSlice.actions;

export const { deleteShoppingListItem } = shoppingListSlice.actions;

export const { addShoppingListItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
