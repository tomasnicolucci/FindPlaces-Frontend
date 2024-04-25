import React, { useContext } from 'react'
import Page from '../../components/Page/Page'
import Search from '../../components/Search/Search'
import { Link } from "react-router-dom"
import { PlacesContext } from '../../Context/PlacesContext'

const Home = () => {
  const { places } = useContext(PlacesContext);
    
  return (
    <Page>
      <h1>¡Bienvenidos!</h1>
      <Link to="/Places">
        <button className='btn btn-primary'>Lugares</button>
      </Link> <br/>
      <Search places={places}/>
    </Page>
  )
}

export default Home