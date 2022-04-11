import { Button, Card, CardContent, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DadosPessoais from "./components/DadosPessoais";
import Objetivo from "./components/Objetivo";
import Qualificacoes from "./components/Qualificacoes";
import "../src/style.css";
import FormacaoEducacional from "./components/FormacaoEducacional";
import ExperienciaProfissional from "./components/ExperienciaProfissional";
import CursosExtracurriculares from "./components/CursosExtracurriculares";
import InformacoesAdicionais from "./components/InformacoesAdicionais";

function App() {

  return (
    <>
      <h1 className="titulo">Monte seu currículo</h1>
      <p className="aviso">Obs: Seus dados não serão salvos neste site.</p>
      <Card className="card">
        <CardContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <DadosPessoais />
              <Objetivo />
              <Qualificacoes />
              <FormacaoEducacional />
              <ExperienciaProfissional />
              <CursosExtracurriculares />
              <InformacoesAdicionais />
            </div>
            <Button
              className="myButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Gerar curriculo
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Typography sx={{ marginTop: '20px', color: '#fff' }} variant="body2" color="text.secondary" align="center">
        {'Desenvolvido por '}
        <Link color="#fff" target="_blank" href="https://www.instagram.com/jooj_he/">
          Josias Henrique
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}

export default App;
