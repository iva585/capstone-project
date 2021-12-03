import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { InventoryItemType } from '../components/InventoryItem';

const initialState: InventoryItemType[] = [
  { id: 1, title: 'salad', checked: false },
  { id: 2, title: 'tuna', checked: true },
  { id: 3, title: 'cottage cheese', checked: false },
  { id: 4, title: 'apples', checked: false },
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
    deleteInventoryItem(state, action: PayloadAction<InventoryItemType>) {
      return state.filter((item) => item.id !== action.payload.id);
    },

    addInventoryItem(state, action: PayloadAction<InventoryItemType['title']>) {
      const sortedbyIds = [...state].sort((a, b) => a.id - b.id);

      const lastElement = sortedbyIds.pop();

      const id: InventoryItemType['id'] = lastElement?.id
        ? lastElement.id + 1
        : 1;

      const newItem: InventoryItemType = {
        id,
        title: action.payload,
        checked: false,
      };

      return [...state, newItem];
    },
  },
});

export const { updateInventoryItem } = inventorySlice.actions;
export const { deleteInventoryItem } = inventorySlice.actions;
export const { addInventoryItem } = inventorySlice.actions;

export default inventorySlice.reducer;
