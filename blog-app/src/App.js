import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/guest/home/Home';
import Login from './pages/guest/login/Login';
import Register from './pages/guest/register/Register';
import UserHome from './pages/user/home/UserHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/user/home" element={<UserHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
