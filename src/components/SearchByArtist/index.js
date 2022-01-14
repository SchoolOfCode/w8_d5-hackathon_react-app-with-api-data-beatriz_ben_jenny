import React from 'react'

function SearchByArtist({handleInput, artistInput, handleClick}) {
    return (
        <div>
            <input type="text" value={artistInput} onChange={(e) => handleInput(e.target.value)} placeholder="Search artist" />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default SearchByArtist
