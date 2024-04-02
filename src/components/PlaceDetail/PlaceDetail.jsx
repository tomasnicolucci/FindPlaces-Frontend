import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlaceById } from '../../Services/places.js'

const Details = () => {
  const [place, setPlace] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getPlaceById(id)
    .then(placeData => {
      setPlace(placeData);
    })
    .catch(error => {
      console.log(error);
    });
  }, [id]);
  return (
    <>
      {place ? (
        <body>
          <h1>{place.name}</h1>
          <p>{place.description}</p>
          <p>{place.direction}</p>
          <p>{place.dates}</p>
          <p>Tipo de entrada: {place.ticket}</p>
        </body>
      ) : (
        <h2>Cargando...</h2>
      )}
    </>
  )
}

export default Details