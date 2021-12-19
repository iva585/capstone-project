import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  ImageListItemBar,
  Input,
} from '@mui/material';
import React from 'react';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import TagList from '../TagList/TagList';
import AddTextItem from './AddTextItem';
import StepsList from '../StepsList';
import AddIngredient from './AddIngredient';
import type { RecipeIngredient } from '../IngredientListItem';
import IngredientsList from '../IngredientsList';
import {
  resetFormState,
  updateRecipeFormData,
} from '../../reducers/recipeFormReducer';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

type Props = {
  onCancel: () => void;
};

export default (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const recipeData = useSelector((state: RootState) => state.recipeForm);

  const handleCancel = () => {
    resetFormState();
    props.onCancel();
  };

  const addTag = (tagName: string) => {
    dispatch(
      updateRecipeFormData({
        tags: [...recipeData.tags, tagName],
      })
    );
  };

  const addStep = (description: string) => {
    dispatch(
      updateRecipeFormData({
        steps: [
          ...recipeData.steps,
          {
            description,
          },
        ],
      })
    );
  };

  const addIngredient = (ingredient: RecipeIngredient) => {
    dispatch(
      updateRecipeFormData({
        ingredients: [...recipeData.ingredients, ingredient],
      })
    );
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateRecipeFormData({
        title: event.target.value,
      })
    );
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateRecipeFormData({
        description: event.target.value,
      })
    );
  };

  const toggleStarred = () => {
    dispatch(
      updateRecipeFormData({
        starred: !recipeData.starred,
      })
    );
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            alignSelf: 'center',
          }}
        >
          <img
            className="image-header"
            src="https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80"
            alt="pesto pasta"
          />
          <ImageListItemBar
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
            position="top"
            actionIcon={
              <IconButton onClick={toggleStarred} sx={{ color: 'white' }}>
                {recipeData.starred ? (
                  <StarRateRoundedIcon />
                ) : (
                  <StarBorderRoundedIcon />
                )}
              </IconButton>
            }
            actionPosition="right"
          />
        </Box>
        <Card
          sx={{
            mt: -7,
            alignSelf: 'center',
            width: '70%',
            p: 0,
            borderRadius: '20px',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Input
              placeholder="Add Recipe Title Here"
              inputProps={{ 'aria-label': 'add recipe title', maxLength: 30 }}
              value={recipeData.title}
              onChange={handleTitleChange}
            />

            <Input
              placeholder="Add Description Here"
              inputProps={{
                'aria-label': 'add short description',
                maxLength: 60,
              }}
              value={recipeData.description}
              onChange={handleDescriptionChange}
            />
          </CardContent>
        </Card>
      </Box>
      <AddIngredient onAdd={addIngredient} />
      <Divider variant="middle" />
      <AddTextItem onAdd={addStep} placeholder="Add step" maxLength={500} />
      <Divider variant="middle" />
      <AddTextItem onAdd={addTag} placeholder="Add tag" maxLength={20} />
      <Box>
        {recipeData.ingredients.length > 0 && (
          <IngredientsList ingredients={recipeData.ingredients} />
        )}
        <StepsList steps={recipeData.steps} />
        <TagList tags={recipeData.tags} />
      </Box>
      <Box sx={{ p: 2 }}>
        <Button onClick={handleCancel} variant="outlined" color="error">
          Cancel
        </Button>
      </Box>
    </>
  );
};
