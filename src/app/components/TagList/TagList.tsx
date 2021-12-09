import { List } from '@mui/material';
import React from 'react';
import Tag from '../Tag/Tag';

const initialState = [
  { id: 1, title: 'dinner' },
  { id: 2, title: 'pasta' },
  { id: 3, title: 'italian' },
];

export default (): JSX.Element => {
  return (
    <List sx={{ mt: '10px' }}>
      {initialState.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </List>
  );
};
