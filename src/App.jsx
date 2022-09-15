import { Container } from '@mui/material';
import { Dashboard } from './components';

function App() {
    return (
        <Container fixed className="debug">
            <Dashboard />
        </Container>
    );
}

export default App;
