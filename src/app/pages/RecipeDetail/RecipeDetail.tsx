import { CssBaseline } from '@mui/material';
import React from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import StepsList from '../../components/StepsList';

export default (): JSX.Element => {
  return (
    <>
      <CssBaseline />

      <Header />

      <StepsList />
    </>
  );
};
