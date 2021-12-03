import { List, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import InventoryItem from '../../components/InventoryItem';
import type { RootState } from '../../store';

export default (): JSX.Element => {
  const inventoryItems = useSelector((state: RootState) => state.inventory);
  return (
    <>
      <Header children="Inventory" />
      <List sx={{ pt: 7 }}>
        {[...inventoryItems]
          .sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0))
          .map((item) => (
            <InventoryItem key={item.id} item={item} />
          ))}
      </List>
    </>
  );
};
