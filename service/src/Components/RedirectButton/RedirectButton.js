import './RedirectButton.css';

const RedirectButton = (props) => {
  
    const handleRoute = () =>{ 
        window.location.replace(props.path);
    }

    return (
            <button
                className={`button ${props.class}`}
                type={props.type}
                onClick={handleRoute}
            >
                {props.buttonText}
            </button>
    )
}

export default RedirectButton;