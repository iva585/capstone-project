import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import type { RecipeIngredient } from '../IngredientListItem';

type Props = {
  onAdd: (inputValue: RecipeIngredient) => void;
};

const initialState = '';

export default (props: Props): JSX.Element => {
  const [amount, setAmount] = useState<string>(initialState);
  const [title, setTitle] = useState<string>(initialState);

  const handleAdd = () => {
    props.onAdd({ amount, title });
    setAmount(initialState);
    setTitle(initialState);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        m: '12px',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add amount"
        inputProps={{ 'aria-label': 'add amount', maxLength: 50 }}
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add ingredient"
        inputProps={{ 'aria-label': 'add ingredient', maxLength: 50 }}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: '10px' }}
        aria-label="add"
        onClick={handleAdd}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};
