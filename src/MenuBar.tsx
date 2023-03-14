import React from "react";
import { Link } from 'react-router-dom';
import './styles/App.css';
import { settings } from './config/defaults'

const MenuBar: React.FC = () => {
    return( 
        <nav>
            <ul>
                <li><Link to="/game">Play</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    );
}

export default MenuBar;