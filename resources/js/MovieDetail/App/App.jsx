import React, {useState, useEffect} from 'react';
import {Route, Switch, useParams} from "react-router-dom";
import MovieReview from "./MovieReview";
import MovieDetail from "./MovieDetail";
import Register from "./Register";

export default function App() {
    let {id} = useParams();
    const [movie, setMovie] = useState(null);

    const loadMovie = async () => {
        const response = await fetch(`http://www.laravel-imdb.test/api/movies/${id}`);
        const data = await response.json();
        // console.log(data)
        setMovie(data)
        
    }

    useEffect(() => {
        loadMovie();
    }, [])

    if (movie === null) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>Register</h1>
            <Register />
        <Switch>
            <Route path="/movie/:id/review">
                <MovieReview id={id} movie={movie}/>
            </Route>
            <Route path="/movie/:id">
                <MovieDetail id={id} movie={movie}/>
            </Route>
        </Switch>
        </div>
    )
}