import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Qualificacoes() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Accordion className="accordion">
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Resumo de Qualificações</Typography>
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
                        helperText="Resumo sobre suas competências e seus diferenciais relevantes
                        para a vaga. (Dica: está etapa não deve ter mais de dois parágrafos.)"
                        {...register('name', { required: true })}
                        id="outlined-required"
                        multiline
                        rows={4}
                        label="Resumo de Qualificações"
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