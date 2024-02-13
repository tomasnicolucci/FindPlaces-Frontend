import React from 'react'
import Page from '../../components/Page/Page.jsx'

const Login = () => {
  return (
    <Page>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
    </Page>
  )
}

export default Login