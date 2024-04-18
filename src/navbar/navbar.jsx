import React, { useState } from "react";
import './navbar.css';
import {RiMenuLine, RiCloseLine} from 'react-icons/ri';
import logo from '../assets/logo.png';

const Navbar=()=>{
    const [toggleMenu,setToggleMEnu] = useState(false);
    return(
        <div className="navbar-bg">
            <div className="navbar">
                <div className="navbar-links">
                    <div className="navbar-links-logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        
                    </div>
                    <div className="navbar-links-container">
                        <p>
                            <a href="/">
                                SERVICES
                            </a>
                        </p>
                        <p>
                            <a href="/">
                                ABOUT US
                            </a>
                        </p>
                        <p>
                            <a href="/">
                                CONTACT US
                            </a>
                        </p>
                        <p>
                            <a href="/">
                                CAREERS
                            </a>
                        </p>
                    </div>
                </div>
                <div className="navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                        color="#000"
                        size={27}
                        onClick = {()=> setToggleMEnu(false)}/>
                    ): (
                        <RiMenuLine
                        color="#000"
                        size={27}
                        onClick={()=> setToggleMEnu(true)}/>
                    )}
                    {toggleMenu && (
                       <div className="navbar-menu-container scale-up-center"> 
                       <div className="close-btn">
                                <RiCloseLine
                                    color="#000"
                                    size={45}
                                    onClick = {()=> setToggleMEnu(false)}
                                    />
                        </div>
                        <div className="navbar-menu-container-links">
                            <p>
                                <a href="/">HOME</a>
                            </p>
                            <p>
                                <a href="/">SERVICES</a>
                            </p>
                            <p>
                                <a href="/"> ABOUT US</a>
                            </p>
                            <p>
                                <a href="/">CONTACT US</a>
                            </p>
                            <p>
                                <a href="/">CAREERS</a>
                            </p>
                        </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Navbar;