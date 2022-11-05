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
                <LibraryMusicIcon
                    sx={{ fontSize: 80, color: '#2b2d42', cursor: 'pointer' }}
                    onClick={() => {
                        navigate('../Dashboard');
                    }}
                />
            ) : (
                <>
                    <LibraryMusicIcon
                        sx={{
                            fontSize: 80,
                            color: '#2b2d42',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            navigate('../Dashboard');
                        }}
                    />
                    <Typography
                        sx={{
                            width: 'max-content',
                            fontWeight: 200,
                            fontSize: 80,
                            cursor: 'pointer',
                            '&:hover':
                                props.isStatic === true
                                    ? ''
                                    : {
                                          fontWeight: 800,
                                          letterSpacing: 8,
                                          transition: 'all .3s ease-in-out',
                                      },
                        }}
                        onClick={() => {
                            navigate('../Dashboard');
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
