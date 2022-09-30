import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SongProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const current = useSelector((state) => state.current);

    useEffect(() => {
        console.log('🚀 ~ SongProfile ~ current', current);
    }, []);

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
                    src={current.albumArt}
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
                        {current.songName}
                    </Typography>

                    <Typography
                        component="div"
                        variant="h5"
                        color="text.secondary"
                        fontWeight={500}
                    >
                        {current.artistName}
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
                    sx={{ whiteSpace: 'pre-line' }}
                >
                    {current.lyrics}
                </Typography>
            </Box>
        </Paper>
    );
};

export default SongProfile;
