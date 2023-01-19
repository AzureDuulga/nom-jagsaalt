import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Book = ({ books, id }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={books.thumbnailUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {books.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {books.shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={"/books/" + id}>
            <Button size="small">See more..</Button>
          </NavLink>
        </CardActions>
      </Card>
    </>
  );
};

export default Book;
