import './Header.css';

const Header = (props) => {
    return (
        <div className='order-item-header'>
            {props.children}
        </div>
    )
}

export default Header;