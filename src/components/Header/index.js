import React from 'react';
import './header.css';
import LinearProgress from '@mui/material/LinearProgress';

export default function Header(props){
    return(
        <header>
            <div className="header--logo">
                <a href="/">
                    <p style={{color: 'white'}}>Vida Cotação</p>
                </a>
            </div>  
            <LinearProgress variant="determinate" value={props.step} />
        </header>
    );
}

