import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Button from '../Button';
import { useState } from 'react';

const Formulario = (props) => {
  
  const gatos = ['Adulto', 'Filhote', 'Idoso'];

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [perso, setPerso] = useState('');
  const [time, setTime] = useState('');
  const [gato, setGato] = useState('');

  const aoSalvar = () => {
    evento.preventDefault();

    props.aoGatinhoCadastrado({ nome, idade, perso, time, gato });

    console.log('Form foi submetido =>', nome, idade, perso, time, gato);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para adicionar um gatinho!</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome:"
          placeholder="Digite o nome do gatinho"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Idade:"
          placeholder="Digite a idade do gatinho"
          valor={idade}
          aoAlterado={(valor) => setIdade(valor)}
        />
        <CampoTexto
          label="Personalidade:"
          placeholder="Digite a personalidade do gatinho"
          valor={perso}
          aoAlterado={(valor) => setPerso(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Quanto tempo está no abrigo:"
          placeholder=" "
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Escolha o grupo:"
          itens={gatos}
          valor={gato}
          aoAlterado={(valor) => setGato(valor)}
        />
        <Button> Adicionar </Button>
      </form>
    </section>
  );
};

export default Formulario;
