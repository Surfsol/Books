import React from 'react';
import backgroundCover from '../assets/svgs/backgroundCover.svg';
import logo from '../assets/svgs/logo.svg';
import emailBackground from '../assets/svgs/emailBackground.svg';
import emailback2 from '../assets/svgs/emailback2.svg';
import email2Enter from '../assets/svgs/email2Enter.svg';
import incorrectBackground from '../assets/svgs/incorrectBackground.svg';
import senhaSvg from '../assets/svgs/senhaSvg.svg';
import emailSvg from '../assets/svgs/emailSvg.svg';
import triangleIncorrect from '../assets/svgs/triangleIncorrect.svg';
import { StyleSheet } from '../types';

const Login: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src={logo} style={styles.logo} />
      <div style={styles.books}>Books</div>
      <div style={styles.emailBackground}></div>
      <div style={styles.emailBackground2}></div>
      <div style={styles.emailSvg}></div>
      <div style={styles.email2Enter}></div>
      <div style={styles.senhaSvg}></div>
      <div style={styles.enter}>Enter</div>
      <div style={styles.incorrectBackground}></div>
      <img src={triangleIncorrect} style={styles.triangleIncorrect} />
    </div>
  );
};
export default Login;

const styles: StyleSheet = {
  container: {
    backgroundImage: `url(${backgroundCover} )`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
  emailBackground: {
    backgroundImage: `url(${emailBackground} )`,
    position: 'absolute',
    width: '368px',
    height: '60px',
    left: '115px',
    top: '360px',
  },
  emailBackground2: {
    backgroundImage: `url(${emailback2} )`,
    position: 'absolute',
    width: '368px',
    height: '60px',
    left: '115px',
    top: '436px',
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
  email2Enter: {
    backgroundImage: `url(${email2Enter} )`,
    position: 'absolute',
    width: '85px',
    height: '36px',
    left: '386px',
    top: '448px',
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
};
