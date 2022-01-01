import React, { useEffect, useState } from 'react';
import backgroundCover from '../assets/svgs/backgroundCover.svg';
import logo from '../assets/svgs/logo.svg';
import emailBackground from '../assets/svgs/emailBackground.svg';
import passwordBackground from '../assets/svgs/emailback2.svg';
import passEnter from '../assets/svgs/email2Enter.svg';
import incorrectBackground from '../assets/svgs/incorrectBackground.svg';
import senhaSvg from '../assets/svgs/senhaSvg.svg';
import emailSvg from '../assets/svgs/emailSvg.svg';
import senhaSvgMobile from '../assets/svgs/senhaSvgMobile.svg';
import emailSvgMobile from '../assets/svgs/emailSvgMobile.svg';
import triangleIncorrect from '../assets/svgs/triangleIncorrect.svg';
import { StyleSheet, Creds, User } from '../types';
import { logInApi, refreshTokenApi } from '../services/api';
import { getToken } from './utils/tokens';
import jwt_decode from 'jwt-decode';
import { decryptUser } from './utils/tokens';
import Home from './Home';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import booksAction from '../redux/actions/booksAction';
import { fetchBooks } from '../services/api';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/rootReducer';

const Login: React.FC = () => {
  const [creds, setCreds] = useState<Creds>({});
  const [incorrectPass, setIncorrectPass] = useState<boolean>();
  const [user, setUser] = useState<User>();
  const [books, setBooks] = useState<any>();
  const dispatch = useDispatch();

  const booksSelector = useSelector(
    (state: IRootState) => state.bookReducer.books
  );


  useEffect(() => {
    if (books?.data.length > 0) {
      dispatch(booksAction(books.data));
    } 
    if(!books){
      let data = JSON.parse(getToken('ioasys-data'))
      setBooks(data)
      if(user && !data) fetchBooks(setBooks)
    }
  }, [books]);

  const isMobile = useMediaQuery({
    query: '(max-width: 850px)',
  });

  const handleCreds = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    logInApi(creds, setUser, setIncorrectPass, setBooks);
  };

  useEffect(() => {
    setIncorrectPass(false);
  }, [creds]);

  useEffect(() => {
    if (!user) {
      const authToken = getToken('ioasys-auth');
      if (authToken) {
        const decoded: any = jwt_decode(authToken);
        const userInfo: any = getToken('ioasys-user');
        if (decoded.vld > Date.now()) {
          setUser(decryptUser(userInfo));
        } else {
          const refresh: any = getToken('ioasys-refresh-token');
          refreshTokenApi(refresh, setUser, setBooks);
        }
      }
    }
  }, []);

  return user ? (
    <Home user={user}/>
  ) : (
    <div style={styles.container}>
      <img src={logo} style={isMobile ? styles.logoMobile : styles.logo} />
      <div style={isMobile ? styles.booksMobile : styles.books}>Books</div>
      <div style={isMobile ? styles.emailMobile : styles.emailBackground}></div>
      <input
        style={isMobile ? styles.emailInputMobile : styles.emailInput}
        type='email'
        value={creds.email}
        name='email'
        onChange={handleCreds}
      />
      <div
        style={isMobile ? styles.passwordMobile : styles.passwordBackground}
      ></div>
      <input
        style={isMobile ? styles.passwordInputMobile : styles.passwordInput}
        type='password'
        value={creds.password}
        name='password'
        onChange={handleCreds}
      />
      <div style={isMobile ? styles.emailSvgMobile : styles.emailSvg}></div>
      <div style={isMobile ? styles.passEnterMobile : styles.passEnter}></div>
      <div style={isMobile ? styles.senhaSvgMobile : styles.senhaSvg}></div>
      <div
        style={isMobile ? styles.enterMobile : styles.enter}
        onClick={handleLogin}
      >
        Enter
      </div>
      {incorrectPass ? (
        <>
          <div style={styles.incorrectBackground}></div>
          <img src={triangleIncorrect} style={styles.triangleIncorrect} />
          <div style={styles.error}>Email e/ou senha incorrectos</div>
        </>
      ) : null}
    </div>
  );
};
export default Login;

const styles: StyleSheet = {
  container: {
    backgroundImage: `url(${backgroundCover} )`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    width: '104.4px',
    height: '36px',
    left: '115px',
    top: '274px',
  },
  logoMobile: {
    position: 'absolute',
    width: '104.4px',
    height: '36px',
    left: '5%',
    right: '62.38%',
    top: '32.81%',
    bottom: '61.56%',
  },
  books: {
    position: 'absolute',
    width: '77px',
    height: '40px',
    left: '236px',
    top: '272px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '28px',
    lineHeight: '40px',
    color: '#FFFFFF',
  },
  booksMobile: {
    position: 'absolute',
    width: '77px',
    height: '40px',
    left: '137px',
    top: '208px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '28px',
    lineHeight: '40px',
    color: '#FFFFFF',
  },
  emailBackground: {
    backgroundImage: `url(${emailBackground} )`,
    position: 'absolute',
    width: '368px',
    height: '60px',
    left: '115px',
    top: '360px',
  },
  emailInput: {
    position: 'absolute',
    width: '159px',
    height: '24px',
    left: '131px',
    top: '388px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    border: '0 transparent',
  },
  emailInputMobile: {
    position: 'absolute',
    width: '259px',
    height: '24px',
    left: '29px',
    top: '324px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    border: '0 transparent',
  },
  emailMobile: {
    backgroundImage: `url(${emailBackground} )`,
    position: 'absolute',
    width: '288px',
    height: '60px',
    left: '16px',
    top: '296px',
  },
  passwordMobile: {
    backgroundImage: `url(${passwordBackground} )`,
    position: 'absolute',
    width: '288px',
    height: '60px',
    left: '16px',
    top: '372px',
  },
  passwordBackground: {
    backgroundImage: `url(${passwordBackground} )`,
    position: 'absolute',
    width: '368px',
    height: '60px',
    left: '115px',
    top: '436px',
  },
  passwordInput: {
    position: 'absolute',
    width: '65px',
    height: '24px',
    left: '131px',
    top: '464px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    border: '0 transparent',
  },
  passwordInputMobile: {
    position: 'absolute',
    width: '158px',
    height: '24px',
    left: '29px',
    top: '400px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    border: '0 transparent',
  },
  emailSvg: {
    backgroundImage: `url(${emailSvg} )`,
    position: 'absolute',
    width: '30px',
    height: '16px',
    left: '131px',
    top: '368px',
    opacity: '0.5',
  },
  emailSvgMobile: {
    backgroundImage: `url(${emailSvgMobile} )`,
    position: 'absolute',
    width: '259px',
    height: '16px',
    left: '29px',
    top: '304px',
    opacity: '0.5',
  },
  passEnter: {
    backgroundImage: `url(${passEnter} )`,
    position: 'absolute',
    width: '85px',
    height: '36px',
    left: '386px',
    top: '448px',
  },
  passEnterMobile: {
    backgroundImage: `url(${passEnter} )`,
    position: 'absolute',
    width: '85px',
    height: '36px',
    left: '203px',
    top: '384px',
  },
  senhaSvg: {
    backgroundImage: `url(${senhaSvg} )`,
    position: 'absolute',
    width: '34px',
    height: '16px',
    left: '131px',
    top: '444px',
    opacity: '0.5',
  },
  senhaSvgMobile: {
    backgroundImage: `url(${senhaSvgMobile} )`,
    position: 'absolute',
    width: '158px',
    height: '16px',
    left: '29px',
    top: '380px',
    opacity: '0.5',
  },
  enter: {
    position: 'absolute',
    width: '44px',
    height: '20px',
    left: '406px',
    top: '456px',
    lineHeight: '20px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    color: '#B22E6F',
  },
  enterMobile: {
    position: 'absolute',
    width: '44px',
    height: '20px',
    left: '223px',
    top: '392px',
    lineHeight: '20px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    color: '#B22E6F',
  },
  incorrectBackground: {
    backgroundImage: `url(${incorrectBackground} )`,
    position: 'absolute',
    width: '239px',
    height: '48px',
    left: '115px',
    top: '520px',
    opacity: '0.5',
  },
  triangleIncorrect: {
    position: 'absolute',
    width: '8px',
    height: '16px',
    left: '148px',
    top: '510px',
    transform: 'rotate(225deg)',
    backdropFilter: 'blur(2px)',
  },
  error: {
    position: 'absolute',
    width: '207px',
    height: '16px',
    left: '131px',
    top: '536px',
    fontFamily: 'Heebo',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '16px',
    color: '#FFFFFF',
  },
};
