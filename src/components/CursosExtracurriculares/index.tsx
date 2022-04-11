import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CursosExtracurriculares() {
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
                <Typography>Cursos Extracurriculares</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Inserir cursos
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
                                    name="curso"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Instituição"
                                    helperText="Nome da instituição ou escola."
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
                                    label="Conclusão"
                                    name="Instituição"
                                />
                                  <TextField
                                    fullWidth
                                   
                                    type="text"
                                    id="outlined-required"
                                    label="Carga horária"
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