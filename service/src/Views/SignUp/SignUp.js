import { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import logo from '../img/signup-image.png';
import SignUpHeader from './Components/SignUpHeader/SignUpHeader';
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';

const SignUp = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const notify = (message) => toast(message);

    const checkEmail = () => {
        const testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        return (testEmail.test(email));
    }

    const checkUsername = () =>{
        //from 3 to 20 in length no _ or . at the start/end/consecutive only allows for A-Z Numbers and _ .
        const testUserName=/^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i;
        return (testUserName.test(username));
    }

    const passwordStrength = () => {
        const testPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/i;
        return (testPw.test(password));
    };

    const checkPasswords = () => {
        return (password === confirmPassword);
    };

    function handleRegister(){

        if (!username || !checkUsername() || username === "null") {
            notify("Please provide a valid username!");
            return;
        }

        if(!email || !checkEmail() || email === "null") {
            notify("Please provide a valid email!");
            return;
        }

        if(!password || !passwordStrength() || !checkPasswords() || password === "null") {
            notify("Please provide an password, it must have 4 characters and at least one number and one letter!");
            return;
        }

        axios.post('http://localhost:8080/api/auth/register', {
            name: name,
            username: username,
            email: email,
            phoneNumber: phone,
            password: password
        })
            .then((response) => {
                notify(response.data.message);
                setTimeout(() => {
                    window.location.replace("/login");
                }, 1000);
            }, (error) => {
                notify(JSON.parse(error.request.response)['message']);
                console.log(error);
            });

    };

    return (
        <>
        <div>
            <div className="img-wrapper">
                <img src={logo} alt='SendASnack logo'></img>
            </div>
            <SignUpHeader />
            <form className='input-form'>
                <Input id="name" type="text" label="Name" on_value_changed={setName} />
                <Input id="username" type="text" label="Username" on_value_changed={setUsername} />
                <Input id="email" type="email" label="Email" on_value_changed={setEmail} />
                <Input id="phone" type="phone" label="Phone No." on_value_changed={setPhone} />
                <Input id="password" type="password" label="Password" on_value_changed={setPassword} />
                <Input id="repassword" type="password" label="Re-enter Password" on_value_changed={setConfirmPassword} />
            </form>
            <div className='sign-up-button' onClick={handleRegister}>
                <Button class="sign-up" type="submit" buttonText="Sign Up" />
            </div>
        </div>
        </>
    );
}

export default SignUp;