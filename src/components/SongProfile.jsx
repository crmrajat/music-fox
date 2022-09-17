import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SongProfile = () => {
    return (
        <Paper sx={{ my: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    sx={{
                        m: 2,
                        borderRadius: 5,
                        maxHeight: { xs: 233, md: 300 },
                        maxWidth: { xs: 350, md: 350 },
                    }}
                    alt="album art"
                    src="https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.1000x1000x1.png"
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        px: { xs: 0, sm: 2 },
                    }}
                >
                    <Typography
                        variant="h3"
                        color="text.primary"
                        fontWeight={600}
                    >
                        Song Name
                    </Typography>

                    <Typography
                        component="div"
                        variant="h5"
                        color="text.secondary"
                        fontWeight={500}
                    >
                        Artist Name
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: { xs: 0, sm: 2 },
                }}
            >
                <Typography component="div" variant="h5" fontWeight={500}>
                    Lyrics
                </Typography>

                <Typography
                    component="div"
                    variant="body1"
                    color="text.secondary"
                >
                    Lyrics
                </Typography>
            </Box>
        </Paper>
    );
};

export default SongProfile;
