import { TextField, Typography, RadioGroup, FormControlLabel, Radio, Autocomplete } from "@mui/material";
import React from "react";
import Card from '../Card';
import './passo1.css';


export default function Passo1(props){
    const profissoes = [
        {id: 1, label: 'Açougueiro'},
        {id: 2, label: 'Administrador de Empresa'},
    ];

    return(
        <Card>
            <Typography className="titlePatternOne" color="#5100ff" variant="h3" remetent="h1">
                Olá, vamos juntos encontrar o melhor seguro de vida para vc? =D
            </Typography>

            <TextField {...props.teste1} sx={{ mt: 3 }} InputLabelProps={{ shrink: true }} type="date" fullWidth label="Quando você nasceu?" name="nascimento" variant="filled"/>

            <Autocomplete
            {...props.teste2}
            disablePortal
            fullWidth
            sx={{ mt: 3 }}
            options={profissoes}
            renderInput={(params) => <TextField {...params} variant="filled" label="Qual a sua profissão" />}
            />

            <Typography mt={3} mb={1} color="#696969" variant="subtitle1" remetent="h1">
                Qual o seu gênero?
            </Typography>
            <RadioGroup row aria-label="genero" name="row-radio-buttons-group">
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
            </RadioGroup>
            
        </Card>
    );
}