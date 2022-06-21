import './BurgerCard.css';
import { useState, useEffect } from "react";
import RedirectButton from '../RedirectButton/RedirectButton';
import Modal from '../Modal/Modal';
import ModalContent from '../Modal/Components/ModalContent';

const BurgerCard = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modal, setModal] = useState(false);

    const ModalHandler = () => {
        setModal(!modal);
    }

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
    }, []);


    return (
        <div className='burger-card' data-testid="burger-card">
            <div className='card-image'>
                <img src={props.image}></img>
            </div>
            <div className='card-content'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className='card-buttons'>
            { isLoggedIn ?
            <RedirectButton path={props.path} class="order-outline" buttonText="Order now"/> : 
            <div className='not-logged-in-button' onClick={ModalHandler}>
              {modal && <Modal backdropClass="backdrop-darker">
                  <ModalContent />
                  </Modal>}
            </div> 
                }
            </div>
        </div>
    );
}

export default BurgerCard;