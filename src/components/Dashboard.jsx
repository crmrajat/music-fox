import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { Box, Slider, Typography } from '@mui/material';
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

const Dashboard = () => {
    const dispatch = useDispatch();
    const artistSong = useSelector((state) => state.artistSongs);
    const artists = useSelector((state) => state.artist);
    const search = useSelector((state) => state.search);
    const songs = useSelector((state) => state.songs);

    useEffect(() => {
        const song = 'in the end';
        const artist = 'linkin park';
        const aid = 49719;
        const sid = 2978797;

        getArtistDetailsUsingArtistId(aid).then((response) => {
            console.log(
                '🚀 1  ❇️~ getArtistDetailsUsingArtistId ~ response',
                response
            );
        });
        getArtistSongsUsingArtistId(aid).then((response) => {
            console.log(
                '🚀2 ~ getArtistSongsUsingArtistId ~ response',
                response
            );
        });
        getArtistSongsUsingArtistName(artist).then((response) => {
            console.log(
                '🚀3 ~ getArtistSongsUsingArtistName ~ response',
                response
            );
        });
        getSongDetailsUsingSongId(sid).then((response) => {
            console.log('🚀4 ~ getSongDetailsUsingSongId ~ response', response);
        });
        getLyricsApi(song, artist).then((response) => {
            console.log('🚀5 ~ getLyricsApi ~ response', response);
        });
        getSongApi(song, artist).then((response) => {
            console.log('🚀6 ~ getSongApi ~ response', response);
        });
        searchSongApi(song, artist).then((response) => {
            console.log('🚀7 ~ searchSongApi ~ response', response);
        });
    }, []);

    const SuccessSlider = styled(Slider)(({ theme }) => ({
        width: 300,
        color: theme.palette.success.main,
        '& .MuiSlider-thumb': {
            '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${alpha(
                    theme.palette.success.main,
                    0.16
                )}`,
            },
            '&.Mui-active': {
                boxShadow: `0px 0px 0px 14px ${alpha(
                    theme.palette.success.main,
                    0.16
                )}`,
            },
        },
    }));

    return (
        <Box
            sx={{
                border: '1px solid white',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Button variant="contained">Hello World</Button>
            <SuccessSlider defaultValue={30} />
            <StarIcon></StarIcon>

            {/* {response.response && (
                <>
                    {Object.entries(response.response.hits[0].result).map(
                        ([key, value]) => {
                            // <div key={key}>{value}</div>
                            {
                                console.table(key, value);
                            }
                        }
                    )}

                    {console.log('👹', response.response)}
                </>
            )} */}
        </Box>
    );
};

export default Dashboard;
