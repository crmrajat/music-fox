import { Container, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loading } from './components';

function App() {
    const navigate = useNavigate();
    return (
        <Container>
            <Typography
                variant="h1"
                onClick={() => {
                    navigate('/Dashboard');
                }}
            >
                Music Fox
            </Typography>
            <Outlet />
            <Loading />
        </Container>
    );
}

export default App;
