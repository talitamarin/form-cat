import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';
import { useState } from 'react';

const Formulario = () => {
  const gatos = ['Adulto', 'Filhote', 'Idoso'];

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [fone, setFone] = useState('');
  const [gato, setGato] = useState('');

  const aoSalvar = () => {
    evento.preventDefault();
    console.log('Form foi submetido =>', nome, idade, endereco, fone, gato);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para adotar um gatinho!</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome:"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Idade:"
          placeholder="Digite sua idade"
          valor={idade}
          aoAlterado={(valor) => setIdade(valor)}
        />
        <CampoTexto
          label="Endereço:"
          placeholder="Digite seu endereço"
          valor={endereco}
          aoAlterado={(valor) => setEndereco(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Whatsapp:"
          placeholder="Digite seu número de celular"
          valor={fone}
          aoAlterado={(valor) => setFone(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Escolha seu gatinho:"
          itens={gatos}
          valor={gato}
          aoAlterado={(valor) => setGato(valor)}
        />
        <Button> Adotar </Button>
      </form>
    </section>
  );
};

export default Formulario;
