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

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={user ? <Profile /> : <Navigate to="/" /> } />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/view-profile" element={<ViewProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
