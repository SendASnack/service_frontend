import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import logo from '../img/signup-image.png';
import './Login.css';

const Login = () => {
    return (
        <>
        <div className='login'>
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <h2 className='login-header'>Login</h2>
            <form className='input-form'>
                <Input type="email" label="Email" value="email" />
                <Input type="password" label="Password" value="password" />
            </form>
            <div className='sign-up-button'>
                <Button type="submit" class="sign-up" buttonText="Login"/>
            </div>
        </div>
        </>
    );
}

export default Login;