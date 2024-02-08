import React from 'react'
import Page from '../../components/Page/Page'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Page>
      <div>Home</div>
      <Link to="/Places">
        <a className='btn btn-primary'>Lugares</a>
      </Link>
    </Page>
  )
}

export default Home