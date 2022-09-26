import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const SongItem = (props) => {
    const [song, setSong] = useState(props.song);

    useEffect(() => {}, []);

    return (
        <Card>
            <CardActionArea
                onClick={() => {
                    console.log('👳‍♀️ Open the lyrics : ', song.title);
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
