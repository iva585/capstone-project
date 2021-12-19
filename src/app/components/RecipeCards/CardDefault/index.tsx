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
};

type Props = {
  item: StepItemType;
};

export default (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const recipeId = props.item.id;

  return (
    <ListItem>
      <Card>
        <Box
          sx={{
            height: '200px',
            overflow: 'hidden',
          }}
        >
          <img
            className="image-header"
            src="https://cdn.pickuplimes.com/cache/d6/03/d603ee859a939e049aa60507401ec2fe.jpg"
            alt="pesto pasta"
          />
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
