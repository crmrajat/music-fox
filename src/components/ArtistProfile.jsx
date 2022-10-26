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
            <AppTitle showOnlyLogo={false} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: { xs: 0, sm: 2 },
                }}
            >
                <Typography
                    variant="h2"
                    color="text.primary"
                    fontWeight={300}
                    my={4}
                >
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
