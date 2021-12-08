import { CssBaseline, Divider } from '@mui/material';
import React from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import StepsList from '../../components/StepsList';
import IngredientsList from '../../components/IngredientsList';

export default (): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Header />
      <IngredientsList />
      <Divider variant="middle" />
      <StepsList />
    </>
  );
};
