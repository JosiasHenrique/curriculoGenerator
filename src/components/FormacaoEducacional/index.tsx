import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormacaoEducacional() {
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
                <Typography>Formação Educacional</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Inserir formação
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
                                    id="categoriaId"
                                    select
                                    label="Grau de formação"
                                    value={grau}
                                    name="categoriaId"
                                    onChange={handleChange}
                                    SelectProps={{
                                        native: true,
                                    }}>
                                    <option value={'Ensino Fundamental'}>Ensino Fundamental</option>
                                    <option value={'Ensino Médio'}>Ensino Médio</option>
                                    <option value={'Graduação'}>Graduação</option>
                                    <option value={'Pós-Graduação'}>Pós-Graduação</option>
                                    <option value={'Técnico'}>Técnico</option>
                                    <option value={'Especialização'}>Especialização</option>
                                    <option value={'MBA'}>MBA</option>
                                    <option value={'Mestrado'}>Mestrado</option>
                                    <option value={'Doutorado'}>Doutorado</option>
                                    <option value={'Pós-Doutorado'}>Pós-Doutorado</option>
                                </TextField>
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