import { createSlice } from '@reduxjs/toolkit';
import { map } from 'lodash';

export const artistSongsSlice = createSlice({
    name: 'artistSongs',
    initialState: {
        songs: null,
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setArtistSong: (state, action) => {
            state.songs = [
                ...action.payload.response.songs.map((el) => ({
                    id: el.id,
                    title: el.title,
                    albumArt: el.song_art_image_url,
                    url: el.url,
                })),
            ];
        },
    },
});

// Action creators are generated for each case reducer function
export const { setArtistSong } = artistSongsSlice.actions;

export default artistSongsSlice.reducer;
