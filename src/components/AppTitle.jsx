import React from 'react';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const AppTitle = (props) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {props.showOnlyLogo === true ? (
                <LibraryMusicIcon sx={{ fontSize: 80, color: '#2b2d42' }} />
            ) : (
                <>
                    <LibraryMusicIcon sx={{ fontSize: 80, color: '#2b2d42' }} />
                    <Typography
                        sx={{
                            width: 'max-content',
                            fontWeight: 200,
                            fontSize: 80,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('/Dashboard');
                        }}
                    >
                        Music Fox
                    </Typography>
                </>
            )}
        </Box>
    );
};

export default AppTitle;
