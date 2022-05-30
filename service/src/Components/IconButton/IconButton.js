import './IconButton.css';

const IconButton = (props) => {
    return (
        <button className={`icon-button ${props.class}`} type={props.type}><i className={props.icon}>X</i></button>
    );
}

export default IconButton;