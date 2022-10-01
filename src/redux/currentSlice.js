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
        appleMusic: {
            id: null,
            playerLink: null,
        },
        featuredArtists: [],
        primaryArtist: '',
        releaseDateForDisplay: '',
        stats: '',
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes

        setCurrent: (state, action) => {
            const res = action.payload.response.song;

            state.songName = res.title;
            state.songId = res.id;
            state.artistName = res.primary_artist.name;
            state.artistId = res.primary_artist.id;
            state.lyrics = res.lyrics;
            state.albumArt = res.song_art_image_url;
            state.featuredArtists = res.featured_artists;
            state.primaryArtist = res.primary_artist;
            state.releaseDateForDisplay = res.release_date_for_display;
            state.stats = res.stats;
            state.appleMusic = {
                id: res.apple_music_id,
                playerLink: res.apple_music_player_url,
            };
        },

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
    setCurrent,
} = currentSlice.actions;

export default currentSlice.reducer;
