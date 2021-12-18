import { CssBaseline, Divider } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/Headers/HeaderRecipeDetail';
import StepsList from '../../components/StepsList';
import IngredientsList from '../../components/IngredientsList';
import Footer from '../../components/Footers/FooterDefault';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import './index.css';
import TagList from '../../components/TagList/TagList';
import { useParams } from 'react-router';
import type { RecipeIngredient } from '../../components/IngredientListItem';
import type { RecipeStep } from '../../components/StepsListItem';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  tags: string[];
  starred: boolean;
};

type RecipeParams = 'recipeId';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);
  const { recipeId } = useParams<RecipeParams>();
  console.log('recipeId: ', recipeId);

  const recipe = useSelector((state: RootState) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId ?? ''))
  );

  if (!recipe) {
    //@TODO: Write 404 component
    return <div>Recipe not found</div>;
  }

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
      </main>
      <Footer
        actionButtonIcon={editing ? <DoneOutlinedIcon /> : <EditOutlinedIcon />}
        onClickActionButton={() => setEditing((editing) => !editing)}
      />
    </>
  );
};
