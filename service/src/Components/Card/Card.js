import './Card.css';

const Card = (props) => {
    return (
        <div className='card' data-testid="card">
            <h3 className={props.titleClass}>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default Card;