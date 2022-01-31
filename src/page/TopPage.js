import { useState } from 'react';

import { Box } from "@mui/system";
import { Grid } from '@mui/material';

import EntryBoyaki from '../parts/EntryBoyaki';
import BoyakiListData from '../parts/BoyakiListData';
import BoyakiAppBar from '../parts/BoyakiAppBar';

const TopPage = ({user,signOut}) => {
    const [mode,setMode] = useState('All');

    return (
        <>
      <Grid container spacing={1}>
        <Grid item md={12} sx={{}} >
          <BoyakiAppBar user={user}/>
        </Grid>
        <Grid item xs={12} md={6} sx={{
                    } }>
          <Box sx={{
              margin: '10px' }}>
              <EntryBoyaki signOut={signOut} mode={mode} change={setMode}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            margin: '30px'
              }}>
              <BoyakiListData mode={mode} change={setMode}/>
          </Box>
        </Grid>
          </Grid>

        </>
    );
};

export default TopPage;