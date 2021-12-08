import React from 'react';
import List from '@mui/material/List/List';
import IngredientListItem from '../IngredientListItem';
import { Typography } from '@mui/material';

const initialState = [
  { id: 1, amount: '300g', title: 'pasta' },
  { id: 2, amount: '100g', title: 'pesto' },
  { id: 3, amount: '30ml', title: 'olive oil' },
];

export default () => {
  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          mt: '5px',
        }}
      >
        <Typography
          variant="h6"
          sx={{ alignSelf: 'start', pl: 1.5, textTransform: 'uppercase' }}
        >
          ingredients
        </Typography>
        {initialState.map((item) => (
          <IngredientListItem key={item.id} item={item} />
        ))}
      </List>
    </>
  );
};
