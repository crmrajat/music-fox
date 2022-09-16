import { getLyrics, getSong, searchSong } from 'genius-lyrics-api';
import { startLoading, stopLoading } from '../redux';
import store from '../redux/store';

/**
 * This is the type of the options object that is used to call Genius API methods
 *
 *       type options {
 *       	title: string;
 *       	artist: string;
 *       	apiKey: string;		// Genius developer access token
 *       	optimizeQuery?: boolean; // Setting this to true will optimize the query for best results
 *       	authHeader?: boolean; // Whether to include auth header in the search request. 'false' by default.
 *       }
 *
 */

//  This function is wrapper for calling the RAPID API endpoint.

const apiWrapper = (url) => {
    store.dispatch(startLoading());

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
        },
    };

    return fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
            store.dispatch(stopLoading());
            return response;
        })
        .catch((err) => {
            store.dispatch(stopLoading());
            return err;
        });
};

/**
 * Return details about the artist using artistId
 */
const getArtistDetailsUsingArtistId = (artistId) => {
    return apiWrapper(`https://genius.p.rapidapi.com/artists/${artistId}`);
};

/**
 * Return 20 recent songs of the artist using artistId
 */
const getArtistSongsUsingArtistId = (artistId) => {
    return apiWrapper(
        `https://genius.p.rapidapi.com/artists/${artistId}/songs`
    );
};

/**
 * Return 10 recent songs of the artist using artistName
 */
const getArtistSongsUsingArtistName = (artistName) => {
    return apiWrapper(
        `https://genius.p.rapidapi.com/search?q=${encodeURIComponent(
            artistName
        )}`
    );
};

/**
 * Return details about the song using songId
 */
const getSongDetailsUsingSongId = (songId) => {
    return apiWrapper(`https://genius.p.rapidapi.com/songs/${songId}`);
};

/**
 * Return lyrics about the matching song using songName and artistName
 */
const getLyricsApi = (songName, artistName) => {
    store.dispatch(startLoading());

    const options = {
        apiKey: import.meta.env.VITE_GENIUS_API_KEY,
        title: songName,
        artist: artistName,
        optimizeQuery: true,
    };

    return getLyrics(options)
        .then((res) => {
            store.dispatch(stopLoading());
            return res;
        })
        .catch((err) => {
            store.dispatch(stopLoading());
            return err;
        });
};
/**
 *  Return more details about the matching song using songName and artistName
 */
const getSongApi = (songName, artistName) => {
    store.dispatch(startLoading());

    const options = {
        apiKey: import.meta.env.VITE_GENIUS_API_KEY,
        title: songName,
        artist: artistName,
        optimizeQuery: true,
    };

    return getSong(options)
        .then((res) => {
            store.dispatch(stopLoading());
            return res;
        })
        .catch((err) => {
            store.dispatch(stopLoading());
            return err;
        });
};
/**
 * Return 10 matching songs details using songName and artistName
 */
const searchSongApi = (songName, artistName) => {
    store.dispatch(startLoading());

    const options = {
        apiKey: import.meta.env.VITE_GENIUS_API_KEY,
        title: songName,
        artist: artistName,
        optimizeQuery: true,
    };

    return searchSong(options)
        .then((res) => {
            store.dispatch(stopLoading());
            return res;
        })
        .catch((err) => {
            store.dispatch(stopLoading());
            return err;
        });
};

export {
    apiWrapper,
    getArtistDetailsUsingArtistId,
    getArtistSongsUsingArtistId,
    getArtistSongsUsingArtistName,
    getSongDetailsUsingSongId,
    getLyricsApi,
    getSongApi,
    searchSongApi,
};
