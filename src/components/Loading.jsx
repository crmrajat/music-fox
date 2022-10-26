import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Loading = () => {
    const loading = useSelector((state) => state.loading.loadingFlag);

    return (
        // true && (
        loading && (
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 100,
                    height: '100%',
                    overflow: 'hidden',
                    width: '100%',
                    backgroundColor: '#2b2d42',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <CircularProgress size={'5rem'} />
                <Typography variant="h1" color="initial">
                    Loading . . .
                </Typography>
            </Box>
        )
    );
};

export default Loading;
