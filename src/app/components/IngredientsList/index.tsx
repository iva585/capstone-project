import React from 'react';
import List from '@mui/material/List/List';
import IngredientListItem from '../IngredientListItem';

const initialState = [
  { id: 1, amount: '300g', title: 'pasta' },
  { id: 2, amount: '100g', title: 'pesto' },
  { id: 3, amount: '30ml', title: 'olive oil' },
];

export default () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        mt: '5px',
        pr: '100px',
      }}
    >
      {initialState.map((item) => (
        <IngredientListItem key={item.id} item={item} />
      ))}
    </List>
  );
};
