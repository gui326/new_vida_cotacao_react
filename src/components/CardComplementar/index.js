import React from "react";
import { Grid, Switch } from '@mui/material';
import './cardcomplementar.css';

export default function CardComplementar(props){
    return(
        <div className="cardComplementar">
            <Grid container spacing={1}>
                <Grid className="areaImagem" item xs={3}>
                    <img src={props.item.imagem} alt="Icone"/>
                </Grid>
                <Grid item xs={6}>
                    <h4>{props.item.texto_principal} <span class="card--valor">{props.item.valor}</span></h4>
                    <p>{props.item.resumo}</p>
                </Grid>
                <Grid item xs={3} className="card--switch">
                    <Switch inputProps={{ 'aria-label': 'Switch demo' }} />
                </Grid>
            </Grid>
        </div>
    );
}