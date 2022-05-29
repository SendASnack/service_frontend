import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Navbar from '../../Components/Navbar/Navbar';
import logo from '../img/signup-image.png';
import SignUpHeader from './Components/SignUpHeader/SignUpHeader';
import './SignUp.css';

const SignUp = () => {
    return (
        <>
        <Navbar />
        <div>
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <SignUpHeader />
            <form className='input-form'>
                <Input type="text" label="Name" value="name" />
                <Input type="email" label="Email" value="email" />
                <Input type="phone" label="Phone No." value="phone" />
                <Input type="password" label="Password" value="password" />
                <Input type="password" label="Re-enter Password" value="confirmPassword" />
            </form>
            <div className='sign-up-button'>
                <Button type="submit" class="sign-up" buttonText="Sign Up"/>
            </div>
        </div>
        </>
    );
}

export default SignUp;