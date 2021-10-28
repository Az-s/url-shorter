import React, { useState } from 'react';
import {TextField , Grid} from '@mui/material';
import { useDispatch } from "react-redux";
import { sendUrl } from '../../store/actions/actions';
import ShorterButton from '../Button/ShorterButton';


const InputForm = () => {
    const dispatch = useDispatch();

    const [inputUrl, setInputUrl] = useState({
        url: ''
    });

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setInputUrl(prev => {
            return { ...prev, [name]: value };
        });
    };

    
    const submitFormHandler = async (e) => {
        e.preventDefault();

        try {
            await dispatch(sendUrl({ ...inputUrl }));
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                autoComplete="off"
                mt={3}
                onSubmit={submitFormHandler}
            >
                <Grid item >
                    <TextField
                        label="Enter URL"
                        variant="outlined"
                        name='url'
                        value={inputUrl.url}
                        onChange={inputChangeHandler}
                        sx={{ minWidth: '700px' }}
                    />
                </Grid>
                <Grid>
                    <ShorterButton />
                </Grid>
            </Grid>
        </>
    )
}

export default InputForm;
