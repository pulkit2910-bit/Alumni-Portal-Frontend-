import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import Student from './pages/Student/Student';
import ViewProfile from './pages/View profile/ViewProfile';
import Layout from "./components/Layout"
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext/AuthContext';
import Admin from './pages/Admin/Admin';
import AlumniSearch from './components/Admin/AlumniSearch/AlumniSearch';
import AddEvents from './components/Admin/AddEvents/AddEvents';
import RequireAuth from './features/Auth/RequireAuth';
import UnAuth from './components/UnAuth';
import StudentSearch from './components/Admin/StudentSearch/StudentSearch';

function App() {
  const { user } = useContext(AuthContext);

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register /> } />
            <Route path="unauth" element={<UnAuth /> } />

            <Route element={<RequireAuth allowedRole={["alumni"]} />} >
              <Route path="alumni" element={user ? <Home /> : <Navigate to="/" /> } />
              <Route path="/" element={user ? <Navigate to="/alumni" /> : <Login /> } />
              <Route path="alumni/profile" element={user ? <Profile /> : <Navigate to="/" /> } />
              <Route path="alumni/search" element={user ? <Search /> : <Navigate to="/" /> } />
              <Route path="/alumni/view-profile/:userID" element={user ? <ViewProfile/> : <Navigate to="/" /> } />
            </Route>
            
            <Route element={<RequireAuth allowedRole={["admin"]} />} >
              <Route path="admin" element={user ? <Admin/> : <Navigate to="/" /> } />
              <Route path="/" element={user ? <Navigate to="/admin" /> : <Login /> } />
              <Route path="admin/alumni-search" element={<AlumniSearch/>} />
              <Route path="admin/student-search" element={<StudentSearch/>} />
              <Route path="admin/add-events" element={user ? <AddEvents/> : <Navigate to="/" /> } />
              <Route path="/admin/view-profile/:userID" element={user ? <ViewProfile/> : <Navigate to="/" /> } />
            </Route>

            <Route element={<RequireAuth allowedRole={["current_student", "outgoing_student"]} />} >
              <Route path='student' element={user ? <Student /> : <Navigate to="/" />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
