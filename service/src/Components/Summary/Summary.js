import './Summary.css';

const Summary = (props) => {
    return (
        <div className='summary'>
            <span className='summary-title'>Order Summary</span>
            <div className='summary-quantity'>
                <p>2x Burger Magic</p>
                <p>10.99 €</p>
            </div>
            <div className='summary-total'>
                <span>Total</span>
                <p>{props.total} €</p>
            </div>
        </div>
    )
}

export default Summary;