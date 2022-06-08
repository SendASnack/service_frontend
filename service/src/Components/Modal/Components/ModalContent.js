import Button from "../../Button/Button";
import './ModalContent.css';


const ModalContent = () => {
    return (
        <div>
            <div className="modal-content">
                <p>Not Logged In!</p>
                <a href="/login" className="login-link">Login</a> first!
            </div>
            <div className="close-modal-button">
            <Button class="outline-black" buttonText="Back" />
            </div>
        </div>
    )
}

export default ModalContent;