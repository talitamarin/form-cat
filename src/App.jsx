import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Gatos from './componentes/Gatos';

function App() {
  const gatos = [
    { nome: 'Filhotes', corPrimaria: '#ee88a8', corSegundaria: '#ffe7f4' },
    { nome: 'Adultos', corPrimaria: '#6ec2e6 ', corSegundaria: '#d0f0ff' },
    { nome: 'Idosos', corPrimaria: '#ee88a8', corSegundaria: '#ffe7f3' },
  ];

  const [cat, setCat] = useState([]);

  const aoNovoGatinhoAdicionado = (catAdopt) => {
    console.log(catAdopt);
    setCat([...cat, catAdopt]);
  };
  return (
    <div className="App">
      <Banner />

      <Formulario
        gatos={gatos.map((gato) => gato.nome)}
        aoGatinhoCadastrado={(catAdopt) => aoNovoGatinhoAdicionado(catAdopt)}
      />
      {gatos.map((gato) => (
        <Gatos
          key={gato.nome}
          nome={gato.nome}
          corPrimaria={gato.corPrimaria}
          corSecundaria={gato.corSegundaria}
        />
      ))}
    </div>
  );
}
export default App;
