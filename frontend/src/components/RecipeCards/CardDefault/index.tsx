import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export type StepItemType = {
  id: number;
  title: string;
  description: string;
  image: string | null;
};

type Props = {
  item: StepItemType;
};

export default (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const recipeId = props.item.id;

  return (
    <ListItem>
      <Card sx={{ width: '430px', height: '350px' }}>
        <Box
          sx={{
            overflow: 'hidden',
            alignSelf: 'center',
            height: '200px',
            display: 'flex',
          }}
        >
          {props.item.image && (
            <img
              className="image-header"
              src={props.item.image}
              alt="recipe image"
            />
          )}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            onClick={() => {
              navigate(`/recipe/${recipeId}`);
            }}
            size="small"
            color="primary"
          >
            View full recipe
          </Button>
        </CardActions>
      </Card>
    </ListItem>
  );
};
