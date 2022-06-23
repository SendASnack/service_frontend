import './Summary.css';

const Summary = (props) => {
    return (
        <div className='summary' data-testid="summary">
            <div className='summary-total'>
                <span>Total</span>
                <p>{props.total} €</p>
            </div>
        </div>
    )
}

export default Summary;