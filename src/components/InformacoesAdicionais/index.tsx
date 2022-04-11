import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function InformacoesAdicionais() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };

    return (
        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Informações Adicionais</Typography>
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
                        helperText="Dica: Tenho disponibilidade para início imediato, disponibilidade para viagens a trabalho, etc..."
                        {...register('name', { required: true })}
                        id="outlined-required"
                        label="Informações"
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