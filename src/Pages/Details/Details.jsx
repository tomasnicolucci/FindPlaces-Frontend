import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPlaceById } from '../../Services/places.js'
import Page from '../../components/Page/Page.jsx'

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
    <Page>
      <div>Details</div>
      {place ? (
        <div>
          {place.name}
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
    </Page>
  )
}

export default Details