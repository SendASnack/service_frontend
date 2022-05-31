import './App.css';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <Switch>
          <Route path='/' exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/sign-up' component={SignUp}/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;