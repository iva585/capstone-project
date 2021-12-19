import './index.css';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export type StepItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Props = {
  item: StepItemType;
};

export default (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const recipeId = props.item.id;

  const truncateText = (text: string, characterCount: number) =>
    text.length > characterCount
      ? `${text.substr(0, characterCount - 1)}...`
      : text;

  return (
    <Card
      onClick={() => {
        navigate(`/recipe/${recipeId}`);
      }}
      sx={{
        display: 'flex',
        minWidth: '320px',
        height: '11rem',
        ml: '7px',
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          alignSelf: 'center',
          maxWidth: '50%',
        }}
      >
        {props.item.image && (
          <img
            className="image-responsive"
            src={props.item.image}
            alt="recipe image"
          />
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', height: '100%' }}>
          <Box sx={{ height: '30%', overflow: 'hidden' }}>
            <Typography component="div" variant="h6">
              {truncateText(props.item.title, 12)}
            </Typography>
          </Box>
          <Box sx={{ height: '70%' }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {truncateText(props.item.description, 60)}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};
