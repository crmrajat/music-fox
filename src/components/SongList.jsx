import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { SongItem } from './index';
import {
    Button,
    Card,
    Typography,
    TextField,
    Box,
    Container,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ItemNotFound } from './index.js';
import AppTitle from './AppTitle';

const SongList = () => {
    const songsList = useSelector((state) => state.search.response);
    const current = useSelector((state) => state.current);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('🚀 ~ SongList ~ songsList', songsList);
    }, []);

    // When song is not present in the database
    if (!songsList)
        return (
            <Box
                sx={{
                    height: '100%',
                }}
            >
                <AppTitle showOnlyLogo={false} />

                <ItemNotFound />
            </Box>
        );

    return (
        <Box
            sx={{
                height: '100%',
            }}
        >
            <AppTitle showOnlyLogo={false} />

            <Typography
                variant="h2"
                color="text.primary"
                sx={{
                    fontWeight: 300,
                    textAlign: 'center',
                }}
            >
                Result
            </Typography>

            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center', my: 2 }}
            >
                {songsList.map((item, index) => {
                    return (
                        <Grid key={item.id} item xs={12} sm={6} lg={4}>
                            <SongItem song={item} />
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: 2,
                        }}
                    >
                        <Typography variant="body1">
                            Not found the song you were looking for ?
                        </Typography>

                        <Button
                            onClick={() => {
                                navigate('/Dashboard');
                            }}
                        >
                            Search Again
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SongList;
