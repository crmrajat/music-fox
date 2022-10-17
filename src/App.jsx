import { Box, Container, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Loading } from './components';

function App() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <Outlet />
            <Loading />
        </Box>
    );
}

export default App;
