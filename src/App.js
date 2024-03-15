import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from './components/utils/ProtectedRoute';
import Home from './Pages/Home/Home';
import Places from './Pages/Places/Places';
import Details from './Pages/Details/Details';
import PlaceForm from './Pages/Places/NewPlace';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Favorites from './Pages/Places/Favorites';

export default function App(){

  const token = localStorage.getItem('token');
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/Places" element={<Places />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/users/new" element={<Register />} />
        <Route exact path="/place/:id" element={<Details />} />
        <Route element={<ProtectedRoute isAuthenticated={token} redirectPath={'/login'}/>}>
          <Route exact path="/Places/new" element={<PlaceForm />} />
          <Route exact path="/users/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>  
  );
}
