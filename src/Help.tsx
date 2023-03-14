import React from 'react';
import './styles/App.css';
import { settings } from './config/defaults'

const Help: React.FC = () => {
    return(
        <div className='App-main' data-testid='help'>
            <h1>Help</h1>
        </div>
    );
}

export default Help;