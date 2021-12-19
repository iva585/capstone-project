import {
  Card,
  CardContent,
  IconButton,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import React from 'react';
import './index.css';
import type { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { updateRecipeData } from '../../reducers/recipeReducer';

type RecipeParams = 'recipeId';

export default (): JSX.Element => {
  const { recipeId } = useParams<RecipeParams>();
  const dispatch = useDispatch();

  const recipe = useSelector((state: RootState) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId ?? ''))
  );

  if (!recipe) {
    //@TODO: Write 404 component
    return <div>Recipe not found</div>;
  }

  const toggleStarred = () => {
    dispatch(updateRecipeData({ ...recipe, starred: !recipe.starred }));
  };

  return (
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
              {recipe.starred ? (
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
          <Typography gutterBottom variant="h5">
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            {recipe.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
