import * as React from "react";
import Book from "../../components";
import { Grid } from "@mui/material";
export default function BookList({ books }) {
  return (
    <Grid container>
      {books.map((books, i) => (
        <Book books={books} id={i} />
      ))}
    </Grid>
  );
}
