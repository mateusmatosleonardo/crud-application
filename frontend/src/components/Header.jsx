import React from "react";
import '../styles/Header.css';

const Header = (props) =>{
    return(
        <header className="header">
            <div className="logo">
                Logo aqui
            </div>
            <div className="router">
                <h1>
                <i className="fa fa-home"></i> {props.title}
                </h1>
                <p>{props.subtitle}</p>
            </div>
        </header>
    )
}

export default Header;