import { List, Typography } from '@mui/material';
import React from 'react';
import { getAllRecipeItemsFromStorage } from '../../api/storage/recipes';
import CardDefault from '../RecipeCards/CardDefault';

const recipes = getAllRecipeItemsFromStorage();

export default (): JSX.Element => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', p: '7px' }}>
      <Typography
        variant="h6"
        sx={{
          alignSelf: 'start',
          pl: '16px',
          textTransform: 'uppercase',
        }}
      >
        All Recipes
      </Typography>
      {recipes.map((item) => (
        <CardDefault key={item.id} item={item} />
      ))}
    </List>
  );
};
