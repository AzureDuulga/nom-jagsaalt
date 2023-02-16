import * as React from "react";
import Book from "../../components";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../context";
export default function BookList({ books }) {
  const context = useContext(UserContext);
  return (
    <Grid container>
      {books.map((books, i) => (
        <Book books={books} id={i} />
      ))}
    </Grid>
  );
}
