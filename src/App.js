import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import ViewProfile from './pages/View profile/ViewProfile';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext/AuthContext';
import Admin from './pages/Admin/Admin';
import AlumniSearch from './components/Admin/AlumniSearch/AlumniSearch';
import AddEvents from './components/Admin/AddEvents/AddEvents';
import RequireAuth from './features/Auth/RequireAuth';

function App() {
  const { user } = useContext(AuthContext);
  let role;
  if (user) role = user.role;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register /> } />

          {role === "alumni" && <Route element={<RequireAuth allowedRole={"alumni"} />} >
            <Route exact path="/alumni" element={user ? <Home /> : <Navigate to="/" /> } />
            <Route exact path="/login" element={user ? <Navigate to="/alumni" /> : <Login /> } />
            <Route exact path="/alumni/profile" element={user ? <Profile /> : <Navigate to="/" /> } />
            <Route exact path="/alumni/search" element={user ? <Search /> : <Navigate to="/" /> } />
            <Route exact path="/view-profile/:userID" element={user ? <ViewProfile/> : <Navigate to="/" /> } />
          </Route>}
          
          {role === "admin" && <Route element={<RequireAuth allowedRole={"admin"} />} >
            <Route exact path="/admin" element={user ? <Admin/> : <Navigate to="/" /> } />
            <Route exact path="/login" element={user ? <Navigate to="/admin" /> : <Login /> } />
            <Route exact path="/admin/alumni-search" element={<AlumniSearch/>} />
            <Route exact path="/admin/add-events" element={<AddEvents/>} />
            <Route exact path="/view-profile/:userID" element={user ? <ViewProfile/> : <Navigate to="/" /> } />
          </Route>}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
