import { Grid, Slider, Typography } from "@mui/material";
import React from "react";
import Card from '../Card';
import CardComplementar from "../CardComplementar";
import CardIncluso from '../CardIncluso';
import './passo3.css';

export default function Passo3(){
    const inclusos = [
        {
            imagem: '/assets/img/iconeCarro.svg',
            texto_principal: 'Morte Acidental',
            valor: 170000,
            resumo: 'Seus beneficiários receberão o valor de indenização caso você venha a falecer por causa de algum acidente. Por exemplo: acidente de trânsito, acidente de trabalho ou violência urbana.',
            texto_interno: [
                {
                    titulo: 'O que cobre:',
                    texto: 'Mortes causadas por acidentes, suicídio ou tentativa de suicídio. Alguns exemplos: Acidentes de trânsito, violência urbana, acidentes de trabalho, riscos ambientais como afogamentos, quedas e muito mais.',
                },
                {
                    titulo: 'O que não cobre:',
                    texto: 'Não cobre mortes causadas por doenças (Covid, por exemplo) e qualquer outro tipo de morte que não seja decorrente de acidente.',
                },
                {
                    titulo: 'Franquias e multas:',
                    texto: 'Não há.',
                },
                {
                    titulo: 'Carência:',
                    texto: '2 anos para suicídio ou tentativa de suicídio.',
                },
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

    const complementares = [
        {
            imagem: '/assets/img/iconeCarro.svg',
            texto_principal: 'Morte Acidental',
            valor: 170000,
            resumo: 'Seus beneficiários receberão o valor de indenização caso você venha a falecer por causa de algum acidente. Por exemplo: acidente de trânsito, acidente de trabalho ou violência urbana.',
            texto_interno: [
                {
                    titulo: 'O que cobre:',
                    texto: 'Mortes causadas por acidentes, suicídio ou tentativa de suicídio. Alguns exemplos: Acidentes de trânsito, violência urbana, acidentes de trabalho, riscos ambientais como afogamentos, quedas e muito mais.',
                },
                {
                    titulo: 'O que não cobre:',
                    texto: 'Não cobre mortes causadas por doenças (Covid, por exemplo) e qualquer outro tipo de morte que não seja decorrente de acidente.',
                },
                {
                    titulo: 'Franquias e multas:',
                    texto: 'Não há.',
                },
                {
                    titulo: 'Carência:',
                    texto: '2 anos para suicídio ou tentativa de suicídio.',
                },
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
            )}

            <Typography mb={3} mt={15} color="#5100ff" variant="h4" remetent="h1">
                Deseja complementar o seu plano?
            </Typography>

            {complementares.map((complementar) =>
                <CardComplementar key={complementar} item={complementar}/>
            )}

            
        </Card>
    );
}