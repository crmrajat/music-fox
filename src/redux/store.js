import { configureStore } from '@reduxjs/toolkit';
import artistSongsReducer from '../redux/artistSongSlice';
import artistReducer from '../redux/artistSlice';
import songsReducer from '../redux/songsSlice';
import searchReducer from '../redux/searchSlice';

export default configureStore({
    reducer: {
        artistSongs: artistSongsReducer,
        artist: artistReducer,
        songs: songsReducer,
        search: searchReducer,
    },
});
