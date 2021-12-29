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

const Login: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundCover} )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <img
        src={logo}
        style={{
          position: 'absolute',
          width: '104.4px',
          height: '36px',
          left: '115px',
          top: '274px',
        }}
      />
      <div
        style={{
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
        }}
      >
        Books
      </div>
      <div
        style={{
          backgroundImage: `url(${emailBackground} )`,
          position: 'absolute',
          width: '368px',
          height: '60px',
          left: '115px',
          top: '360px',
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${emailback2} )`,
          position: 'absolute',
          width: '368px',
          height: '60px',
          left: '115px',
          top: '436px',
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${emailSvg} )`,
          position: 'absolute',
          width: '30px',
          height: '16px',
          left: '131px',
          top: '368px',
          opacity: '0.5',
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${email2Enter} )`,
          position: 'absolute',
          width: '85px',
          height: '36px',
          left: '386px',
          top: '448px',
        }}
      ></div>
      <div
        style={{
          backgroundImage: `url(${senhaSvg} )`,
          position: 'absolute',
          width: '34px',
          height: '16px',
          left: '131px',
          top: '444px',
          opacity: '0.5',
        }}
      ></div>
      <div
        style={{
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
        }}
      >
        Enter
      </div>
      <div
        style={{
          backgroundImage: `url(${incorrectBackground} )`,
          position: 'absolute',
          width: '239px',
          height: '48px',
          left: '115px',
          top: '520px',
          opacity: '0.5',
        }}
      ></div>
           <img
           src={triangleIncorrect}
        style={{
          position: 'absolute',
          width: '8px',
          height: '16px',
          left: '148px',
          top: '510px',
          transform: 'rotate(225deg)',
          backdropFilter: 'blur(2px)',
        }}
      />
    </div>
  );
};
export default Login;
