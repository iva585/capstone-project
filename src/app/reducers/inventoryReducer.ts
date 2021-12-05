import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { InventoryItemType } from '../components/InventoryItem';
import {
  addInventoryItemToStorage,
  getAllInventoryItemsFromStorage,
  removeInventoryItemFromStorage,
  updateInventoryItemInStorage,
} from '../api/storage/inventory';

const inventorySlice = createSlice({
  name: 'Inventory',
  initialState: getAllInventoryItemsFromStorage(),
  reducers: {
    updateInventoryItem(state, action: PayloadAction<InventoryItemType>) {
      updateInventoryItemInStorage(action.payload);
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    deleteInventoryItem(state, action: PayloadAction<InventoryItemType>) {
      removeInventoryItemFromStorage(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },

    addInventoryItem(state, action: PayloadAction<InventoryItemType['title']>) {
      return [...state, addInventoryItemToStorage(action.payload)];
    },
  },
});

export const { updateInventoryItem } = inventorySlice.actions;
export const { deleteInventoryItem } = inventorySlice.actions;
export const { addInventoryItem } = inventorySlice.actions;

export default inventorySlice.reducer;
