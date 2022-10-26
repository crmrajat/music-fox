import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setArtistSong } from '../redux';
import { getArtistSongsUsingArtistId } from '../utilities/apiHandler';
import AppTitle from './AppTitle';

const SongProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const current = useSelector((state) => state.current);

    useEffect(() => {
        // console.log('🚀 ~ SongProfile ~ current', current);
    }, []);

    return (
        <Container>
            <AppTitle showOnlyLogo={false} />

            <Paper sx={{ mt: 4 }}>
                <Grid container>
                    <Grid item xs={12} mb={10}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexWrap="wrap"
                            flexDirection="row"
                            gap={4}
                            padding={10}
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
                                variant="h2"
                                color="text.primary"
                                sx={{
                                    display: 'flex',
                                    flex: 1,
                                    justifyContent: 'center',
                                    letterSpacing: 5,
                                    fontWeight: 300,
                                }}
                            >
                                {current.songName}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} mb={10} px={2}>
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Typography
                                component="div"
                                variant="h3"
                                fontWeight={300}
                                mb={4}
                            >
                                Lyrics
                            </Typography>

                            <Typography
                                component="div"
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    whiteSpace: 'pre-line',
                                    fontWeight: 400,
                                    letterSpacing: 1.4,
                                }}
                            >
                                {current.lyrics || 'Unknown'}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} mb={10}>
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                            gap={4}
                        >
                            <Box>
                                <Typography
                                    variant="h6"
                                    fontWeight={400}
                                    textAlign="center"
                                >
                                    Primary Artist :
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight={200}
                                    sx={{
                                        cursor: 'pointer',
                                        '&:hover': {
                                            fontWeight: 600,
                                            transition: 'all 300ms ease-in-out',
                                        },
                                    }}
                                    onClick={() => {
                                        console.log('👩‍👩‍👧‍👦');
                                        getArtistSongsUsingArtistId(
                                            current.artistId
                                        ).then((response) => {
                                            dispatch(setArtistSong(response));
                                            console.log(
                                                '🚀2 ~ getArtistSongsUsingArtistId ~ response',
                                                response
                                            );
                                            navigate('/ArtistProfile');
                                        });
                                    }}
                                >
                                    {current?.primaryArtist?.name || 'Unknown'}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="h6"
                                    fontWeight={400}
                                    textAlign="center"
                                >
                                    Release Date :
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight={200}
                                    sx={{
                                        '&:hover': {
                                            fontWeight: 600,
                                            transition: 'all 300ms ease-in-out',
                                        },
                                    }}
                                >
                                    {current?.releaseDateForDisplay ||
                                        'Unknown'}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default SongProfile;
