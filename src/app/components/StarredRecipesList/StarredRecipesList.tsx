import { List, Typography } from '@mui/material';
import React from 'react';
import { getAllRecipeItemsFromStorage } from '../../api/storage/recipes';
import CardStarred from '../RecipeCards/CardStarred';

const recipes = getAllRecipeItemsFromStorage();

const starredRecipes = [...recipes].filter((recipe) => recipe.starred === true);

export default (): JSX.Element => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          alignSelf: 'start',
          pt: '70px',
          pl: '22px',
          textTransform: 'uppercase',
        }}
      >
        Starred Recipes
      </Typography>
      <List sx={{ display: 'flex', p: '16px', overflow: 'scroll' }}>
        {starredRecipes.map((item) => (
          <CardStarred key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};
