import './HeaderImage.css';

const HeaderImage = (props) => {
    return (
        <div className='header-image'>
            <img src={props.image}></img>
        </div>
    )
}

export default HeaderImage;