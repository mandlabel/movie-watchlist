import React, {useState} from 'react'
  
export const Add = () => {
    const [query,setQuery] = useState(" ");
    const [results, setResults] = useState([]);
    const API_KEY='';
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=ea096c9b33cc56d01c83a19b2d4debc9&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        ).then((res) => res.json())
        .then(data => {
            if (!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    };

    return (
        <div className="add-content">
        <div className="searchbar">
            <input type="text" placeholder="Search for a movie" value={query} onChange={onChange}/>
        </div>
            {results.length > 0 && (
                <ul className="results">
                {results.map((movie) => (<li>{movie.title}</li>))}
                </ul>
            )}
        </div>

    )
}