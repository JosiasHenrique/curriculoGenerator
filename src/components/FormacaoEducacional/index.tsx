import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Formacao {
    grau: string,
    curso: string,
    instituicao: string,
    inicio: string,
    conclusao: string
}

export default function FormacaoEducacional({generateFormacoes}) {
    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false);
    const [grau, setGrau] = useState('');
    const { register, reset, handleSubmit } = useForm();
    const [formacoes, setFormacoes] = useState<Formacao[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickGenerate = () => {
        generateFormacoes(formacoes)
        setOpenSnack(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrau(event.target.value);
    };

    const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };


    const handleRemoveFormacao = (index) => {
        const values = [...formacoes];
        values.splice(index, 1);
        setFormacoes(values);
    }

    async function handleAddFormacaoEducacional(data) {
        setFormacoes([...formacoes, data]);
        reset();
        setOpen(false);
    }

    return (
        <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Formação Educacional</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {formacoes.map((x, index) => (
                    <Card className="cardFormacao" key={index}>
                       
                            <p>{x.grau} | {x.instituicao} | {x.inicio} - {x.conclusao}
                            <IconButton onClick={() => handleRemoveFormacao(index)} aria-label="remove">
                                <DeleteForeverIcon />
                            </IconButton>
                            </p>
                       
                    </Card>
                ))}
                <Button variant="outlined" sx={{marginRight: '5px'}} onClick={handleClickOpen}>
                    Nova formação
                </Button>
                <Button disabled={formacoes.length? false : true} variant="contained"  onClick={handleClickGenerate}>
                    Salvar
                </Button>
                <Snackbar
                        open={openSnack}
                        autoHideDuration={7000}
                        onClose={handleCloseSnack}>
                        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
                            Formações salvas
                        </Alert>
                    </Snackbar>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Inserir formação"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Box
                                onSubmit={handleSubmit(handleAddFormacaoEducacional)}
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
                                    {...register('grau', { required: true })}
                                    name="grau"
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
                                    {...register('curso', { required: true })}
                                    name="curso"
                                />
                                <TextField
                                    fullWidth
                                    id="outlined-required"
                                    label="Instituição"
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
                                    label="Conclusão"
                                    {...register('conclusao', { required: true })}
                                    name="conclusao"
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