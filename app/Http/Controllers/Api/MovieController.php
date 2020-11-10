<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Movie;

class MovieController extends Controller
{
    public function topRated() {
        $movies = Movie::query()
        ->where('votes_nr', '>', 10000)
        ->orderBy('rating', 'desc')
        ->limit(10)
        ->get();
       
        return $movies;
}

    public function movieOfTheWeek() {
        $movie_id = 1431045;
        // $movie_id = 2071491;
        // $move_id = 1628841;

        $movie = Movie::findOrFail($movie_id);

        $genres = $movie->genres;

        $people = $movie->people()
        ->limit(3)
        ->where('movie_person.position_id', 254)
        ->orderBy('movie_person.priority', 'desc')
        ->get();

        $poster = $movie->posters()
        ->where('is_main', 1)
        ->first();

        
        // return [
        //     'movie'=> $movie,
        //     'genres' => $genres,
        //     'people' => $people
        // ];
        // same as below

        return compact('movie', 'genres', 'people', 'poster');
    }

    public function detail($id) {
    
            $movie = Movie::findOrFail($id);
    
            $genres = $movie->genres;
    
            $people = $movie->people()
            ->limit(3)
            ->where('movie_person.position_id', 254)
            ->orderBy('movie_person.priority', 'desc')
            ->get();
    
            $poster = $movie->posters()
            ->where('is_main', 1)
            ->first();

            return compact('movie', 'genres', 'people', 'poster');
    }

    public function review($id, Request $request) {

        // $this->validate($request)

        $movie = Movie::findOrFail($id);

        $movie->reviews()->create($request->all());

        return [
            'status' => 'success'
        ];
    }
}
