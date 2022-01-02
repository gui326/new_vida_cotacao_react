import React from "react";
import "./footer.css";
import { Button, Grid } from "@mui/material";

export default function Footer(props){
    return(
        <footer>
            <div className="footer--button">
                {props.step == 1 &&
                    <Grid container>
                        <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={10}>
                            <Button variant="contained" onClick={props.nextStep}>Continuar</Button>
                        </Grid>
                    </Grid>
                }
                {props.step > 1 &&
                    <Grid container>
                        <Grid item className="Mui--itemBack" xs={2}>
                            <svg role="role" onClick={props.backStep} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </Grid>
                        <Grid item xs={9}>
                            <Button variant="contained" onClick={props.nextStep}>Continuar</Button>
                        </Grid>
                    </Grid>
                } 
                
            </div>
        </footer>
    );
}