import React from 'react';
import Grid from '@mui/material/Grid';
import { EachBook, StyleSheet } from '../types';
import Book from './Book';

type Props = {
  books: any;
};

const Books: React.FC<Props> = ({ books }) => {
  return books ? (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={4}
    >
      {books.data.map((item: EachBook) => {
        return <Book book={item} key={item.id} />;
      })}
    </Grid>
  ) : null;
};
export default Books;

const styles:StyleSheet = {
    container:{marginTop: '10%', width: '100%', height: '66%'} 
}
