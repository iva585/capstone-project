import { List, Typography, AppBar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ListForm from '../../components/ListForm';
import ShoppingListItem from '../../components/ShoppingListItem';
import type { RootState } from '../../store';
import './index.css';

export default (): JSX.Element => {
  const shoppingListItems = useSelector(
    (state: RootState) => state.shoppingList
  );

  return (
    <>
      <AppBar className="header">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mt: 1,
          }}
        >
          Shopping List
        </Typography>
      </AppBar>
      <List sx={{ pt: 7 }}>
        {[...shoppingListItems]
          .sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0))
          .map((item) => (
            <ShoppingListItem key={item.id} item={item} />
          ))}
      </List>
      <ListForm />
    </>
  );
};
