import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

const Loading = () => {
    const loading = useSelector((state) => state.loading.loadingFlag);

    return (
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
                    backgroundColor: '#bada55',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <CircularProgress size={'5rem'} />
            </Box>
        )
    );
};

export default Loading;
