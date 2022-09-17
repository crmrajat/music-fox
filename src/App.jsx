import { Container } from '@mui/material';
import { Dashboard, Loading } from './components';

function App() {
    return (
        <Container>
            <Loading />
            <Dashboard />
        </Container>
    );
}

export default App;
