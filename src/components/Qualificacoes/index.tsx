import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function Qualificacoes({generateResumo}) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    async function handleAddQualificacoes(data) {
        generateResumo(data.resumo)
        setOpen(true);
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Resumo de Qualificações</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    onSubmit={handleSubmit(handleAddQualificacoes)}
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
                        {...register('resumo', { required: true })}
                        id="outlined-required"
                        multiline
                        rows={4}
                        label="Resumo de Qualificações"
                        name="resumo"
                    />
                    <Button
                        disabled={open}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Salvar resumo de qualificações
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={7000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Resumo de qualificações salvo!
                        </Alert>
                    </Snackbar>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}