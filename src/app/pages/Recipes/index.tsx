import React, { useState } from 'react';
import Footer from '../../components/Footer';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RecipesList from '../../components/RecipesList/RecipesList';
import './index.css';
import HeaderRecipes from '../../components/Headers/HeaderRecipes';
import StarredRecipesList from '../../components/StarredRecipesList/StarredRecipesList';

export default (): JSX.Element => {
  const [newRecipe, setNewRecipe] = useState<boolean>(false);
  return (
    <>
      <HeaderRecipes />
      <main className="padding">
        <StarredRecipesList />
        <RecipesList />
      </main>
      <Footer
        actionButtonIcon={
          newRecipe ? <DoneOutlinedIcon /> : <EditOutlinedIcon />
        }
        onClickActionButton={() => setNewRecipe((newRecipe) => !newRecipe)}
      />
    </>
  );
};
