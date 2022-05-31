import './CardInfo.css';

const CardInfo = (props) => {
    return (
        <div className='card-info'>
            <h2 className='card-info-name'>Profile</h2>
            {props.children}
        </div>
    );
}

export default CardInfo;