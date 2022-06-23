import './ProductAnimation.css';

const ProductAnimation = (props) => {
    return (
        <div className='product-animation'>
            <p style={{marginBottom:"10px"}}>Added To Cart!</p>
            <p>{props.name}</p>
            <p>{props.price}€</p>
        </div>
    )
}

export default ProductAnimation;