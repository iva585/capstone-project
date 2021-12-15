import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  addRecipeItemToStorage,
  getAllRecipeItemsFromStorage,
  removeRecipeItemFromStorage,
} from '../api/storage/recipes';
import type { Recipe } from '../pages/RecipeDetail/RecipeDetail';

const recipeSlice = createSlice({
  name: 'Recipe',
  initialState: getAllRecipeItemsFromStorage(),
  reducers: {
    deleteRecipe(state, action: PayloadAction<Recipe>) {
      removeRecipeItemFromStorage(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },

    addRecipe(state, action: PayloadAction<Omit<Recipe, 'id'>>) {
      return [...state, addRecipeItemToStorage(action.payload)];
    },
  },
});

export const { deleteRecipe } = recipeSlice.actions;
export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
