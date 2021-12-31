import { Creds } from '../types';
import { setToken, encryptUser, getToken } from '../components/utils/tokens';

const apiUrl = 'https://books.ioasys.com.br/api/v1/';

const storeTokens = (res: any, setUser: any, setBooks:any) => {
  setToken('ioasys-auth', res.headers.get('authorization'));
  setToken('ioasys-refresh-token', res.headers.get('refresh-token'));
  fetchBooks(setBooks)
  res.json().then((data: any) => {
    encryptUser(data);
    setUser(data);
  });
};

const logInApi = (creds: Creds, setUser: any, setIncorrectPass: any, setBooks:any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: creds.email, password: creds.password }),
  };
  fetch(`${apiUrl}auth/sign-in`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        storeTokens(res, setUser, setBooks);
      }
      if (res.status !== 200) {
        setIncorrectPass(true);
      }
    })
    .catch((e) => console.log);
};

const refreshTokenApi = (token: string, setUser: any, setBooks:any) => {
    const authToken = getToken('ioasys-auth');
  const requestOptions: any = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', authorization: `bearer ${authToken}` },
    body: { refreshToken: token },
  };
  fetch(`${apiUrl}auth/refresh-token`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        storeTokens(res, setUser, setBooks);
      }
    })
    .catch((e) => console.log);
};

const fetchBooks = (setBooks: any) => {
  const authToken = getToken('ioasys-auth');
  const requestOptions: any = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `bearer ${authToken}`,
    },
  };
  console.log({ requestOptions });
  fetch(`${apiUrl}/books?page=1&amount=25&category=biographies`, requestOptions)
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data: any) => {
          setBooks(data);
        });
      }
    })
    .catch((e) => console.log);
};

export { logInApi, refreshTokenApi, fetchBooks };
