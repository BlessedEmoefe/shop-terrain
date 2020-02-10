import React from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "../../firebase/Firebase.utils";

const Header = ({ currentUser }) => {
  console.log("this is it");
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
