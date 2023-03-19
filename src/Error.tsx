/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import  { useState } from 'react';
import React from "react";
import './styles/App.css';
import { settings } from './config/defaults'

type ErrorProps = {
    
}

const Error: React.FC<ErrorProps> = ( ) => {
    return(
        <div className='App-main' >
            <h1>Something went wrong</h1>
            {}
        </div>
    );
}

export default Error;