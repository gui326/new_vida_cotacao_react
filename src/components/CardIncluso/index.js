import React from 'react';
import { Grid } from "@mui/material";
import './cardincluso.css';


export default function CardIncluso(props){
    return(
        <div style={{ marginBottom: '2%' }} className="cardIncluso">
            <Grid container spacing={1}>
                <Grid className="areaImagem" item xs={3}>
                    <img src={props.item.imagem} alt="Icone"/>
                </Grid>
                <Grid item xs={8}>
                    <h4>{props.item.texto_principal}<span>{props.item.valor}</span></h4>
                    <p>{props.item.resumo}</p>
                </Grid>
                <Grid item xs={1}>
                    \/
                </Grid>
            </Grid>
        </div>
    );
}