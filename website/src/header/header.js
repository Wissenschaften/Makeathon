import React from "react";
import {Link} from "react-router-dom";

import './header.css';

const Header = () => {
    
    return (
         <div className="header">
            <a href="/" className="logo" style={{marginLeft: '3.2%'}}>WhereToGo</a>
            <div className="header-right">
                <Link to="/">Heatmap</Link>
                <Link to="/recommendations">Recommendations</Link>
            </div>
        </div> 
    )
}

export default Header