import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { SongItem } from './index';
import { Button, Card, Typography, TextField } from '@mui/material';

const SongList = () => {
    const songs = [0, 0, 0, 0, 0, 0];
    const [getArtistNameFlag, setGetArtistNameFlag] = useState(true);

    return (
        <>
            <Grid container spacing={2}>
                {songs.map((item, index) => {
                    return (
                        <Grid key={'song-' + index} item xs={12} sm={6} lg={4}>
                            <SongItem />
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Card
                        sx={{
                            display: 'flex',
                            // flexDirection: 'column',
                            alignItems: 'center',
                            padding: 2,
                        }}
                    >
                        <Typography variant="body1">
                            Not found the song you were looking for ?
                        </Typography>

                        <Button>Search Again</Button>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default SongList;
