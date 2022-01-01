# User Login

User enters email and password on Login screen.
A post request is sent:
1. if email and password are not valid the user is shown a message that the login credentials were valid.
2. if login email and password are valid user data is returned along with an authorization token and refresh token.

The authorization and refreshToken are stored in local storage.

The user data is encrypted and stored in local storage.

On Login.tsx the authorization token is pulled from localstorage and decoded.  If the token has not expired the user will be logged in and taken to the Home page.

If the authorization token has expired, the refreshToken will be sent, which should return an updated authorization token and refreshToken.  

If the authorization token is expired and the refreshToken fails to return new authorization and refreshTokens.  The user will be prompted to login again.

If the user refreshes the app, the user information on the 'user' variable in useState will not persist.  Therefore, the authorization token from localstorage will be read, if the token has not yet expired, the user information will update the 'user' variable, and if the books data is empty, a request will be sent to fetch books data.

However, if the authorization token has expired, the user will be prompted to login again.

# Fetching data from the api
Upon sending a valid email and password on login.  A GET request is made to fetch all books.

Data is stored on a useState variable in Login.tsx, then persisted in redux.

On Home.tsx book data is retrieved from the redux store.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
