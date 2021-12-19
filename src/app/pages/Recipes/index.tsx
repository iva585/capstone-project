import React, { useState } from 'react';
import Footer from '../../components/Footers/FooterDefault';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import RecipesList from '../../components/RecipesList/RecipesList';
import './index.css';
import HeaderRecipes from '../../components/Headers/HeaderRecipes';
import StarredRecipesList from '../../components/StarredRecipesList/StarredRecipesList';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { resetFormState } from '../../reducers/recipeFormReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../../reducers/recipeReducer';
import type { RootState } from '../../store';
import type { Recipe } from '../RecipeDetail/RecipeDetail';

export default (): JSX.Element => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes);

  const recipeFormData = useSelector((state: RootState) => state.recipeForm);
  const [newRecipe, setNewRecipe] = useState<boolean>(false);
  const [filteredRecipes, setFileterdRecipes] = useState<Recipe[]>(recipes);

  const resetForm = () => {
    dispatch(resetFormState());
  };

  const handleCancelForm = () => {
    if (confirm("If you cancel your changes won't be saved")) {
      setNewRecipe((newRecipe) => !newRecipe);
      resetForm();
    }
  };
  const handleSubmitForm = () => {
    dispatch(addRecipe(recipeFormData));
    resetForm();
  };

  const filterRecipes = (searchInput: string) => {
    console.log(searchInput);
    setFileterdRecipes(
      !searchInput
        ? recipes
        : recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchInput.toLowerCase())
          )
    );
  };

  console.log(filteredRecipes);

  return (
    <>
      <main className="padding">
        {newRecipe ? (
          <RecipeForm onCancel={handleCancelForm} />
        ) : (
          <>
            <HeaderRecipes onSearchInputChanged={filterRecipes} />
            <StarredRecipesList recipes={filteredRecipes} />
            <RecipesList recipes={filteredRecipes} />
          </>
        )}
      </main>
      <Footer
        actionButtonIcon={
          newRecipe ? <DoneOutlinedIcon /> : <EditOutlinedIcon />
        }
        onClickActionButton={() => {
          if (newRecipe) {
            handleSubmitForm();
            alert('Recipe saved!');
          }
          setNewRecipe((newRecipe) => !newRecipe);
        }}
      />
    </>
  );
};
