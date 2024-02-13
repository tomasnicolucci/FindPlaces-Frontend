import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Places from './Pages/Places/Places';
import Details from './Pages/Details/Details';
import PlaceForm from './Pages/Places/PlaceForm';
import Login from './Pages/Login/Login';

export default function App(){
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/Places" element={<Places></Places>}></Route>
        <Route exact path="/place/:id" element={<Details></Details>}></Route>
        <Route exact path="/Places/new" element={<PlaceForm></PlaceForm>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
      </Routes>  
    </Router>  
  );
}
