import { InputBase, Divider, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

type Props = {
  onAdd: (tagName: string) => void;
};

const initialState = '';

export default (props: Props): JSX.Element => {
  const [currentValue, setCurrentValue] = useState<string>(initialState);

  const handleAdd = () => {
    props.onAdd(currentValue);
    setCurrentValue(initialState);
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
        multiline
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add tag"
        inputProps={{ 'aria-label': 'add tag', maxLength: 20 }}
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
