import './App.css';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
          <Route path='/' exact element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;