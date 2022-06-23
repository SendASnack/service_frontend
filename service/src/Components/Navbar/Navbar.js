import Button from "../Button/Button";
import { useState, useEffect } from "react";
import logo from "./send-logo.png";
import "./Navbar.css";
import IconButton from "../IconButton/IconButton";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/Components/ModalContent";

const Navbar = (props) => {
  const [transparent, setTransparent] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);

  const ModalHandler = () => {
      setModal(!modal);
  }

  const loggedIn = localStorage.getItem("token");

  // On scrool, make bg white
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      // Get scroll position
      if (window.pageYOffset > 30) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    });
  }, []);

  useEffect(() => {
      if (localStorage.getItem("token") === null) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
  }, []);

  return (
    <div data-testid="Navbar" className={transparent ? "navbar" : "navbar-white"}>
      <div className="navbar-logo">
        <img src={logo} alt="SendASnack Logo"></img>
      </div>
      <div className="link-items">
        <ul>
          <li>
            <Link className="link-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-item" to="/products">
              Menu
            </Link>
          </li>
          <li>
          { isLoggedIn ?
            <Link className="link-item" to="/orders">
            Orders
          </Link> : 

            <p className="link-item" onClick={ModalHandler}>
                Orders
              {modal && <Modal>
                  <ModalContent />
                  </Modal>}
            </p> 
                }
          </li>
          <li>
              { isLoggedIn ?
            <Link className="link-item" to="/profile">
              Profile
            </Link> : 

            <p className="link-item" onClick={ModalHandler}>
                Profile
              {modal && <Modal>
                  <ModalContent />
                  </Modal>}
            </p> 
                }
          </li>
        </ul>
      </div>
      <div className="checkout-items">
        <ul>
          <li
            className={
              transparent
                ? `checkout-items-number ${props.textClass}`
                : "checkout-items-number-red"
            }
          >
            +1-650-547-9864
          </li>
          <li>
            {isLoggedIn ? (
              <Link to="/">
              <Button class="logout" buttonText="logout" onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedIn(false);
                  }} />
            </Link>
            ) : (
              <Link to="/login">
                <Button class="logout" buttonText="login" />
              </Link>
            )}
          </li>
          <li>
            <IconButton path="/cart"></IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
