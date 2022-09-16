import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        loadingFlag: false,
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes

        startLoading: (state) => {
            state.loadingFlag = true;
        },
        stopLoading: (state) => {
            state.loadingFlag = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
