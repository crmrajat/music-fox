const callApi = (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
        },
    };

    return fetch(url, options)
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => err);
};

const getArtistApi = (artistId) =>
    callApi(`https://genius.p.rapidapi.com/artists/${artistId}`);

const getArtistSongsApi = (artistId) =>
    callApi(`https://genius.p.rapidapi.com/artists/${artistId}/songs`);

const getSearchApi = (artistName) =>
    callApi(
        `https://genius.p.rapidapi.com/search?q=${encodeURIComponent(
            artistName
        )}`
    );

const getSongsApi = (songId) =>
    callApi(`https://genius.p.rapidapi.com/songs/${songId}`);

export { getArtistApi, getArtistSongsApi, getSearchApi, getSongsApi, callApi };
