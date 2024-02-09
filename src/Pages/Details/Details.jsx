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
    <div>Details</div>
    {place ? (
      <div>
        {place.name}
      </div>
    ) : (
      <h2>Cargando...</h2>
    )}
    </>
  )
}

export default Details