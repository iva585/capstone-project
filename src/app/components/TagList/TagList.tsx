import { List } from '@mui/material';
import React from 'react';
import Tag from '../Tag/Tag';

const initialState = [
  { id: 1, title: 'dinner' },
  { id: 2, title: 'pasta' },
  { id: 3, title: 'italian' },
  { id: 4, title: 'dinner' },
  { id: 5, title: 'pasta' },
  { id: 6, title: 'italian' },
  { id: 7, title: 'pasta' },
  { id: 8, title: 'italian' },
];

export default (): JSX.Element => {
  return (
    <List
      sx={{
        mt: '10px',
        p: '15px',
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: '3px',
        columnGap: '7px',
      }}
    >
      {initialState.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </List>
  );
};
