import { useState } from 'react';
import './RedirectButton.css';

const RedirectButton = (props) => {

    const [array, setArray] = useState(null);
  
    const handleRoute = () =>{ 
        window.location.replace(props.path);
        setArray(props.array)
        const array = props.array;
    }

    return (
            <button
                data-testid="redirect-button"
                className={`button ${props.class}`}
                type={props.type}
                product={array}
                onClick={handleRoute}
            >
                {props.buttonText}
            </button>
    )
}

export default RedirectButton;