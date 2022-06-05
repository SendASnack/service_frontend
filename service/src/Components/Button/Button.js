import './Button.css';

const Button = (props) => {

    let id = "button";
    if (props.buttonText !== undefined)
        id = props.type + "-" + id;

    return (
        <button data-testid={id} className={`button ${props.class}`} type={props.type}>{props.buttonText}</button>
    );
}

export default Button;