import './ImageButton.css';

const ImageButton = (props) => {
    return (
        <div className='image-button-wrapper' data-testid="image-button">
            <button className='image-button'><img src={props.image}></img></button>
            <span className='image-button-text'>{props.text}</span>
        </div>
    );
}

export default ImageButton;