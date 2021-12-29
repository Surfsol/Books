import React from 'react';
import Grid from '@mui/material/Grid';
import backgroundCover from '../assets/svgs/backgroundCover.svg';

const Login: React.FC = () => {
  return (
    <Grid
      style={{
        backgroundImage: `url(${backgroundCover} )`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    ></Grid>
  );
};
export default Login;
