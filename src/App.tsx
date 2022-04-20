import { Button, Card, CardContent, Link, Typography } from "@mui/material";
import DadosPessoais from "./components/DadosPessoais";
import Objetivo from "./components/Objetivo";
import Qualificacoes from "./components/Qualificacoes";
import "../src/style.css";
import FormacaoEducacional from "./components/FormacaoEducacional";
import ExperienciaProfissional from "./components/ExperienciaProfissional";
import CursosExtracurriculares from "./components/CursosExtracurriculares";
import InformacoesAdicionais from "./components/InformacoesAdicionais";
import { useState } from "react";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface Formacao {
  grau: string,
  curso: string,
  instituicao: string,
  inicio: string,
  conclusao: string
}

interface ExperienciasProfissionais {
  cargo: string,
  empresa: string,
  cidade: string,
  inicio: string,
  saida: string,
  empregoAtual: boolean
}

interface CursoExtra {
  curso: string,
  instituicao: string,
  inicio: string,
  conclusao: string,
  cargahoraria: string
}

function App() {
  const [resumo, setResumo] = useState('');
  const [objetivo, setObjetivo] = useState(null);
  const [infoAdicional, setInfoAdicional] = useState('');
  const [formacoes, setFormacoes] = useState<Formacao[]>([]);
  const [cursosExtras, setCursosExtras] = useState<CursoExtra[]>([]);
  const [experiencias, setExperiencias] = useState<ExperienciasProfissionais[]>([]);
  const [dadosP, setDadosP] = useState({
    nome: '', estado: '',
    dataNasc: '', telefone: '', email: '', localNasc: '', endereco: '', cnh: ''
  });

  const generateResumo = (resumoQualificacoes) => {
    setResumo(resumoQualificacoes);
  }

  const generateObjetivo = (objetivoC) => {
    setObjetivo(objetivoC);
  }

  const generateInfoAdd = (informacaoAdicional) => {
    setInfoAdicional(informacaoAdicional);
  }

  const generateFormacoes = (formacoes) => {
    setFormacoes(formacoes);
  }

  const generateExperiencias = (experiencias) => {
    setExperiencias(experiencias);
  }

  const generateCursosEx = (cursosExtras) => {
    setCursosExtras(cursosExtras);
  }

  const generateDadosPessoais = (dadosPessoais) => {
    setDadosP({
      nome: dadosPessoais.nome, estado: dadosPessoais.estado,
      dataNasc: dadosPessoais.dataNasc, telefone: dadosPessoais.telefone, email: dadosPessoais.email, localNasc: dadosPessoais.localNasc, endereco: dadosPessoais.endereco, cnh: dadosPessoais.cnh
    })
  }

  const generatePDF = () => {

    const reportTitle = [
      {
        text: `${dadosP.nome}\n\n\n\n`,
        fontSize: 25,
        style: 'reportName',
        bold: true,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      }
    ];

    var convertDataNasc = dadosP.dataNasc.split('-').reverse().join('/');
    var idade = new Date().getFullYear() - new Date(dadosP.dataNasc).getFullYear();

    const details = [
      {
        text: 'DADOS PESSOAIS',
        style: 'subheader',
        margin: [0, 30, 0, 0],
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      `${dadosP.estado}, ${idade} anos (${convertDataNasc})`,
      `${dadosP.endereco}, ${dadosP.localNasc}`,
      `Tel: ${dadosP.telefone}`,
      `E-mail: ${dadosP.email}`,
      `${dadosP.cnh ? `CNH: ${dadosP.cnh}\n\n\n` : '\n\n\n'}`,

      {
        text: 'OBJETIVO',
        style: 'subheader',
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      `${objetivo} \n\n\n`,
      {
        text: 'RESUMO DE QUALIFICAÇÕES',
        style: 'subheader',
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      `${resumo} \n\n\n`,
      {
        text: 'FORMAÇÃO EDUCACIONAL',
        style: 'subheader',
        margin: [0, 20, 0, 0],
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      {
        ul: [
          formacoes.map((x) => (
            `${x.curso ? `${x.curso}(${x.grau})` : `${x.grau}`} em ${x.instituicao} (${x.inicio.split('-').reverse().join('/')} - ${x.conclusao.split('-').reverse().join('/')})\n\n`
          )),
        ]
      },
      {
        text: 'EXPERIÊNCIA PROFISSIONAL',
        margin: [0, 20, 0, 0],
        style: 'subheader',
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      {
        ul: [
          experiencias.map((x) => (
            `${x.cargo} em ${x.empresa} (${x.inicio.split('-').reverse().join('/')} - ${x.empregoAtual ? 'emprego atual' : x.saida.split('-').reverse().join('/')})\n\n`
          )),
        ]
      },
      {
        text: 'CURSOS EXTRACURRICULARES',
        margin: [0, 20, 0, 0],
        style: 'subheader',
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      {
        ul: [
          cursosExtras.map((x) => (
            `${x.curso} em ${x.instituicao} | ${x.cargahoraria ? `Carga horária: ${x.cargahoraria}h` : ``}\n\n`
          )),
        ]
      },
      {
        text: `${infoAdicional ? `INFORMAÇÕES ADICIONAIS` : ``}`,
        style: 'subheader',
        margin: [0, 20, 0, 0],
        bold: true
      },
      {
        text:
          '__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
        alignment: 'center',
        fontSize: 5,
        colSpan: 3,
      },
      {},
      {},
      `${infoAdicional ? infoAdicional : ''}`
    ];

    const docDefinitios = {
      pageSize: 'A4',
      pageMargins: [15, 50, 15, 40],
      header: [reportTitle],
      content: details
    }
    pdfMake.createPdf(docDefinitios).download();
  }

  return (
    <>
      <h1 className="titulo">Monte seu currículo</h1>
      <p className="aviso">Obs: Seus dados não serão salvos neste site.</p>
      <Card id="content" className="card">
        <CardContent>
          <div>
            <DadosPessoais generateDadosPessoais={generateDadosPessoais} />
            <Objetivo generateObjetivo={generateObjetivo} />
            <Qualificacoes generateResumo={generateResumo} />
            <FormacaoEducacional generateFormacoes={generateFormacoes} />
            <ExperienciaProfissional generateExperiencias={generateExperiencias} />
            <CursosExtracurriculares generateCursosEx={generateCursosEx} />
            <InformacoesAdicionais generateInfoAdd={generateInfoAdd} />
          </div>
        </CardContent>

        <Button
          disabled={objetivo ? false : true}
          onClick={generatePDF}
          fullWidth
          variant="contained"
          color="success"
        >
          Baixar curriculo
        </Button>
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
