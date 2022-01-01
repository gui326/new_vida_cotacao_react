import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Card from '../Card';
import './passo2.css';
import { Slide } from '@mui/material';

export default function Passo2(){
    return(
        
        <Card>
            <Typography className="titlePatternOne" variant="h2" remetent="h1">
                Vamos te enviar uma cópia da cotação ;D
            </Typography>
            <Typography mt={4} color="#696969" variant="subtitle1">
                Não precisar se preocupar, não vamos divulgar nenhum dado, ok? :3
            </Typography>

            <TextField sx={{ mt: 4 }} fullWidth label="Qual seu nome?" name="nome" variant="filled"/>

            <Grid mt={1} container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth type="text" label="WhatsApp(DD)" name="celular" variant="filled"/>
                </Grid>
                <Grid mt={1} item xs={12} md={6}>
                    <TextField fullWidth type="email" label="E-mail" name="email" variant="filled"/>
                </Grid>
            </Grid>
        </Card>
        
    );
}