import { Grid, Typography, TextField, Select, MenuItem } from "@mui/material";
import React from "react";
import Card from "../Card";

export default function Passo5(){
    return(
        <Card>
            <Typography color="#5100ff" variant="h3">
                Agora fala para gente mais sobre você
            </Typography>
            <Grid mt={4} container spacing={4}>
                <Grid item xs={6}>
                    <Typography color="#898989" variant="h6">
                        CPF
                    </Typography>
                    <TextField fullWidth variant="standard"/>
                </Grid>
                <Grid item xs={6}>
                    <Typography color="#898989" variant="h6">
                        RG
                    </Typography>
                    <TextField fullWidth variant="standard"/>
                </Grid>
            </Grid>
            <Grid mt={4} container spacing={4}>
                <Grid item xs={6}>
                    <Typography color="#898989" variant="h6">
                        Estado Civil
                    </Typography>
                    <Select fullWidth   
                        variant="standard"
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Estado Civil"
                    >
                        <MenuItem value={10}>Solteiro</MenuItem>
                        <MenuItem value={20}>Casado</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <Typography color="#898989" variant="h6">
                        Renda Mensal
                    </Typography>
                    <TextField fullWidth variant="standard"/>
                </Grid>
            </Grid>
        </Card>
    );
}