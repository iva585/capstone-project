import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import { CssBaseline, List } from '@mui/material';
import React, { useState } from 'react';
import FooterDefault from '../../components/Footers/FooterDefault';
import Header from '../../components/Headers/HeaderDefault';
import MealPlanList from '../../components/MealPlanList/MealPlanList';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <>
      <CssBaseline />
      <Header children="Meal Plan" />
      <List sx={{ display: 'flex', flexDirection: 'column', p: '7px' }}>
        <MealPlanList />
      </List>

      <FooterDefault
        actionButtonIcon={editing ? <Close /> : <Add />}
        onClickActionButton={() => setEditing((editing) => !editing)}
      />
    </>
  );
};
