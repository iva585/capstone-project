import { List, Typography } from '@mui/material';
import React from 'react';
import type { ShoppingListItemType } from '../../components/ShoppingListItem';
import ShoppingListItem from '../../components/ShoppingListItem';

type Props = {
  items: ShoppingListItemType[];
};

export default (props: Props): JSX.Element => (
  <>
    <Typography>Shopping List</Typography>
    <List>
      {props.items.map((item) => (
        <ShoppingListItem key={item.id} item={item} />
      ))}
    </List>
  </>
);
