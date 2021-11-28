import { List, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from '../../components/ShoppingListItem';
import type { RootState } from '../../store';

export default (): JSX.Element => {
  const shoppingListItems = useSelector(
    (state: RootState) => state.shoppingList
  );

  return (
    <>
      <Typography>Shopping List</Typography>
      <List>
        {[...shoppingListItems]
          .sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0))
          .map((item) => (
            <ShoppingListItem key={item.id} item={item} />
          ))}
      </List>
    </>
  );
};
