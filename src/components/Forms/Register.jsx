import React, { useState } from 'react'
import { postUser } from '../../Services/users.js'
const Register = () => {

  const [user, setUser] = useState({name: '', email:'', password:''});

  const handleChange = e => {
    setUser({
      ...user, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async () => {
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    try{
      await postUser(request)
    }catch(error){
      console.log(error);
    }
    setUser({
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <>
    <h2>Crear cuenta</h2>
    <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input value={user.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input value={user.email} onChange={handleChange} name="email" type="text" className="form-control" id="description" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input value={user.password} onChange={handleChange} name="password" type="text" className="form-control" id="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
      </>
  )
}

export default Register