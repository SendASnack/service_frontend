import './App.css';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFoundPage from './Views/NotFoundPage/NotFoundPage';
import Orders from './Views/Orders/Orders';
import OrderItem from './Views/OrderItem/OrderItem';
import Cart from './Views/Cart/Cart';
import Checkout from './Views/Checkout/Checkout';
import Rider from './Views/Rider/Rider';

function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
          <Route path='/' exact element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products' element={<Orders />}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/orders' element={<Rider />}/>
            <Route path='/order-item' element={<OrderItem />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route component={NotFoundPage} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;