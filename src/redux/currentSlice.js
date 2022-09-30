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
            state = {
                ...state,
                songName: res.title,
                songId: res.id,
                artistName: res.primary_artist.name,
                artistId: res.primary_artist.id,
                lyrics: res.lyrics,
                albumArt: res.song_art_image_url,
                appleMusic: {
                    id: res.apple_music_id,
                    playerLink: res.apple_music_player_url,
                },
                featuredArtists: res.featured_artists,
                primaryArtist: res.primary_artist,
                releaseDateForDisplay: res.release_date_for_display,
                stats: res.stats,
            };

            console.log('😹', state);
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
