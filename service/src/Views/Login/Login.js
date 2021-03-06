import { useState } from "react";
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import logo from '../img/signup-image.png';
import {toast} from "react-toastify";
import axios from "axios";
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState(null);
    localStorage.setItem('products', '[]');

    const notify = (message) => toast(message);

    const redirectToSignUp = () => {
        setTimeout(() => window.location.replace("/sign-up"), 1500);
      }

    function handleLogin(){
        if (!email || !password){
            notify("Please fill all fields");
            return;
        }

        axios.post('http://20.77.90.223:8081/api/auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                notify(response.data.message);
                localStorage.setItem('token', response.data.token);
                setTimeout(() => window.location.replace("/"), 2000);
            }, (error) => {
                notify(JSON.parse(error.request.response)['message']);
            });
    }

    return (
        <>
        <div className='login' data-testid="login">
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <h2 className='login-header'>Login</h2>
            <form className='input-form'>
                <Input id="email" type="email" label="Email" value="email" on_value_changed={setEmail} />
                <Input id="password" type="password" label="Password" value="password" on_value_changed={setPassword} />
            </form>
            <div className="sign-up-option">
                <p>Don't have an account? <a onClick={redirectToSignUp}>Sign up</a>!</p>
            </div>
            <div className='sign-up-button' onClick={handleLogin}>
                <Button type="submit" class="sign-up" buttonText="Login"/>
            </div>
        </div>
        </>
    );
}

export default Login;