import { InputBase, Divider, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

type Props = {
  onAdd: (inputValue: string) => void;
  placeholder?: string;
};

const initialState = '';

export default (props: Props): JSX.Element => {
  const [currentValue, setCurrentValue] = useState<string>(initialState);

  const handleAdd = () => {
    props.onAdd(currentValue);
    setCurrentValue(initialState);
  };

  const placeholder = props.placeholder ?? 'Add';

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
        multiline
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': placeholder, maxLength: 20 }}
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
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
