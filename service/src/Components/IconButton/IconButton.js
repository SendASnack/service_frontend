import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./IconButton.css";

const IconButton = (props) => {

  const handleRoute = () => {
    window.location.replace(props.path);
  };

  return (
    <button data-testid="icon-button" className={`icon-button ${props.class}`} type={props.type} onClick={handleRoute}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  );
};

export default IconButton;
