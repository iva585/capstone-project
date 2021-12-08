import { List } from '@mui/material';
import React from 'react';
import StepsListItem from '../StepsListItem';

const initialState = [
  {
    id: 1,
    step: 1,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus reiciendis unde.',
  },
  {
    id: 1,
    step: 2,
    description:
      'Reprehenderit praesentium ipsa alias, sint, iure odit illo voluptate, quia cum distinctio qui adipisci',
  },
  {
    id: 1,
    step: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, nulla consectetur incidunt molestiae libero recusandae explicabo.',
  },
];

export default (): JSX.Element => {
  return (
    <List>
      {initialState.map((item) => (
        <StepsListItem key={item.id} item={item} />
      ))}
    </List>
  );
};
