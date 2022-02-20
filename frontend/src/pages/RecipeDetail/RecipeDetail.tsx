import { Box, Button, CssBaseline, Divider } from '@mui/material';
import React from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import StepsList from '../../components/StepsList';
import IngredientsList from '../../components/IngredientsList';
import Footer from '../../components/Footers/FooterDefault';
import './index.css';
import TagList from '../../components/TagList/TagList';
import { useNavigate, useParams } from 'react-router';
import type { RecipeIngredient } from '../../components/IngredientListItem';
import type { RecipeStep } from '../../components/StepsListItem';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { deleteRecipe } from '../../reducers/recipeReducer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  tags: string[];
  starred: boolean;
  image: string | null;
};

type RecipeParams = 'recipeId';

export default (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipeId } = useParams<RecipeParams>();

  const recipe = useSelector((state: RootState) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId ?? ''))
  );

  if (!recipe) {
    //@TODO: Write 404 component
    return <div>Recipe not found</div>;
  }

  const handleDelete = () => {
    confirm('Are you sure? Your recipe will be deleted permanently!') &&
      dispatch(
        deleteRecipe({
          ...recipe,
        })
      ) &&
      navigate('/');
  };

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <CssBaseline />
      <main className="bottom-padding">
        <Header />
        <IngredientsList ingredients={recipe.ingredients} />
        <Divider variant="middle" />
        <StepsList steps={recipe.steps} />
        <Divider variant="middle" />
        <Divider variant="middle" />
        <TagList tags={recipe.tags} />
        <Box sx={{ p: 2 }}>
          <Button onClick={handleDelete} variant="outlined" color="error">
            Delete
          </Button>
        </Box>
      </main>
      <Footer
        actionButtonIcon={<ArrowBackIcon />}
        onClickActionButton={handleBackButtonClick}
      />
    </>
  );
};
