import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { Box, Slider, Typography, Input, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useEffect } from 'react';
import {
    apiWrapper,
    getArtistDetailsUsingArtistId,
    getArtistSongsUsingArtistId,
    getArtistSongsUsingArtistName,
    getSongDetailsUsingSongId,
    getLyricsApi,
    getSongApi,
    searchSongApi,
} from '../utilities/apiHandler';
import { useDispatch, useSelector } from 'react-redux';
import { setArtistSong, setSearch, setArtist, setSongs } from '../redux';
import {
    Homepage,
    SongItem,
    SongList,
    ItemNotFound,
    SongProfile,
    ArtistProfile,
} from './index';

const Dashboard = () => {
    const dispatch = useDispatch();
    const artistSong = useSelector((state) => state.artistSongs);
    const artists = useSelector((state) => state.artist);
    const search = useSelector((state) => state.search);
    const songs = useSelector((state) => state.songs);
    const loading = useSelector((state) => state.loading.loadingFlag);

    useEffect(() => {
        const song = 'in the end';
        const artist = 'linkin park';
        const aid = 49719;
        const sid = 2978797;
        // getArtistDetailsUsingArtistId(aid).then((response) => {
        //     console.log(
        //         '🚀 1  ❇️~ getArtistDetailsUsingArtistId ~ response',
        //         response
        //     );
        // });
        //     getArtistSongsUsingArtistId(aid).then((response) => {
        //         console.log(
        //             '🚀2 ~ getArtistSongsUsingArtistId ~ response',
        //             response
        //         );
        //     });
        //     getArtistSongsUsingArtistName(artist).then((response) => {
        //         console.log(
        //             '🚀3 ~ getArtistSongsUsingArtistName ~ response',
        //             response
        //         );
        //     });
        //     getSongDetailsUsingSongId(sid).then((response) => {
        //         console.log('🚀4 ~ getSongDetailsUsingSongId ~ response', response);
        //     });
        // getLyricsApi(song, artist).then((response) => {
        //     console.log('🚀5 ~ getLyricsApi ~ response', response);
        // });
        //     getSongApi(song, artist).then((response) => {
        //         console.log('🚀6 ~ getSongApi ~ response', response);
        //     });
        //     searchSongApi(song, artist).then((response) => {
        //         console.log('🚀7 ~ searchSongApi ~ response', response);
        //     });
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h1">Music Fox</Typography>
            <Homepage />
            <SongList />
            <ItemNotFound item="Song" />
            <SongProfile />
            <ArtistProfile />
        </Box>
    );
};

export default Dashboard;
