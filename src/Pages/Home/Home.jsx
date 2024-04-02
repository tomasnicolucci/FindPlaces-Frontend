import React from 'react'
import Page from '../../components/Page/Page'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Page>
      <h1>¡Bienvenidos!</h1>
      <Link to="/Places">
        <button className='btn btn-primary'>Lugares</button>
      </Link>
    </Page>
  )
}

export default Home