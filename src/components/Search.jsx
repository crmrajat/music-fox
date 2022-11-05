import { Box, Button, Card, Container, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentArtist, setCurrentSong, setSearch } from '../redux';
import { getSongApi, searchSongApi } from '../utilities/apiHandler';

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Redux Store state
    const songNameFromStore = useSelector((state) => state.current.songName);
    const artistNameFromStore = useSelector(
        (state) => state.current.artistName
    );
    // Local component state
    const [inputValue, setInputValue] = useState({
        song: songNameFromStore,
        artist: artistNameFromStore,
    });

    const handleSearch = (data) => {
        // Storing the song and artist information for future use
        dispatch(setCurrentSong(data.song));
        dispatch(setCurrentArtist(data.artist));
        // Search for the songs
        searchSongApi(data.song, data.artist).then((response) => {
            // console.log('🚀 ~ searchSongApi ~ response', response);
            dispatch(setSearch(response));
            navigate('../SongList');
        });
    };

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                padding: 8,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            my={2}
        >
            <TextField
                fullWidth
                size="small"
                label="Song Name"
                value={inputValue.song}
                onChange={(e) => {
                    setInputValue({ ...inputValue, song: e.target.value });
                }}
            />
            <TextField
                fullWidth
                size="small"
                label="Artist Name"
                value={inputValue.artist}
                onChange={(e) => {
                    setInputValue({
                        ...inputValue,
                        artist: e.target.value,
                    });
                }}
            />
            <Button
                disabled={inputValue.song === '' || inputValue.artist === ''}
                variant="contained"
                color="primary"
                onClick={() => {
                    handleSearch(inputValue);
                }}
            >
                Search
            </Button>
        </Card>
    );
};

export default Search;
