import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { SongItem } from './index';
import { Button, Card, Typography, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ItemNotFound } from './index.js';

const SongList = () => {
    const songs = [0, 0, 0, 0, 0, 0];
    const [getArtistNameFlag, setGetArtistNameFlag] = useState(true);

    const songsList = useSelector((state) => state.search.response);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('🚀 ~ SongList ~ songsList', songsList);
    }, []);

    // When song is not present in the database
    if (!songsList) return <ItemNotFound />;

    return (
        <Grid container spacing={2}>
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
    );
};

export default SongList;
