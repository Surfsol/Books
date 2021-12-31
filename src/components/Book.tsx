import React from 'react';
import Grid from '@mui/material/Grid';
import { EachBook, StyleSheet } from '../types';

type Props = {
  book: EachBook;
};

const Book: React.FC<Props> = ({ book }) => {

  const authorList = () => {
    let list = [];
    if (book.authors.length > 1) {
      for (let i = 0; i < book.authors.length; i++) {
        if (i < book.authors.length-1) {
          list.push(`${book.authors[i]}, `);
        } else {
          list.push(`${book.authors[i]}`);
        }
      }
    } else {
      list = book.authors
    }
    return list
  };

  return (
    <div style={styles.container}>
      <img style={styles.imageUrl} src={book.imageUrl} />

      <div style={styles.bookInfo}>
        <div style={styles.topInfo}>
          <div style={styles.title}>{book.title}</div>
          {/* {book.authors.map((item) => (
            <div style={styles.authors}>{item}</div>
          ))} */}
          <div style={styles.authors}>{authorList()}</div>
        </div>
        <div style={styles.pageCount}>
          <div>{book.pageCount} pages</div>
          <div>Editor {book.publisher}</div>
          <div>Published {book.published}</div>
        </div>
      </div>
    </div>
  );
};
export default Book;

const styles: StyleSheet = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    width: '272px',
    height: '160px',
    background: '#FFFFFF',
    boxShadow: '0px 6px 24px rgba(84, 16, 95, 0.13)',
    borderRadius: '4px',
    marginLeft: '1.2%',
    marginBottom: '2%',
    //marginRight: '1'
  },
  imageUrl: {
    width: '81px',
    height: '122px',
    margin: '19px 16px 19px 16px',
    filter: 'drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15))',
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'start',
    marginTop: '16px',
    alignContent: 'space-between',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#333333',
  },
  authors: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#AB2680',
  },
  pageCount: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#999999',
    textAlign: 'start',
    marginTop: 'auto',
    marginBottom: '16px',
    marginRight: '5px',
    padding: 'auto',
    height: '60px',
  },
  publisher: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '.75rem',
    //lineHeight: '2rem',
    color: '#333333',
  },
  published: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '.75rem',
    //lineHeight: '2rem',
    color: '#333333',
  },
};
