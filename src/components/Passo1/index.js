import { TextField, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";
import Card from '../Card';
import './passo1.css';

export default function Passo1(){
    return(
        <Card>
            <Typography color="#5100ff" variant="h2" remetent="h1">
                Vamo escolher o melhor seguro para você ;)
            </Typography>
            <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h1">
                Quando você nasceu?
            </Typography>
            <TextField fullWidth type="date" name="nascimento" variant="standard"/>

            <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h1">
                Qual a sua profissão?
            </Typography>
            <TextField fullWidth type="text" name="profissao" variant="standard"/>

            <Typography mt={6} mb={1} color="#696969" variant="h6" remetent="h1">
                Qual a sua gênero?
            </Typography>
            <RadioGroup row aria-label="genero" name="row-radio-buttons-group">
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
            </RadioGroup>
            
        </Card>
    );
}