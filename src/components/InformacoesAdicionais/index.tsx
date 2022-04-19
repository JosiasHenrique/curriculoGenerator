import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InformacoesAdicionais({ generateInfoAdd }) {
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);

    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function handleAddInfoAd(data) {
        generateInfoAdd(data.info)
        setOpen(true);
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Informações Adicionais</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    onSubmit={handleSubmit(handleAddInfoAd)}
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
                        {...register('info', { required: true })}
                        id="outlined-required"
                        label="Informações"
                        name="info"
                    />

                    <Button
                        disabled={open}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Salvar informações adicionais
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={7000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Informações adicionais salva!
                        </Alert>
                    </Snackbar>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}