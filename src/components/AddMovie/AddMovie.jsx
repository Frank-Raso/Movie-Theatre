import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    const back = () => {
        console.log('BackButton')
        history.push('/');
    }
    return (
        <div>
            <h1>AddMovie Page:</h1>
            <Button variant="contained" color="primary" onClick={back}>Back To Movies</Button>
        </div>
    );
}
export default MovieList;