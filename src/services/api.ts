import { Creds } from '../types';

const LogInApi = (creds: Creds, setUser: any, setIncorrectPass:any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: creds.email, password: creds.password }),
      };
      fetch('https://books.ioasys.com.br/api/v1/auth/sign-in', requestOptions)
        .then((res) => {
            if(res.status === 200){
                res.json().then(data => setUser(data))
            }
            if(res.status !== 200){
              setIncorrectPass(true)
            }})
        .catch((e) => console.log);
};

export { LogInApi };
