import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { Box, Slider, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useEffect } from 'react';
import {
    getArtistApi,
    getArtistSongsApi,
    getSearchApi,
    getSongsApi,
    callApi,
} from '../utilities/apiHandler';
import { useDispatch, useSelector } from 'react-redux';
import { setArtistSong, setSearch, setArtist, setSongs } from '../redux';

const Dashboard = () => {
    const dispatch = useDispatch();
    const response = useSelector((state) => state.songs);
    // const response = useSelector((state) => state.search);

    useEffect(() => {
        // callApi(
        //     'https://genius.p.rapidapi.com/Ap-dhillon-brown-munde-lyrics'
        // ).then((response) => {
        //     console.log('👨‍🦳', response);
        // });

        getSongsApi(300548)
            .then((res) => dispatch(setSongs(res)))
            .catch((err) => console.error(err));

        // getSearchApi()
        //     .then((res) => dispatch(setSearch(res)))
        //     .catch((err) => console.error(err));
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

            {response.response && (
                <>
                    {/* {Object.entries(response.response.hits[0].result).map(
                        ([key, value]) => {
                            // <div key={key}>{value}</div>
                            {
                                console.table(key, value);
                            }
                        }
                    )} */}

                    {console.log('👹', response.response)}
                </>
            )}
        </Box>
    );
};

export default Dashboard;
