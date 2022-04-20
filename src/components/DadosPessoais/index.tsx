import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const cats = [
    'A',
    'B',
    'C',
    'D',
    'E'
];

export default function DadosPessoais({ generateDadosPessoais }) {
    const [categoriaCnh, setCategoriaCnh] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const [status, setStatus] = useState('');

    const handleChangeCat = (event: SelectChangeEvent<typeof categoriaCnh>) => {
        const {
            target: { value },
        } = event;
        setCategoriaCnh(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function handleAddDadosPessoais(data) {
        generateDadosPessoais(data)
        setOpen(true);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Dados Pessoais</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    onSubmit={handleSubmit(handleAddDadosPessoais)}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        {...register('nome', { required: true })}
                        id="outlined-required"
                        label="Nome completo*"
                        name="nome"
                    />
                    <TextField
                        {...register("estado", { required: true })}
                        id="estado"
                        select
                        label="Estado Civil*"
                        value={status}
                        name="estado"
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}>
                        <option value={'Solteiro'}>Solteiro</option>
                        <option value={'Casado'}>Casado</option>
                        <option value={'Divorciado'}>Divorciado</option>
                        <option value={'Solteira'}>Solteira</option>
                        <option value={'Casada'}>Casada</option>
                        <option value={'Divorciada'}>Divorciada</option>
                    </TextField>
                    <TextField
                        {...register("dataNasc", { required: true })}
                        name="dataNasc"
                        label="Data de Nascimento*"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="date"
                    />
                    <TextField
                        id="outlined-number"
                        {...register("telefone", { required: true })}
                        name="telefone"
                        label="Telefone*"
                        type="tel"
                    />
                    <TextField
                        fullWidth
                        {...register("email", { required: true })}
                        name="email"
                        id="outlined-number"
                        label="E-mail*"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        {...register("localNasc", { required: true })}
                        name="localNasc"
                        id="outlined-read-only-input"
                        label="Cidade*"
                        helperText="Ex: São Paulo - SP"
                    />
                    <TextField
                        fullWidth
                        {...register("endereco", { required: true })}
                        name="endereco"
                        id="outlined-text"
                        label="Endereço"
                        type="text"
                    />
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">CNH</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={categoriaCnh}
                            {...register("cnh")}
                            name="cnh"
                            onChange={handleChangeCat}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {cats.map((cat) => (
                                <MenuItem key={cat} value={cat}>
                                    <Checkbox checked={categoriaCnh.indexOf(cat) > -1} />
                                    <ListItemText primary={cat} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        disabled={open}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Salvar dados pessoais
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={7000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Dados Pessoais salvo!
                        </Alert>
                    </Snackbar>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}