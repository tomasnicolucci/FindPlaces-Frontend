import React, { useContext, useEffect, useState } from 'react'
import './Places.css';
import Place from '../../components/Places/Place.jsx'
import { /*addFavorite, addVisited,*/ getAllFavorites, getAllVisited } from '../../Services/users.js'
import { PlacesContext } from '../../Context/PlacesContext.jsx'
import Page from '../../components/Page/Page.jsx'
import { Link } from 'react-router-dom'

const Places = () => {
  const { places } = useContext(PlacesContext);
  const [favorites, setFavorites] = useState([]);
  const [visited, setVisited] = useState([]);
  // const [efecto, setEfecto] = useState(false);
  const [update, setUpdate] = useState(false);
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favs = await getAllFavorites(request);
        console.log('Favoritos devueltos:', favs);
        setFavorites(favs);
        setUpdate(true);
      } catch (error) {
        console.error('Error al obtener favoritos:', error);
        setFavorites([]);
      }
    };

    const fetchVisited = async () => {
      try {
        const vstd = await getAllVisited(request);
        setVisited(vstd)
      } catch (error) {
        setVisited([]);
      }
    };

    fetchFavorites();
    fetchVisited();
  }, [update]);

  // const favOnClick = async (id) =>{
  //   handleButtonClick();
  //   if(false){
  //     //removeFavorite(id)
  //   }else{
  //     try{
  //       await addFavorite(id, request);
  //       setUpdate(true);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }    
  // }

  // const visitedOnClick = async (id) => {
  //   handleButtonClick();
  //   try{
  //     await addVisited(id, request);
  //     setUpdate(true);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // const handleButtonClick = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 1000);
  // }

  return (
    <Page>
      <h1>Lugares</h1>
      <Link to="/Places/new">
        <button className="btn btn-primary btn-custom">Agregar lugar</button>
      </Link>
      <Link to="/users/favorites">
        <button className="btn btn-primary btn-custom">Favoritos</button>
      </Link>
      <Link to="/users/visited">
        <button className="btn btn-primary btn-custom">Visitados</button>
      </Link>
      <div className='row row-custom' style={{ marginTop: '20px', marginLeft: '20px' }}>
        {places !== null ? (
          places.map((p) => {
            const esFavorito = favorites.some(f => f._id === p._id);
            const esVisitado = visited.some(v => v._id === p._id);
            // console.log(`Lugar: ${p.name}, Favorito con esFavorito: ${esFavorito}`);
            return <Place place={p} favorito={esFavorito} visitado={esVisitado} key={p._id} />;
          })
        )
        :
        ('No hay lugares para mostrar')}
      </div>
    </Page>
  )
}

export default Places