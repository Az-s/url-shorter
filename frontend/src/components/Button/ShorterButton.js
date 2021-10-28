import React from 'react';
import Button from '@mui/material/Button';

const ShorterButton = () => {
    return (
        <>
            <Button variant="outlined" sx={{ maxWidth: '100px' , marginTop: '1rem'}}>Shorten!</Button>
        </>
    )
}

export default ShorterButton;
