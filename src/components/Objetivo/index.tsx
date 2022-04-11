import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Objetivo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('');

    return (
        <Accordion className="accordion">
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Objetivo</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        helperText="
                  Seu objetivo de carreira deve ser descrito em uma linha,
                  abrangendo apenas a posição ou área de interesse.
                  Evite mencionar várias posições ou campos no mesmo
                  currículo que não estejam relacionados à vaga.
                  (Dica: Auxiliar Administrativo)"
                        {...register('name', { required: true })}
                        id="outlined-required"
                        label="Objetivo"
                        name="name"
                    />
                    <Button
                        className="myButton"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Salvar
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}