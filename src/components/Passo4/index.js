import { TextField, Typography, Grid } from "@mui/material";
import React from "react";
import Card from "../Card";
import './passo4.css';

export default function Passo4(){
    return(
        <Card>
            <Typography className="titlePatternOne" variant="h3">
                Queremos saber mais sobre você
            </Typography>

            <Grid mt={0} container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField fullWidth label="Qual a sua altura?(m)" variant="filled"/>
                </Grid>
                <Grid item mt={1} md={6} xs={12}>
                    <TextField fullWidth label="Qual o seu peso?(kg)" variant="filled"/>
                </Grid>
            </Grid>
            
        </Card>
    );
}