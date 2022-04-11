import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ExperienciaProfissional() {
    const [open, setOpen] = useState(false);
    const [grau, setGrau] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrau(event.target.value);
    };

    return (
        <Accordion className="accordion">
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Experiência Profissional</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Inserir Expêriencia
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
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
                                    id="outlined-required"
                                    label="Curso"
                                    name="Cargo"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Empresa"
                                    name="Instituição"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Cidade"
                                    name="Instituição"
                                />

                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    id="outlined-required"
                                    label="Início"
                                    name="Instituição"
                                />
                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    id="outlined-required"
                                    label="Saída"
                                    helperText="Obs: Se estiver trabalhando, marque o Checkbox abaixo."
                                    name="Instituição"
                                />
                                <FormControlLabel sx={{ marginLeft: '10px' }} control={<Checkbox defaultChecked />} label="Emprego atual" />
                                <TextField
                                    fullWidth
                                    type="text"
                                    multiline
                                    rows={4}
                                    id="outlined-required"
                                    label="Atividades"
                                    helperText="Informe o seu papel na empresa."
                                    name="Instituição"
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
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Sair</Button>
                    </DialogActions>
                </Dialog>
            </AccordionDetails>
        </Accordion>
    )
}