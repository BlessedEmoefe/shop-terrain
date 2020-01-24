import React from 'react';
import "./Header.styles.scss"
import {Link} from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const Header = () =>{
    console.log("this is it")
    return(
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link  className="option" to="/shop" >
                    SHOP
                </Link>
                <Link  className="option" to="/shop" >
                    CONTACT
                </Link>
                
            </div>
            
        </div>
    )
}
export default Header;