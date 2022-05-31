import './InfoData.css';

const InfoData = (props) => {
    return (
        <div className={`info-data ${props.class}`}>
            <span className='info-data-header'>{props.title}</span>
            <p className='info-data-content'>{props.content}</p>
        </div>
    );
}

export default InfoData;