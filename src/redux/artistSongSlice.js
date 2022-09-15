import { createSlice } from '@reduxjs/toolkit';

export const artistSongsSlice = createSlice({
    name: 'artistSongs',
    initialState: {
        response: null,
        meta: null,
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setArtistSong: (state, action) => {
            state.response = action.payload.response;
            state.meta = action.payload.meta;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setArtistSong } = artistSongsSlice.actions;

export default artistSongsSlice.reducer;
