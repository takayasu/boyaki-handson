

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
import TopPage from './page/TopPage';
Amplify.configure(awsconfig);


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(80,51,144,0.6)',
    },
    secondary: {
      main: 'rgba(196,70,203,0.4)',
    },
    background: {
      default: '#d9e5f7',
    },
    text: {
      primary: 'rgba(74,73,73,0.7)',
    },
  },
});


function App({ signOut, user }) {

  return (
    <ThemeProvider theme={theme}>
      <>
        <TopPage user={user} signOut={signOut}/>
      </>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
