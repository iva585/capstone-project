import { Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Add from '@mui/icons-material/Add';

export default function ShoppingList(): JSX.Element {
  return (
    <>
      <Typography>Shopping List</Typography>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add Item To Shopping List"
          inputProps={{ 'aria-label': 'add item to shopping list' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="add">
          <Add />
        </IconButton>
      </Paper>
    </>
  );
}
