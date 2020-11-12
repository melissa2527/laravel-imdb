import React from 'react';
export default function MovieDetail({id, movie}) {
    if(movie){
        return (
            <div>
            <h1>{movie.movie.name}</h1>
            {/* {movie.map(item => {
                <h1>Genres: {item.genres.name}</h1>
            })} */}
            
            </div>
        )
    }

    return (
        <h1>Loading...</h1>
    )
}

