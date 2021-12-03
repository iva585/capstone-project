import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { InventoryItemType } from '../components/InventoryItem';

const initialState: InventoryItemType[] = [
  { id: 1, title: 'milk', checked: false },
  { id: 2, title: 'oatmeal', checked: true },
  { id: 3, title: 'chocolate', checked: false },
  { id: 4, title: 'bananas', checked: false },
];

const inventorySlice = createSlice({
  name: 'Inventory',
  initialState,
  reducers: {
    updateInventoryItem(state, action: PayloadAction<InventoryItemType>) {
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const { updateInventoryItem } = inventorySlice.actions;
