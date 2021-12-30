const CryptoJS = require("crypto-js");

const setToken = (key: string | null, value: string | null) => {
  if (key && value) localStorage.setItem(key, value);
};

const getToken = (key: string | null) => {
  let token;
  if (key) {
    token = localStorage.getItem(key);
  }
  return token;
};

const password = "lleked89";

const encryptUser = (data: any) => {
  const convert = JSON.stringify(data)
  const crypt = CryptoJS.AES.encrypt(convert, password).toString();
  setToken('ioasys-user', crypt)
};

const decryptUser = (data: string) => {
    console.log({data})
  const bytes = CryptoJS.AES.decrypt(data, password);
  const userString = bytes.toString(CryptoJS.enc.Utf8);
  console.log({userString})
  const userObj = JSON.parse(userString)
  return userObj;
};

export { setToken, getToken, encryptUser, decryptUser };
