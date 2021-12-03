import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import { CssBaseline, List } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InventoryItem from '../../components/InventoryItem';
import ListForm from '../../components/ListForm';
import { addInventoryItem } from '../../reducers/inventoryReducer';
import type { RootState } from '../../store';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);

  const inventoryItems = useSelector((state: RootState) => state.inventory);

  return (
    <>
      <CssBaseline />
      <Header children="Inventory" />
      <List sx={{ pt: 7 }}>
        {[...inventoryItems]
          .sort((a, b) => (a.checked ? 1 : 0) - (b.checked ? 1 : 0))
          .map((item) => (
            <InventoryItem key={item.id} item={item} />
          ))}
      </List>
      {editing && <ListForm addListItem={addInventoryItem} />}
      <Footer
        actionButtonIcon={editing ? <Close /> : <Add />}
        onClickActionButton={() => setEditing((editing) => !editing)}
      />
    </>
  );
};
