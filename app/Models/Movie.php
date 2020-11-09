<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Genre;
use App\Models\Person;
use App\Models\Poster;

class Movie extends Model
{
    use HasFactory;

    public function genres() 
    {
        return $this->belongsToMany(Genre::class);
    }

    public function people()
    {
        return $this->belongsToMany(Person::class);
    }

    public function posters()
    {
        return $this->hasMany(Poster::class);
    }
}
