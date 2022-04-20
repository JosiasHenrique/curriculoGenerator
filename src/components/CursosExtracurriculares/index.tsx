import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface CursoExtra {
    curso: string,
    instituicao: string,
    inicio: string,
    conclusao: string,
    cargahoraria: string
}

export default function CursosExtracurriculares({ generateCursosEx }) {
    const { register, reset, handleSubmit } = useForm();
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [cursos, setCursos] = useState<CursoExtra[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    async function handleAddCursoEx(data) {
        console.log(data)
        setCursos([...cursos, data]);
        reset();
        setOpen(false);
    }

    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    const handleClickGenerate = () => {
        generateCursosEx(cursos)
        setOpenSnack(true);
    };

    const handleRemoveCurso = (index) => {
        const values = [...cursos];
        values.splice(index, 1);
        setCursos(values);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Cursos Extracurriculares</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {cursos.map((x, index) => (
                    <Card className="cardFormacao" key={index}>

                        <p>{x.curso} em {x.instituicao} | {x.cargahoraria}
                            <IconButton onClick={() => handleRemoveCurso(index)} aria-label="remove">
                                <DeleteForeverIcon />
                            </IconButton>
                        </p>

                    </Card>
                ))}
                <Button variant="outlined" sx={{ marginRight: '5px' }} onClick={handleClickOpen}>
                    Novo curso
                </Button>
                <Button disabled={cursos.length ? false : true} variant="contained" onClick={handleClickGenerate}>
                    Salvar
                </Button>
                <Snackbar
                    open={openSnack}
                    autoHideDuration={7000}
                    onClose={handleCloseSnack}>
                    <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                        Cursos salvos
                    </Alert>
                </Snackbar>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Cursos Extracurriculares"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Box
                                onSubmit={handleSubmit(handleAddCursoEx)}
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
                                    label="Curso*"
                                    {...register('curso', { required: true })}
                                    name="curso"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Instituição*"
                                    helperText="Nome da instituição ou escola."
                                    {...register('instituicao', { required: true })}
                                    name="instituicao"
                                />

                                <TextField
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type="date"
                                    id="outlined-required"
                                    label="Início*"
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
                                    helperText="ou previsão de conclusão"
                                    label="Conclusão*"
                                    {...register('conclusao', { required: true })}
                                    name="conclusao"
                                />
                                <TextField
                                    fullWidth
                                    type="number"
                                    id="outlined-required"
                                    label="Carga horária"
                                    {...register('cargahoraria')}
                                    name="cargahoraria"
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