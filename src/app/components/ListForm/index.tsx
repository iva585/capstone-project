import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addShoppingListItem } from '../../reducers/shoppingListReducer';

export default (): JSX.Element => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    dispatch(addShoppingListItem(inputValue));
    setInputValue('');
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        bottom: '5em',
        m: '3px',
      }}
    >
      <InputBase
        value={inputValue}
        onChange={handleChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add new item"
        inputProps={{ 'aria-label': 'add new item', maxLength: 50 }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={handleAdd}
        color="primary"
        sx={{ p: '10px' }}
        aria-label="add"
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};
