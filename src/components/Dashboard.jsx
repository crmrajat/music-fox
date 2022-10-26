import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import {
    Box,
    Slider,
    Typography,
    Input,
    TextField,
    Container,
} from '@mui/material';
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
import {
    setArtistSong,
    setSearch,
    setArtist,
    setSongs,
    setCurrentSong,
    setCurrentArtist,
    setCurrentLyrics,
    setCurrentArt,
} from '../redux';
import {
    Search,
    SongItem,
    SongList,
    ItemNotFound,
    SongProfile,
    ArtistProfile,
} from './index';
import AppTitle from './AppTitle';

const Dashboard = () => {
    const dispatch = useDispatch();
    const artistSong = useSelector((state) => state.artistSongs);
    const artists = useSelector((state) => state.artist);
    const search = useSelector((state) => state.search);
    const songs = useSelector((state) => state.songs);
    const loading = useSelector((state) => state.loading.loadingFlag);
    const current = useSelector((state) => state.current);

    useEffect(() => {
        // console.log('🚀 ~ useEffect ~ current', current);
    }, [current]);

    useEffect(() => {
        //     const song = 'in the end';
        //     const artist = 'linkin park';
        // const aid = 2242064;
        //     const sid = 2978797;
        //     getArtistDetailsUsingArtistId(aid).then((response) => {
        //         console.log(
        //             '🚀 1  ❇️~ getArtistDetailsUsingArtistId ~ response',
        //             response
        //         );
        //     });
        // getArtistSongsUsingArtistId(aid).then((response) => {
        //     console.log(
        //         '🚀2 ~ getArtistSongsUsingArtistId ~ response',
        //         response
        //     );
        // });
        //     getArtistSongsUsingArtistName(artist).then((response) => {
        //         console.log(
        //             '🚀3 ~ getArtistSongsUsingArtistName ~ response',
        //             response
        //         );
        //     });
        //     getSongDetailsUsingSongId(sid).then((response) => {
        //         console.log('🚀4 ~ getSongDetailsUsingSongId ~ response', response);
        //         dispatch(setCurrentSong(response.response.song.title));
        //     });
        //     getLyricsApi(song, artist).then((response) => {
        //         console.log('🚀5 ~ getLyricsApi ~ response', response);
        //     });
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
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <AppTitle showOnlyLogo={false} />
            <Search />
        </Box>
    );
};

export default Dashboard;
