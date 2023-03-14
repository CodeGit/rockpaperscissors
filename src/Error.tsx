import { useEffect } from "react";
import  { useState } from 'react';
import React from "react";
import './styles/App.css';
import { settings } from './config/defaults'

type ErrProps = {
    message: string;
}

const Error: React.FC<ErrProps> = ({message}) => {
    return(
        <div className='App-main' >{message}</div>
    );
}

export default Error;