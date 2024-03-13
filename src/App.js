import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Places from './Pages/Places/Places';
import Details from './Pages/Details/Details';
import PlaceForm from './Pages/Places/NewPlace';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Favorites from './Pages/Places/Favorites';

export default function App(){

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/Places" element={<Places />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/users/new" element={<Register />} />
        <Route exact path="/place/:id" element={<Details />} />
        <Route exact path="/Places/new" element={<PlaceForm />} />
        <Route exact path="/users/favorites" element={<Favorites />} />
      </Routes>
    </Router>  
  );
}
