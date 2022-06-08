import './ShadowText.css';

const ShadowText = (props) => {
    return(
        <div className='shadow-text' data-testid="shadow-text"><h1>{props.text}</h1></div>
    )
}

export default ShadowText;