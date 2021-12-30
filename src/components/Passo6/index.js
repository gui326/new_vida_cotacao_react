import { Select, TextField, Typography, Grid, MenuItem, InputLabel, FormControl } from "@mui/material";
import Card from "../Card";

export default function Passo6(){
    return(
        <Card>
            <Typography color="#5100ff" variant="h3">
                Ah... Falta seu endereço
            </Typography>

            <Typography mt={4} color="#898989" variant="h6">
                Vamos começar pelo seu CEP
            </Typography>

            <TextField label="CEP" variant="filled"/>

            <Grid mt={4} container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth label="Rua" variant="filled"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth label="Número" variant="filled"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField fullWidth label="Complemento" variant="filled"/>
                </Grid>
            </Grid>

            <Grid mt={4} container spacing={2}>
                <Grid item xs={4}>
                    <TextField fullWidth label="Bairro" variant="filled"/>
                </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth label="Cidade" variant="filled"/>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth variant="filled">
                        <InputLabel>Estado</InputLabel>
                        <Select fullWidth label="Estado" variant="filled">
                            <MenuItem value={'SP'}>São Paulo</MenuItem>
                            <MenuItem value={'MG'}>Minas Gerais</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Card>
    );
}