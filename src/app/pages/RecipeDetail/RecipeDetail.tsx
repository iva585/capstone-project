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

export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  tags: string[];
};

const mockRecipe: Recipe = {
  id: 1,
  title: 'Pasta pesto',
  description: 'Lorem ipsum dolor sir amet',
  ingredients: [
    { amount: '300g', title: 'pasta' },
    { amount: '100g', title: 'pesto' },
    { amount: '30ml', title: 'olive oil' },
  ],
  steps: [
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus reiciendis unde.',
    },
    {
      description:
        'Reprehenderit praesentium ipsa alias, sint, iure odit illo voluptate, quia cum distinctio qui adipisci',
    },
    {
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut, nulla consectetur incidunt molestiae libero recusandae explicabo.',
    },
  ],
  tags: [
    'dinner',
    'pasta',
    'italian',
    'dinner',
    'pasta',
    'italian',
    'pasta',
    'italian',
  ],
};

type RecipeParams = 'recipeId';

export default (): JSX.Element => {
  const [editing, setEditing] = useState<boolean>(false);
  const { recipeId } = useParams<RecipeParams>();
  console.log('recipeId: ', recipeId);

  const recipe = mockRecipe;

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
