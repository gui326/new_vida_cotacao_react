import { Grid, Slider, Typography } from "@mui/material";
import React from "react";
import Card from '../Card';
import CardIncluso from '../CardIncluso';
import './passo3.css';

export default function Passo3(){
    const inclusos = [
        {
            imagem: '/assets/img/iconeCarro.svg',
            texto_principal: 'texto principal',
            valor: 1900,
            resumo: 'teste',
            texto_interno: [
                {
                    titulo: 'teste',
                    texto: 'teste',
                }
            ]
        },
        {
            imagem: '/assets/img/iconeFlor.svg',
            texto_principal: 'texto principal',
            valor: 1900,
            resumo: 'teste',
            texto_interno: [
                {
                    titulo: 'teste',
                    texto: 'teste',
                }
            ]
        }
    ];

    return(
        <Card>
            <Typography color="#5100ff" variant="h2" remetent="h1">
                Qual o valor de cotação que você deseja?
            </Typography>

            <Slider sx={{ mt: '7%' }} defaultValue={170000} aria-label="Default" step={10000} min={40000} max={300000} valueLabelDisplay="auto"/>
            
            <Typography mb={3} mt={15} color="#5100ff" variant="h4" remetent="h1">
                O que está incluso no seu plano
            </Typography>

            {inclusos.map((incluso) => 
                <CardIncluso key={incluso} item={incluso}/>
            )
            }
        </Card>
    );
}