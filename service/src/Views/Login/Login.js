import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import logo from '../img/signup-image.png';
import './Login.css';

const Login = () => {

    function handleLogin(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email.value, password: password.value })
        };
        fetch('http://localhost:8080/api/auth/login', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <>
        <div className='login'>
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <h2 className='login-header'>Login</h2>
            <form className='input-form'>
                <Input id="email" type="email" label="Email" value="email" />
                <Input id="password" type="password" label="Password" value="password" />
            </form>
            <div className='sign-up-button' onClick={handleLogin}>
                <Button type="submit" class="sign-up" buttonText="Login"/>
            </div>
        </div>
        </>
    );
}

export default Login;