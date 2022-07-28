import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Details.css';

function Details() {

    const history = useHistory();
    const dispatch = useDispatch();
    const eachMovie = useSelector(store => store.eachMovie);
    let { id } = useParams();

    useEffect(() => {
        console.log(id);
        dispatch({ type: 'MOVIE_CONT', payload: id });
    }, []);

    const back = () => {
        console.log('BackButton')
        history.push('/');
    }
    return (
        <div className='detail_page' >

            {/* {0 === 0 ? */}
            {eachMovie.length === 0 ?
                <h1 className='spinner'></h1> :

                <div className='card' >
                    <Button variant="contained" color="primary" onClick={back}>Back To Movies</Button>
                    <h3>{eachMovie[0].title}</h3>
                    <img src={eachMovie[0].poster} />
                    <p>{eachMovie[0].description}</p>
                    <iframe width="560" height="315" src={eachMovie[0].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h2>Genres</h2>
                    {eachMovie.map((movie, i) => (
                        <p key={i}>{movie.name}</p>
                    ))}</div>}
        </div>
    );
}
export default Details;
