import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../Card";

export default function Passo7(){
    return(
        <Card>
            <Typography color="#5100ff" variant="h3">
                Escolha para quem vai ser o beneficiário
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <div>
                        Minha família
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        Quero escolher 
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}