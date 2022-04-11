import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function DadosPessoais() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status, setStatus] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value);
    };

    return (
        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Dados Pessoais</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                        helperText="Informe seu nome completo"
                        {...register('name', { required: true })}
                        id="outlined-required"
                        label="Nome"
                        name="name"
                    />
                    <TextField
                        fullWidth
                        id="outlined-disabled"
                        label="Nacionalidade"
                    />
                    <TextField
                        {...register("categoriaId", { required: true })}
                        id="categoriaId"
                        select
                        label="Estado Civil"
                        value={status}
                        name="categoriaId"
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
                        id="outlined-password-input"
                        label="Data de Nascimento"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="date"
                    />
                    <TextField
                        id="outlined-number"
                        label="Telefone"
                        type="tel"
                    />
                    <TextField
                        fullWidth
                        id="outlined-number"
                        label="E-mail"
                        type="email"
                    />
                    <TextField
                        fullWidth
                        id="outlined-read-only-input"
                        label="Local de Nascimento"
                        helperText="Ex: São Paulo - SP"
                    />
                    <TextField
                        fullWidth
                        id="outlined-text"
                        label="Endereço"
                        type="text"
                    />
                    <div className="cnh">
                        <p>CNH</p>
                        <FormControlLabel control={<Checkbox />} label="A" />
                        <FormControlLabel control={<Checkbox />} label="B" />
                        <FormControlLabel control={<Checkbox />} label="C" />
                        <FormControlLabel control={<Checkbox />} label="D" />
                        <FormControlLabel control={<Checkbox />} label="E" />
                    </div>
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
            </AccordionDetails>
        </Accordion>
    )
}