import { Box, Container, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loading } from './components';

function App() {
    const navigate = useNavigate();
    return (
        <Container>
            <Box sx={{ display: 'flex' }}>
                <Typography
                    sx={{ cursor: 'pointer' }}
                    variant="h1"
                    onClick={() => {
                        navigate('/Dashboard');
                    }}
                >
                    Music Fox
                </Typography>
            </Box>
            <Outlet />
            <Loading />
        </Container>
    );
}

export default App;
