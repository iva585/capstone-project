import React from 'react';
import HeaderRecipes from './HeaderRecipes';

export default {
  title: 'Component/HeaderRecipes',
  component: HeaderRecipes,
};

export const HeaderRecipe = (): JSX.Element => (
  <HeaderRecipes onSearchInputChanged={() => ''} />
);
