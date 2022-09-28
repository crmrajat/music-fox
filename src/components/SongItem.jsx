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
    setCurrentArt,
    setCurrentLyrics,
} from '../redux';
import {
    getLyricsApi,
    getSongDetailsUsingSongId,
} from '../utilities/apiHandler';

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

                    // Get the details of the selected song
                    getSongDetailsUsingSongId(song.id).then((response) => {
                        console.log(
                            '🚀4 ~ getSongDetailsUsingSongId ~ response',
                            response.response.song
                        );

                        // Get the lyrics of the selected song
                        getLyricsApi(
                            response.response.song.title,
                            response.response.song.primary_artist.name
                        ).then((response) => {
                            // Store the lyrics of the selected song in state storage
                            dispatch(setCurrentLyrics(response));
                        });

                        // Store the rest of the metadata for the selected song in state storage
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
                        dispatch(setCurrentArt(song.albumArt));
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
