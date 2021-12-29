import { TextField, Typography, Grid } from "@mui/material";
import React from "react";
import Card from "../Card";

export default function Passo4(){
    return(
        <Card>
            <Typography color={'#5100ff'} variant="h3">
                Queremos saber mais sobre você
            </Typography>

            <Grid mt={4} container spacing={4}>
                <Grid item xs={6}>
                    <Typography color={'#898989'} variant="h6">
                        Qual a sua altura?(m)
                    </Typography>
                    <TextField fullWidth variant="standard"/>
                </Grid>
                <Grid item xs={6}>
                    <Typography color={'#898989'} variant="h6">
                        Qual o seu peso?(kg)
                    </Typography>
                    <TextField fullWidth variant="standard"/>
                </Grid>
            </Grid>
            
        </Card>
    );
}