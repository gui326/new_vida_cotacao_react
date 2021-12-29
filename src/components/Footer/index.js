import React from "react";
import "./footer.css";
import { Button } from "@mui/material";

export default function Footer(props){
    return(
        <footer>
            <div className="footer--button">
                {props.step > 1 &&
                    <svg role="role" onClick={props.backStep} width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                }
                <Button className={props.step > 1 && 'buttonWithBack'} variant="contained" onClick={props.nextStep}>Continuar</Button>
            </div>
        </footer>
    );
}