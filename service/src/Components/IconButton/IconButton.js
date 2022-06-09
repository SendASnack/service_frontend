import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./IconButton.css";

const IconButton = (props) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate(props.path);
  };

  return (
    <button className={`icon-button ${props.class}`} type={props.type} onClick={handleRoute}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </button>
  );
};

export default IconButton;
