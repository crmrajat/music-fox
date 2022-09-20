import { Container, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Loading } from './components';

function App() {
    return (
        <Container>
            <Typography variant="h1">Music Fox</Typography>
            <Outlet />
            <Loading />
        </Container>
    );
}

export default App;
