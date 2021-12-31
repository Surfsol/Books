import React, { useEffect, useState } from 'react';
import { EachBook, StyleSheet, User } from '../types';
import logoBlack from '../assets/svgs/logoBlack.svg';
import Grid from '@mui/material/Grid';
import booksBackground from '../assets/svgs/booksBackground.svg';
import bracket from '../assets/svgs/bracket.svg';
import homeCircle from '../assets/svgs/homeCircle.svg';
import homeGreaterThan from '../assets/svgs/homeGreaterThan.svg';
import homeLessthan from '../assets/svgs/homeLessthan.svg';
import homeArrow from '../assets/svgs/homeArrow.svg';
import { fetchBooks } from '../services/api';
import Book from './Book';

type Props = {
  user: User;
  books: any;
};

const Home: React.FC<Props> = ({ user, books }) => {


  let booksDisplay = [];
  if (books) {
    for (let i = 0; i < 12; i++) {
      booksDisplay.push(books.data[i]);
    }
  }
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.heading}>
          <div style={styles.title}>
            <img src={logoBlack} style={styles.logo} />
            <div style={styles.books}>Books</div>
          </div>
          <div style={styles.topRight}>
            <div style={styles.greeting}>Bem vindo, {user.name} </div>
            <div style={styles.circle}>
              <img src={bracket} style={styles.bracket} />
              <img src={homeArrow} style={styles.arrow} />
            </div>
          </div>
        </div>
        <div
          // container
          // direction='row'
          // justifyContent='space-between'
          // alignItems='center'
          // spacing={4}
          style={styles.bookContainer}
        >
          {booksDisplay.map((item: EachBook) => {
            return <Book book={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

const styles: StyleSheet = {
  container: {
    display: 'flex',
    justifyContent: 'center',
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
  heading: {
    marginTop: '5%',
    marginBottom: '5%',
    // marginBottom: '1.5%'
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
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
    //lineHeight: '4rem',
    color: '#333333',
  },
  topRight: {
    display: 'flex',
    justifyContent: 'flex-end',
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
    //lineHeight: '4rem',
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
  bookContainer: {
    display: 'flex',
    //direction='row'
    justifyContent:'space-between',
    alignItems:'stretch',
    flexWrap: 'wrap',
    //spacing={4}
  }
};
