import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const Homepage = () => {
    return (
        <Box display={'flex'} my={2}>
            <TextField label="Song Name" />
            <TextField label="Artist Name" />
            <Button>Search</Button>
        </Box>
    );
};

export default Homepage;
