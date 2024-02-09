import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import StarsMeter from './../Components/StarMester';


function MovieDetails() {
    const movieId = useParams();
    console.log(movieId)
    const [moviesdet, setMoviesDet] = useState({})
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId.id}
        ?api_key=c0a540d14454051cf74ee4debd0b604e`)
            .then((res) => setMoviesDet(res.data))
            .catch((err) => console.log(err))
    }, [])

    const imageUrl = moviesdet.poster_path
        ? `https://image.tmdb.org/t/p/w500/${moviesdet.poster_path}`
        : `${process.env.PUBLIC_URL}/poster-notAvailable.jpg`;
    // console.log(moviesdet.poster_path)
    return (
        <Container className="movie-details-container bg-dark text-light p-4">
            <Row>
                <Col md={4} className="movie-image">
                    <div className="position-relative">
                        <img
                            src={imageUrl}
                            alt={moviesdet.original_title}
                            className="img-fluid movieimage"
                        />
                    </div>
                </Col>
                <Col md={8} className="movie-info">
                    <h2>{moviesdet.original_title}</h2>
                    <p><b>Release Date:</b> {moviesdet.release_date}</p>
                    <p><b>Rating:</b> <span id='vote-average'>
                        {moviesdet.vote_average !== undefined && moviesdet.vote_average.toFixed(1)}
                    </span><sup>/10</sup></p>
                    <p><b>Voting Count:</b>  {moviesdet.vote_count}</p>
                    <p><b>Language:</b>  {moviesdet.original_language}</p>
                    <StarsMeter voteAverage={moviesdet.vote_average} />
                    <p className='my-2'><b>Runtime:</b> {moviesdet.runtime} Minutes</p>
                    <p style={{ lineHeight: '1.8' }}><b>Overview:</b> {moviesdet.overview}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default MovieDetails;
