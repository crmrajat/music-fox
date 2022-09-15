import { createSlice } from '@reduxjs/toolkit';

export const songsSlice = createSlice({
    name: 'songs',
    initialState: {
        response: null,
        meta: null,
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setSongs: (state, action) => {
            state.response = action.payload.response;
            state.meta = action.payload.meta;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSongs } = songsSlice.actions;

export default songsSlice.reducer;
