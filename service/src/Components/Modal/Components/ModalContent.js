import Button from "../../Button/Button";
import './ModalContent.css';


const ModalContent = () => {
    return (
        <div>
            <div className="modal-content">
                <p>Not Logged In!</p>
                <p><a href="/login" className="login-link">Login</a> first!</p>
            </div>
            <div className="close-modal-button">
            <Button class="outline-black" buttonText="Back" />
            </div>
        </div>
    )
}

export default ModalContent;