import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ShoppingListItemType } from '../components/ShoppingListItem';

const initialState: ShoppingListItemType[] = [
  { id: 1, title: 'milk', checked: false },
  { id: 2, title: 'oatmeal', checked: false },
  { id: 3, title: 'chocolate', checked: true },
  { id: 4, title: 'bananas', checked: false },
];

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    updateShoppingListItem(state, action: PayloadAction<ShoppingListItemType>) {
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
    },
  },
});

export const { updateShoppingListItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
