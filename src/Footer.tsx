import { useEffect } from "react";
import  { useState } from 'react';
import React from "react";
import './styles/App.css';
import { settings } from './config/defaults'

function Footer({msg}: {msg: string}) {
    return(
        <div className='App-footer' >{msg}</div>
    );
}

export default Footer;