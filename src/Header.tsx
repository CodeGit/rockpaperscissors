import React from 'react';
import './styles/App.css';
import { settings } from './config/defaults'

const Header: React.FC = () => {
    return(
        <div className='App-header' data-testid='header'>
            {settings.appName}
        </div>
    );
}

export default Header;