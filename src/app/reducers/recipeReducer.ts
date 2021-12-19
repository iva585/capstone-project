import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  addRecipeItemToStorage,
  getAllRecipeItemsFromStorage,
  removeRecipeItemFromStorage,
} from '../api/storage/recipes';
import type { Recipe } from '../pages/RecipeDetail/RecipeDetail';

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: getAllRecipeItemsFromStorage(),
  reducers: {
    deleteRecipe(state, action: PayloadAction<Recipe>) {
      removeRecipeItemFromStorage(action.payload.id);
      return state.filter((item) => item.id !== action.payload.id);
    },

    addRecipe(state, action: PayloadAction<Omit<Recipe, 'id'>>) {
      return [...state, addRecipeItemToStorage(action.payload)];
    },

    updateRecipeData(state, action: PayloadAction<Recipe>) {
      const updatedRecipe = {
        ...state.find((item) => item.id === action.payload.id),
        ...action.payload,
      };

      return [
        ...state.filter((item) => item.id !== action.payload.id),
        updatedRecipe,
      ];
    },
  },
});

export const { deleteRecipe } = recipeSlice.actions;
export const { addRecipe } = recipeSlice.actions;
export const { updateRecipeData } = recipeSlice.actions;

export default recipeSlice.reducer;
