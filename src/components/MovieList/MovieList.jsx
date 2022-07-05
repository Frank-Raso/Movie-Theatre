import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const details = (id) => {
        history.push(`/details/${id}`)
    }
    const toAdd = () => {
        history.push(`/AddMovie`)
    }

    return (
        <main>
            <h1>Franks Theatre!</h1>
            {/* <Button  variant="contained" color="primary" onClick={toAdd}>Add Movie Here</Button> */}
            <h2>Now Showing :</h2>
            <section className="movies">

                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <div className='catalog'>
                                <h3 className='catalogTitle' >{movie.title}</h3>
                                <img onClick={() => details(movie.id)} src={movie.poster} alt={movie.title} />
                            </div>
                        </div>
                    );
                })}
            </section>

        </main>

    );
}
export default MovieList;