import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemNotFound = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 345, mx: 'auto', my: 2, display: 'flex' }}>
            <CardMedia
                component="img"
                height="150"
                width="150"
                image="https://media1.giphy.com/media/zI2xxBtbAig6Y/giphy.gif?cid=ecf05e47et4o4jixpza7ac322ahemwin4q07gwcohdfokk4d"
                sx={{ objectFit: 'cover' }}
                alt="oops gif"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item} Not Found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Looks like we don't have the {item} you are looking for now.
                    Please try again later.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ItemNotFound;
