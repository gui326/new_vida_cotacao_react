import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Card from '../Card';
import './passo2.css';

export default function Passo2(){
    return(
        <Card>
            <Typography color="#5100ff" variant="h2" remetent="h1">
                Vamos te enviar uma cópia da cotação ;D
            </Typography>
            <Typography mt={4} color="#696969" variant="subtitle1">
                Não precisar se preocupar, não vamos divulgar nenhum dado, ok? :3
            </Typography>


            <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h6">
                Qual seu nome?
            </Typography>
            <TextField fullWidth type="text" name="nome" variant="standard"/>

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h6">
                        WhatsApp(DD)
                    </Typography>
                    <TextField fullWidth type="text" name="celular" variant="standard"/>
                </Grid>
                <Grid item xs={6}>
                    <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h6">
                        E-mail
                    </Typography>
                    <TextField fullWidth type="email" name="email" variant="standard"/>
                </Grid>
            </Grid>
        </Card>
    );
}