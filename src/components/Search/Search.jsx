import React, { useState } from 'react'

const Search = ({ places }) => {

    const [searchInput, setSearchInput] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState("");

    const handleChange = (value) => {
        setSearchInput(value);
        const fltrdPlaces = places.filter((place) => {
            return (
                value &&
                place &&
                place.name.value &&
                place.name.value.toLowerCase().includes(value)
            )
        })
        setFilteredPlaces(fltrdPlaces);
    };

    return (
        places ? 
        <>
            <input type="text" placeholder="Busca un lugar" value={searchInput} onChange={(e) => handleChange(e.target.value)} className='searchInput'/>
            <div>
            
                {
                (searchInput.length > 0) ?
                    filteredPlaces.map((place) => {
                        return place
                    })
                : <><p>No se ha encontrado</p></>
                }
            </div></>
        :
        <></>
    )
}

export default Search