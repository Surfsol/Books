import { Creds } from '../types';
import { setToken, encryptUser } from '../components/utils/tokens';

const apiUrl = 'https://books.ioasys.com.br/api/v1/'

const storeTokens = (res:any, setUser:any) => {
    setToken('ioasys-auth', res.headers.get('authorization'));
    setToken('ioasys-refresh-token', res.headers.get('refresh-token'));
    res.json().then((data:any) => {
      encryptUser(data);
      setUser(data);
    });
}

const logInApi = (creds: Creds, setUser: any, setIncorrectPass: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: creds.email, password: creds.password }),
  };
  fetch(`${apiUrl}auth/sign-in`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        storeTokens(res, setUser)
      }
      if (res.status !== 200) {
        setIncorrectPass(true);
      }
    })
    .catch((e) => console.log);
};

const refreshTokenApi = (token: string, setUser:any) => {
    const requestOptions: any = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {"refreshToken": token}
      };
    fetch(`${apiUrl}/auth/refresh-token`, requestOptions)
      .then(res => {
          if(res.status === 200){
              storeTokens(res, setUser)
          }
      })
      .catch(e => console.log)
}

export { logInApi, refreshTokenApi };
