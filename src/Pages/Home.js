import axios from "axios";
import { useEffect, useState } from "react";

function MoviesList() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=c0a540d14454051cf74ee4debd0b604e"
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    });

    return (
        <div className="bg-dark text-light d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="text-primary">Welcome to Our Movie App!</h1>
                <p>
                    Here you can find the most popular movies in the world.
                    <br />
                    <span className="text-info">Click</span> on a Movie' Tap and Enjoy!
                </p>
                <img
                    src="https://media.baamboozle.com/uploads/images/37857/1606808876_268709"
                    alt="Poster"
                    className="w-50"
                />
            </div>
        </div>
    );
}

export default MoviesList;
