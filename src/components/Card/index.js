import React from "react";
import './card.css';

export default function Card(props){
    return(
        <div className="Card">
            {props.children}
        </div>
    );
}