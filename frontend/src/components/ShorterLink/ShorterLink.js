import React from 'react';
import { Typography, Stack , Link } from '@mui/material';

const ShorterLink = () => {
    return (
        <Stack>
            <Typography variant="h6" gutterBottom component="div" mt={5}>
                Your abbreviated link:
            </Typography>
            <Link href="https://4pda.to/">Link</Link>
        </Stack>
    )
}

export default ShorterLink;
