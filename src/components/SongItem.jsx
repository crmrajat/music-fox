import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    setCurrentArtistId,
    setCurrentSongId,
    setCurrentArtist,
    setCurrentSong,
    setCurrentArt,
    setCurrentLyrics,
    setCurrent,
} from '../redux';
import {
    getLyricsApi,
    getSongDetailsUsingSongId,
} from '../utilities/apiHandler';

const SongItem = (props) => {
    const [song, setSong] = useState(props.song);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {}, []);

    return (
        <Card>
            <CardActionArea
                onClick={() => {
                    // Get the details of the selected song
                    getSongDetailsUsingSongId(song.id).then((response) => {
                        dispatch(setCurrent(response));
                    });
                    navigate('../SongProfile');
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <CardContent>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        maxLength="20"
                    >
                        {song.title.length > 70
                            ? song.title.substring(0, 70) + '...'
                            : song.title}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150 }}
                    image={song.albumArt}
                    alt={song.title}
                />
            </CardActionArea>
        </Card>
    );
};

export default SongItem;
