import React, { useState } from 'react'
import { loginUser } from '../../Services/users.js'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState({email:'', password:''});
  const navigate = useNavigate();
  //const [token, setToken] = useState('');

  const handleChange = e => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      }
      const response = await loginUser(request)
      //setToken(response.token);
      localStorage.setItem('token', response.token);
      navigate('/');
    }catch(error){
      console.log(error);
    }
    setUser({
      email: '',
      password: ''
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input value={user.email} onChange={handleChange} name="email" type="text" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input value={user.password} onChange={handleChange} name="password" type="password" className="form-control" id="password" placeholder="Contraseña" />
          </div>
          <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  )
}

export default Login