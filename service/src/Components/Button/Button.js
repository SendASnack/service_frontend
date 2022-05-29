import './Button.css';

const Button = (props) => {
    return (
        <button className={`button ${props.class}`} type={props.type}>{props.buttonText}</button>
    );
}

export default Button;