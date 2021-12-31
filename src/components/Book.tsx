import React from 'react';
import Grid from '@mui/material/Grid';
import { EachBook, StyleSheet } from '../types';

type Props = {
  book: EachBook;
};

const Book: React.FC<Props> = ({ book }) => {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' style={styles.container}>
      <Grid>{book.imageUrl}</Grid>
      <Grid>{book.title}</Grid>
      {book.authors.map((item) => (
        <Grid>{item}</Grid>
      ))}
      <Grid>{book.pageCount}</Grid>
      <Grid>{book.publisher}</Grid>
      <Grid>{book.published}</Grid>
    </Grid>
  );
};
export default Book;

const styles: StyleSheet = {
  container: {
    width: '20%',
    height: '20%',
    background: '#FFFFFF',
    boxShadow: '0px 6px 24px rgba(84, 16, 95, 0.13)',
    borderRadius: '4px',
    marginLeft: '1.2%'
  },
};
