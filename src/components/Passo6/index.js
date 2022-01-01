import { Select, TextField, Typography, Grid, MenuItem, InputLabel, FormControl } from "@mui/material";
import Card from "../Card";

export default function Passo6(){
    return(
        <Card>
            <Typography className="titlePatternOne" variant="h3">
                Ah... Falta seu endereço
            </Typography>

            <TextField fullWidth sx={{ mt: 4 }} label="CEP" variant="filled"/>

            <Grid mt={0} container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField fullWidth label="Rua" variant="filled"/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextField fullWidth label="Número" variant="filled"/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <TextField fullWidth label="Complemento" variant="filled"/>
                </Grid>
            </Grid>

            <Grid mt={0} container spacing={2}>
                <Grid item md={4} xs={12}>
                    <TextField fullWidth label="Bairro" variant="filled"/>
                </Grid>
                <Grid item md={4} xs={12}>
                    <TextField fullWidth label="Cidade" variant="filled"/>
                </Grid>
                <Grid item md={4} xs={12}>
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