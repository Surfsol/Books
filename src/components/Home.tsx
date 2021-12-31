import React, { useEffect, useState } from 'react';
import { EachBook, StyleSheet, User } from '../types';
import logoBlack from '../assets/svgs/logoBlack.svg';
import booksBackground from '../assets/svgs/booksBackground.svg';
import bracket from '../assets/svgs/bracket.svg';
import homeCircle from '../assets/svgs/homeCircle.svg';
import homeGreaterThan from '../assets/svgs/homeGreaterThan.svg';
import homeLessthan from '../assets/svgs/homeLessthan.svg';
import homeArrow from '../assets/svgs/homeArrow.svg';
import Book from './Book';
import BookModal from './BookModal';

type Props = {
  user: User;
  books: any;
};

const Home: React.FC<Props> = ({ user, books }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [bookId, setBookId] = useState<EachBook | undefined>();

  let booksDisplay: any = [];
  if (books) {
    for (let i = 0; i < 12; i++) {
      booksDisplay.push(books.data[i]);
    }
  }

  const handleOpen = (id: string) => {
    if (booksDisplay.length > 0) {
      setOpen(true);
      for (let i = 0; i < booksDisplay.length; i++) {
        if (booksDisplay[i].id === id) {
          setBookId(booksDisplay[i]);
        }
      }
    }
  };

  const total = books ? Math.floor(books.data.length / 12) : 0;
  const pagesTotal = `1 de ${total}`;

  return (
    <>
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
          <div style={styles.bookContainer}>
            {booksDisplay.map((item: EachBook) => {
              return <Book book={item} key={item.id} handleOpen={handleOpen} />;
            })}
          </div>
          <div style={styles.pageInfo}>
            <div style={styles.pages}>Páginas {pagesTotal}</div>
            <div style={styles.circle}></div>
            <img style={styles.less} src={homeLessthan} />
            <div style={styles.circle}></div>
            <img style={styles.greater} src={homeGreaterThan} />
          </div>
        </div>
      </div>
      {open ? (
        <BookModal
          open={open}
          setOpen={setOpen}
          bookId={bookId}
        />
      ) : null}
    </>
  );
};
export default Home;

const styles: StyleSheet = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${booksBackground} )`,
    width: '100%',
    height: '100vh',
  },
  content: {
    width: '83%',
  },
  heading: {
    marginTop: '5%',
    marginBottom: '5%',
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
    marginRight: '1%',
  },
  books: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '2.3rem',
    color: '#333333',
  },
  topRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  greeting: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1.2rem',

    color: '#333333',
  },
  circle: {
    backgroundImage: `url(${homeCircle} )`,
    width: '32px',
    height: '32px',

    bottom: '90.1%',

    boxSizing: 'border-box',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  },
  bracket: {
    width: '5.5px',
    height: '14px',

    border: '1px solid #333333',
  },
  arrow: {
    width: '10.5px',
    height: '8px',

    border: '1px solid #333333',
  },
  bookContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  pageInfo: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  pages: {
    width: '87px',
    height: '20px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#333333',
  },
  circleBottom: {
    backgroundImage: `url(${homeCircle} )`,
    width: '32px',
    height: '32px',
    boxSizing: 'border-box',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  },
  less: {
    width: '4px',
    height: '8px',

    border: '1px solid rgba(51, 51, 51, 0.4)',
    transform: 'matrix(-1, 0, 0, 1, 0, 0)',
  },
  greater: {
    width: '4px',
    height: '8px',

    border: '1px solid #333333',
  },
};
