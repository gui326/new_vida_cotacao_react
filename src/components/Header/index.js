import React from 'react';
import './header.css';

export default function Header(){
    return(
        <header>
            <div className="header--logo">
                <a href="/">
                    <img src="/assets/img/logo.png" alt="Logo da Líbero Seguros"/>
                </a>
            </div>
        </header>
    );
}

