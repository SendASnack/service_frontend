import './RedirectButton.css';
import { useNavigate } from "react-router-dom";



const RedirectButton = (props) => {

    const navigate = useNavigate();
  
    const handleRoute = () =>{ 
      navigate(props.path);
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