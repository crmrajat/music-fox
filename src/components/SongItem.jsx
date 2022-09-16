import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const SongItem = () => {
    const theme = useTheme();

    return (
        <Card>
            <CardActionArea
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <CardContent>
                    <Typography component="div" variant="h5">
                        Live From
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                    >
                        Mac Miller
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image="https://images.genius.com/99b120c80b19d34dc589096a98b2fabc.1000x1000x1.png"
                    alt="Live from space album cover"
                />
            </CardActionArea>
        </Card>
    );
};

export default SongItem;
