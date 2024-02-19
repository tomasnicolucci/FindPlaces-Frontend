import React from 'react'
import Page from '../../components/Page/Page.jsx'
import LoginForm from '../../components/Forms/Login.jsx'
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Page>
      <div>
        <LoginForm />
      </div>
      olvidaste la Contraseña? <br/>

      <Link to="/users/new">
          <button className='btn btn-success'>Registrarse</button>
      </Link>
    </Page>
  )
}

export default Login