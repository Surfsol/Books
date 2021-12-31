import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Book from './Book';
import { EachBook, StyleSheet } from '../types';

const style = {
  position: 'absolute',
  left: 298,
  top: 80,
  transform: 'translate(-50%, -50%)',
  width: 769,
  height: 608,
  bgcolor: '#FFFFFF',
  p: 4,
  boxShadow: '0px 16px 80px rgba(0, 0, 0, 0.32)',
  borderRadius: '4px',
};

type Props = {
  open: boolean;
  setOpen: any;
  bookId: EachBook | undefined;
};

const BookModal: React.FC<Props> = ({ open, setOpen, bookId }) => {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen();

  const authorList = () => {
    let list = [];
    if (bookId && bookId.authors.length > 1) {
      for (let i = 0; i < bookId.authors.length; i++) {
        if (i < bookId.authors.length - 1) {
          list.push(`${bookId.authors[i]}, `);
        } else {
          list.push(`${bookId.authors[i]}`);
        }
      }
    } else {
      list = bookId ? bookId.authors : [];
    }
    return list;
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div style={styles.containerStyle}>
          <img style={styles.imageUrl} src={bookId?.imageUrl} />

          <div style={styles.bookInfo}>
            <div style={styles.topInfo}>
              <div style={styles.title}>{bookId?.title}</div>
              <div style={styles.authors}>{authorList()}</div>
            </div>
            <div style={styles.allInfo}>
              <div style={styles.informationKeys}>
                <div>INFORMAÇÃO</div>
                <div style={styles.keys}>Paginas</div>
                <div style={styles.keys}>Editora</div>
                <div style={styles.keys}>Publicacao</div>
                <div style={styles.keys}>Idioma </div>
                <div style={styles.keys}>Title Original </div>
                <div style={styles.keys}>ISBN-10 </div>
                <div style={styles.keys}>ISBN-13 </div>
              </div>
              <div style={styles.informationValues}>
                <div style={styles.values}>{bookId?.pageCount} pages</div>
                <div style={styles.values}> {bookId?.publisher}</div>
                <div style={styles.values}> {bookId?.published}</div>
                <div style={styles.values}>{bookId?.language}</div>
                <div style={styles.values}>{bookId?.title}</div>
                <div style={styles.values}>Published {bookId?.isbn10}</div>
                <div style={styles.values}>Published {bookId?.isbn13}</div>
              </div>
            </div>
            <div style={styles.resenha}>{bookId?.description}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default BookModal;

const styles: StyleSheet = {
  containerStyle: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    left: '298px',
    marginTop: '80px',
    marginBottom: '80px',
    width: '769px',
    height: '608px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 16px 80px rgba(0, 0, 0, 0.32)',
    borderRadius: '4px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '272px',
    height: '160px',
    background: '#FFFFFF',
    boxShadow: '0px 6px 24px rgba(84, 16, 95, 0.13)',
    borderRadius: '4px',
    marginLeft: '1.2%',
    marginBottom: '2%',
  },
  imageUrl: {
    filter: 'drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3))',
    width: '349px',
    height: '512.29px',
    margin: '48px 0 48px 48px',
  },
  bookInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'start',
    margin: '48px',
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
    fontSize: '28px',
    lineHeight: '40px',
    color: '#333333',
    width: '276px',
  },
  authors: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#AB2680',
    width: '276px',
  },
  allInfo:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  informationKeys: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    color: '#333333',
  },
  informationValues: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    textAlign: 'right',
    color: '#999999',
    marginTop: '70px',
  },
  resenha: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    color: '#333333',
    width: '276px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    overflow: 'hidden',
    marginTop: '50px'
  },
  published: {
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '.75rem',
    color: '#333333',
  },
};
