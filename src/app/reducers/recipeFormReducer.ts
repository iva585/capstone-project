import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Recipe } from '../pages/RecipeDetail/RecipeDetail';

const initialState: Omit<Recipe, 'id'> = {
  title: '',
  description: '',
  ingredients: [],
  steps: [],
  tags: [],
};

const recipeSlice = createSlice({
  name: 'recipeForm',
  initialState: { ...initialState },
  reducers: {
    updateRecipeFormData(
      state,
      action: PayloadAction<Partial<Omit<Recipe, 'id'>>>
    ) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormState() {
      return { ...initialState };
    },
  },
});

export const { updateRecipeFormData } = recipeSlice.actions;
export const { resetFormState } = recipeSlice.actions;

export default recipeSlice.reducer;
