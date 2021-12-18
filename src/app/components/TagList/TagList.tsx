import { List } from '@mui/material';
import React from 'react';
import Tag from '../Tag/Tag';

type Props = {
  tags: string[];
};

export default (props: Props): JSX.Element => {
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
      {props.tags.map((tag, index) => (
        <Tag key={index} name={tag} />
      ))}
    </List>
  );
};
