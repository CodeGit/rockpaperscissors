import { useEffect } from "react";
import  { useState } from 'react';
import React from "react";
import './styles/App.css';
import { settings } from './config/defaults'

const Footer: React.FC = () => {
    return(
        <div className='App-footer' data-testid='footer'>
            {settings.footer}
        </div>
    );
}

export default Footer;