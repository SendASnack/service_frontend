import './InputCard.css';

const InputCard = (props) => {
    return (
        <div className={`input-card ${props.class}`}>
            {props.children}
        </div>
    );
}

export default InputCard;