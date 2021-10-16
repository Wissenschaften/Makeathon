import React from "react";
import {Link} from "react-router-dom";

import './header.css';

const Header = () => {
    
    return (
         <div class="header">
            <a href="/" class="logo" style={{marginLeft: '3.2%'}}>AIvengers</a>
            <div class="header-right">
                <Link to="/">Home</Link>
                <Link to="/heatmap">Density Map</Link>
                <Link to="/resources">Resources</Link>
            </div>
        </div> 
    )
}

export default Header