import "./Modal.css";

function Modal(props) {

    function hideModal(){
        props.changeModal();
    }

    return (
        <>  
            <div className="backdrop" onClick={hideModal}></div>
            <div className="modal" data-testid="modal">
                {props.children}
            </div>
        </>
    )
}

export default Modal;