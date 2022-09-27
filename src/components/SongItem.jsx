import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    setCurrentArtistId,
    setCurrentSongId,
    setCurrentArtist,
    setCurrentSong,
} from '../redux';
import { getSongDetailsUsingSongId } from '../utilities/apiHandler';

const SongItem = (props) => {
    const [song, setSong] = useState(props.song);
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <Card>
            <CardActionArea
                onClick={() => {
                    console.log('👳‍♀️ Open the lyrics : ', song.title);
                    console.log('🤳', song);
                    getSongDetailsUsingSongId(song.id).then((response) => {
                        console.log(
                            '🚀4 ~ getSongDetailsUsingSongId ~ response',
                            response.response.song.primary_artist.id
                        );

                        // Add the album art and lyrics to the current state
                        dispatch(setCurrentSong(response.response.song.title));
                        dispatch(setCurrentSongId(song.id));
                        dispatch(
                            setCurrentArtist(
                                response.response.song.primary_artist.name
                            )
                        );
                        dispatch(
                            setCurrentArtistId(
                                response.response.song.primary_artist.id
                            )
                        );
                    });
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
                    >
                        {song.title}
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
