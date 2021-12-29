import React from 'react';
import './header.css';
import LinearProgress from '@mui/material/LinearProgress';

export default function Header(props){
    return(
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="/assets/img/logo.png" alt="Logo da Líbero Seguros"/>
                </a>
            </div>  
            <LinearProgress variant="determinate" value={props.step} />
        </header>
    );
}

