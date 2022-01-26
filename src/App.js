import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Grid } from '@mui/material';

import EntryBoyaki from './parts/EntryBoyaki';
import BoyakiListData from './parts/BoyakiListData';
import BoyakiAppBar from './parts/BoyakiAppBar';

import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';
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
      <Grid container spacing={1}>
        <Grid item md={12} sx={{}} >
          <BoyakiAppBar user={user}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{
                    } }>
          <Box sx={{
              margin: '10px' }}>
              <EntryBoyaki signOut={signOut}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            margin: '30px'
              }}>
              <BoyakiListData />
          </Box>
        </Grid>
          </Grid>
      </>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
