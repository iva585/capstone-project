import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import IngredientsList from '../../components/IngredientsList';

export default (): JSX.Element => {
  return (
    <>
      <CssBaseline />

      <Header />

      <IngredientsList />
    </>
  );
};
