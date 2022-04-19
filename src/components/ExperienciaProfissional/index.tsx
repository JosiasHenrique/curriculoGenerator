import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


interface ExperienciaProfissionalI {
    cargo: string,
    empresa: string,
    cidade: string,
    inicio: string,
    saida: string,
    empregoAtual: boolean,
}

export default function ExperienciaProfissional({generateExperiencias}) {
    const { register, reset, handleSubmit } = useForm();
    const [check, setChek] = useState(false);
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [experiencias, setExperiencias] = useState<ExperienciaProfissionalI[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickGenerate = () => {
        generateExperiencias(experiencias)
        setOpenSnack(true);
    };

    async function handleAddExperienciaProfissional(data) {
        setExperiencias([...experiencias, data]);
        reset();
        setOpen(false);
    }

    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    const handleRemoveExperiencia = (index) => {
        const values = [...experiencias];
        values.splice(index, 1);
        setExperiencias(values);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheck = () => {
        
        if(check === false) {
            setChek(true)
        } else {
            setChek(false)
        }
    };

    return (
        <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Experiência Profissional</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {experiencias.map((x, index) => (
                    <Card className="cardFormacao" key={index}>

                        <p>{x.cargo} em {x.empresa} | {x.inicio.split('-').reverse().join('/')} - {x.empregoAtual? 'Emprego atual': x.saida.split('-').reverse().join('/')}
                            <IconButton onClick={() => handleRemoveExperiencia(index)} aria-label="remove">
                                <DeleteForeverIcon />
                            </IconButton>
                        </p>

                    </Card>
                ))}
                <Button variant="outlined" sx={{marginRight: '5px'}} onClick={handleClickOpen}>
                    Nova Expêriencia
                </Button>
                <Button disabled={experiencias.length? false : true} variant="contained"  onClick={handleClickGenerate}>
                    Salvar
                </Button>
                <Snackbar
                        open={openSnack}
                        autoHideDuration={7000}
                        onClose={handleCloseSnack}>
                        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                            Experiências salvas
                        </Alert>
                    </Snackbar>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Experiência profissional"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Box
                                onSubmit={handleSubmit(handleAddExperienciaProfissional)}
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
                                    label="Cargo"
                                    {...register('cargo', { required: true })}
                                    name="cargo"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Empresa"
                                    {...register('empresa', { required: true })}
                                    name="empresa"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Cidade"
                                    {...register('cidade', { required: true })}
                                    name="cidade"
                                />
                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    id="outlined-required"
                                    label="Início"
                                    {...register('inicio', { required: true })}
                                    name="inicio"
                                />
                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    id="outlined-required"
                                    label="Saída"
                                    {...register('saida')}
                                    helperText="Obs: Se estiver trabalhando, marque o Checkbox abaixo."
                                    name="saida"
                                />
                                <FormControlLabel sx={{ marginLeft: '10px' }} control={<Checkbox value={check} {...register('empregoAtual')} name="empregoAtual" onChange={handleCheck} />} label="Emprego atual" />
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