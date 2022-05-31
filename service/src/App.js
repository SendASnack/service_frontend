import './App.css';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Home from './Views/Home/Home';
import Profile from './Views/Profile/Profile';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
          <Switch>
          <Route path='/' exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;