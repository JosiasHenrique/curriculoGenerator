import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Objetivo({generateObjetivo}) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    async function handleAddObjetivo(data) {
        generateObjetivo(data.objetivo)
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
                <Typography>Objetivo</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    onSubmit={handleSubmit(handleAddObjetivo)}
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
                        {...register('objetivo', { required: true })}
                        id="outlined-required"
                        label="Objetivo*"
                        name="objetivo"
                    />
                    <Button
                        disabled={open}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Salvar objetivo
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={7000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Objetivo salvo!
                        </Alert>
                    </Snackbar>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}