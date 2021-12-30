import { TextField, Typography, Grid } from "@mui/material";
import React from "react";
import Card from "../Card";
import './passo4.css';

export default function Passo4(){
    return(
        <Card>
            <Typography color={'#5100ff'} variant="h3">
                Queremos saber mais sobre você
            </Typography>

            <Grid mt={4} container spacing={4}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Qual a sua altura?(m)" variant="filled"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Qual o seu peso?(kg)" variant="filled"/>
                </Grid>
            </Grid>
            
        </Card>
    );
}