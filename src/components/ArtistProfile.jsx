import {
    Button,
    Card,
    Container,
    Grid,
    Paper,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { current } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppTitle from './AppTitle';
import SongItem from './SongItem';

const ArtistProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const current = useSelector((state) => state.current);
    const songsList = useSelector((state) => state.artistSongs.songs);

    useEffect(() => {
        console.log('🚀 ~ SongProfile ~ cusongListrrent', songsList);
    }, []);

    return (
        <Container>
            {/* <Typography
                sx={{
                    width: 'max-content',
                    fontWeight: 300,
                    cursor: 'pointer',
                    mb: 4,
                }}
                variant="h1"
                onClick={() => {
                    navigate('/Dashboard');
                }}
            >
                Music Fox
            </Typography> */}

            <AppTitle showOnlyLogo={true} />

            {/* <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
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
                        Artist Name
                    </Typography>
                </Box>
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
            </Box> */}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: { xs: 0, sm: 2 },
                }}
            >
                <Typography variant="h2" color="text.primary" fontWeight={400}>
                    Songs by {current.artistName}
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: 'center', my: 2 }}
                >
                    {songsList &&
                        songsList?.map((item, index) => {
                            return (
                                <Grid key={item.id} item xs={12} sm={6} lg={4}>
                                    <SongItem song={item} />
                                </Grid>
                            );
                        })}
                </Grid>
            </Box>
        </Container>
    );
};

export default ArtistProfile;
