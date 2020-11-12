import React, {useState} from 'react'

function MovieReview({id, movie}) {
    const [rating, setRating] = useState(50);
    const [text, setText] = useState('');

    const handleRatingChange = (event) => {
        const value = event.target.value;

        if (value >= 0 && value <= 100) {
            setRating(value);
        }
    }

    const handleTextChange = (event) => {
        const value = event.target.value;

        if (value.length <=100) {
        setText(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form is going to be submitted', {rating, text});

        const data = {
            rating,
            text
        };
         
        const url = `/api/movies/${id}/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('success');
            setRating(50);
            setText('');
        })
    }

   

    return (
        <div>
            <h3>Reviews for {movie.movie.name}</h3>

            <form onSubmit={handleSubmit}>
                <label>Rating</label>
                <input name="rating" type="number" value={rating} onChange={handleRatingChange}/>

                <textarea name="text" value={text} onChange={handleTextChange} cols="30" rows="10" />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
    
}

export default MovieReview
