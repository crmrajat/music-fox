import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
    name: 'current',
    initialState: {
        songName: '',
        songId: '',
        artistName: '',
        artistId: '',
        lyrics: '',
        albumArt: '',
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setCurrentSong: (state, action) => {
            state.songName = action.payload;
        },
        setCurrentSongId: (state, action) => {
            state.songId = action.payload;
        },
        setCurrentArtist: (state, action) => {
            state.artistName = action.payload;
        },
        setCurrentArtistId: (state, action) => {
            state.artistId = action.payload;
        },
        setCurrentLyrics: (state, action) => {
            state.lyrics = action.payload;
        },
        setCurrentArt: (state, action) => {
            state.albumArt = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setCurrentSong,
    setCurrentSongId,
    setCurrentArtist,
    setCurrentArtistId,
    setCurrentLyrics,
    setCurrentArt,
} = currentSlice.actions;

export default currentSlice.reducer;
