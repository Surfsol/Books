export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export interface Creds {
  email?: string | undefined;
  password?: string | undefined;
}

export interface User {
  birthdate?: string | undefined;
  email?: string | undefined;
  gender?: string | undefined;
  id?: string | undefined;
  name?: string | undefined;
}
