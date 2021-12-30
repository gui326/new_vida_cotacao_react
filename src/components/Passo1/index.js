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
            <Typography mt={4} className="titlePatternOne" color="#5100ff" variant="h3" remetent="h1">
                Vamo escolher o melhor seguro para você ;)
            </Typography>

            <TextField {...props.teste1} sx={{ mt: 3 }} InputLabelProps={{ shrink: true }} type="date" fullWidth label="Quando você nasceu?" name="nascimento" variant="filled"/>

            <Autocomplete
            {...props.teste2}
            disablePortal
            fullWidth
            sx={{ mt: 5 }}
            options={profissoes}
            renderInput={(params) => <TextField {...params} variant="filled" label="Qual a sua profissão" />}
            />

            <Typography mt={5} mb={1} color="#696969" variant="h6" remetent="h1">
                Qual a sua gênero?
            </Typography>
            <RadioGroup row aria-label="genero" name="row-radio-buttons-group">
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
            </RadioGroup>
            
        </Card>
    );
}