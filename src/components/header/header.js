import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className="headerblock">
            <h3 className="headertitle">
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="headerlinks">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;