import { CssBaseline, Divider } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import StepsList from '../../components/StepsList';
import IngredientsList from '../../components/IngredientsList';
import Footer from '../../components/Footer';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import './index.css';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <>
      <CssBaseline />
      <main className="bottom-padding">
        <Header />
        <IngredientsList />
        <Divider variant="middle" />
        <StepsList />
      </main>
      <Footer
        actionButtonIcon={editing ? <DoneOutlinedIcon /> : <EditOutlinedIcon />}
        onClickActionButton={() => setEditing((editing) => !editing)}
      />
    </>
  );
};
