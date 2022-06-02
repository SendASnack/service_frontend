import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import logo from '../img/signup-image.png';
import SignUpHeader from './Components/SignUpHeader/SignUpHeader';
import './SignUp.css';

const SignUp = () => {

    function handleRegister(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var user = document.getElementById("username");
        var password = document.getElementById("password");
        var repassword = document.getElementById("repassword");

        if (password.value==repassword.value){
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name: name.value, username: user.value, email: email.value, password: password.value })
            };
            fetch('http://localhost:8080/api/auth/register', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        }
        else
            alert("xau");

    }

    return (
        <>
        <div>
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <SignUpHeader />
            <form className='input-form'>
                <Input id="name" type="text" label="Name" value="name" />
                <Input id="username" type="text" label="UserName" value="UserName" />
                <Input id="email" type="email" label="Email" value="email" />
                <Input id="phone" type="phone" label="Phone No." value="phone" />
                <Input id="password" type="password" label="Password" value="password" />
                <Input id="repassword" type="password" label="Re-enter Password" value="confirmPassword" />
            </form>
            <div className='sign-up-button' onClick={handleRegister}>
                <Button type="submit" class="sign-up" buttonText="Sign Up"/>
            </div>
        </div>
        </>
    );
}

export default SignUp;