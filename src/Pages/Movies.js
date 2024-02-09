import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Card, Row, Col} from 'react-bootstrap';



function Movies() {

    const [myMovies, setmyMovies] = useState ([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0a540d14454051cf74ee4debd0b604e")
        .then((res) => setmyMovies(res.data.results))
        .catch((err) => console.log(err))
    },[])

    return(
        <div className="text-center justify-content-center my-3 container">
            <h1>Our Movie List</h1>
            <Row className='justify-content-around p-3'>
                {myMovies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={5} lg={3} xl={4}>
                        <Card className='movie-card' 
                            style={{ marginBottom: '20px', position: 'relative' }}>
                            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                                <Card.Img
                                    variant="top"
                                    src={movie.poster_path ? 
                                        `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 
                                        `${process.env.PUBLIC_URL}/poster-notAvailable.jpg`}
                                    alt={movie.title}
                                />
                            </Link>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>                    
        </div>
    )
}
export default Movies;