import React from "react";
import "./footer.css";
import { Button } from "@mui/material";

export default function Footer(props){
    return(
        <footer>
            <div className="footer--button">
                <Button variant="contained" onClick={props.nextStep}>Continuar</Button>
            </div>
        </footer>
    );
}