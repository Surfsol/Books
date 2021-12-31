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

export interface EachBook {
  authors: string[]
  category: string
  description: string
  id: string
  imageUrl: string
  isbn10: string
  isbn13: string
  language: string
  pageCount: number
  published: number
  publisher: string
  title: string
}