import './CartCardContent.css';

const CartCardContent = (props) => {
    return(
        <div className='cart-card-content'>
            {props.children}
        </div>
    )
}

export default CartCardContent;