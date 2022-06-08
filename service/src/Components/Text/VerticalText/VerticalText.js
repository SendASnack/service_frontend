import './VerticalText.css';

const VerticalText = (props) => {
    return (
        <h1 className={`vertical-text ${props.class}`} data-testid="vertical-text">{props.text}</h1>
    );
}

export default VerticalText;