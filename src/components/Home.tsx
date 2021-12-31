import React, { useEffect, useState } from 'react';
import { StyleSheet, User } from '../types';
import logoBlack from '../assets/svgs/logoBlack.svg';
import Grid from '@mui/material/Grid';
import booksBackground from '../assets/svgs/booksBackground.svg';
import bracket from '../assets/svgs/bracket.svg';
import homeCircle from '../assets/svgs/homeCircle.svg';
import homeGreaterThan from '../assets/svgs/homeGreaterThan.svg';
import homeLessthan from '../assets/svgs/homeLessthan.svg';
import homeArrow from '../assets/svgs/homeArrow.svg';
import { fetchBooks } from '../services/api';
import Books from './Books';

type Props = {
  user: User;
  books: any;
};

const Home: React.FC<Props> = ({ user, books }) => {

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={styles.container}
    >
      <Grid style={styles.content}>
        <Grid container flexDirection='row' justifyContent='spaceBetween' spacing={2}>
          <Grid container flexDirection='row' style={styles.heading}>
            <img src={logoBlack} style={styles.logo} />
            <Grid style={styles.books}>Books</Grid>
          </Grid>
          <Grid>
            <div style={styles.greeting}>Bem vindo, {user.name} </div>
            <div style={styles.circle}>
              <img src={bracket} style={styles.bracket} />
              <img src={homeArrow} style={styles.arrow} />
            </div>
          </Grid>
        </Grid>
        <Books books={books} />
      </Grid>
    </Grid>
  );
};
export default Home;

const styles: StyleSheet = {
  container: {
    backgroundImage: `url(${booksBackground} )`,
    //position: 'absolute',
    width: '100%',
    height: '100vh',
    // left: '0px',
    // top: '0px',
  },
  content: {
    width: '83%',
  },
  heading:{
    marginTop:'5%',
    marginBottom: '1.5%'
  },
  logo: {
    //position: 'absolute',
   // width: '104.4px',
    //height: '36px',
    marginRight: '1%',
    // left: '0%',
    // top: '5.3%',
  },
  books: {
    //position: 'absolute',
   // width: '77px',
    //height: '40px',
    // left: '236px',
    // top: '40px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '2.3rem',
    lineHeight: '4rem',
    color: '#333333',
  },
  greeting: {
    //position: 'absolute',
    //width: '121px',
    //height: '16px',
    // left: '1076px',
    // top: '52px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.2rem',
    lineHeight: '16px',
    //textAlign: 'right',
    color: '#333333',
  },
  circle: {
    //position: 'absolute',
    backgroundImage: `url(${homeCircle} )`,
    width: '32px',
    height: '32px',
    // top: '44px',
    // left: '1245px',
    // left: '91.14%',
    // right: '6.52%',
    // top: '5.73%',
    bottom: '90.1%',
    //border: '1px solid rgba(51, 51, 51, 0.2)',
    boxSizing: 'border-box',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  },
  bracket: {
    //position: 'absolute',
    width: '5.5px',
    height: '14px',
    // top: '1px',
    // left: '1px',
    border: '1px solid #333333',
  },
  arrow: {
   // position: 'absolute',
    width: '10.5px',
    height: '8px',
    // top: '4px',
    // left: 'left: calc(50% - 10.5px/2 + 1.75px)',
    border: '1px solid #333333',
  },
};
