import { Container, Grid, Paper, Typography } from '@mui/material';
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
        <Container>
            <Paper>
                <Grid container colSpacing={10}>
                    <Grid item xs={12} mb={10} sx={{ border: 1 }}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            flexDirection="row"
                            gap={4}
                            padding={2}
                            sx={{ border: 1 }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    borderRadius: 5,
                                    maxHeight: { xs: 233, md: 300 },
                                    maxWidth: { xs: 350, md: 350 },
                                }}
                                alt="album art"
                                src={current.albumArt}
                            />
                            <Typography
                                variant="h3"
                                color="text.primary"
                                fontWeight={600}
                                sx={{
                                    display: 'flex',
                                    flex: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                {current.songName}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ border: 1 }}>
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Typography
                                component="div"
                                variant="h5"
                                fontWeight={500}
                            >
                                Lyrics
                            </Typography>

                            <Typography
                                component="div"
                                variant="body1"
                                color="text.secondary"
                                sx={{ whiteSpace: 'pre-line' }}
                            >
                                {current.lyrics || 'Unknown'}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ border: 1 }}>
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                            gap={2}
                        >
                            <Typography
                                component="div"
                                variant="h5"
                                fontWeight={500}
                            >
                                Primary Artist :{' '}
                                {current?.primaryArtist?.name || 'Unknown'}
                            </Typography>
                            <Typography
                                component="div"
                                variant="h5"
                                fontWeight={500}
                            >
                                Featured Artist :{' '}
                                {current?.featuredArtist?.name || ' Unknown'}
                            </Typography>
                            <Typography
                                component="div"
                                variant="h5"
                                fontWeight={500}
                            >
                                Release Date :{' '}
                                {current?.releaseDateForDisplay || 'Unknown'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default SongProfile;
