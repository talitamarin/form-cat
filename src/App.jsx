import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Gatos from './componentes/Gatos';

function App() {
  const gatos = [{ nome: '', corPrimaria: '', corSegundaria: '' }];

  const [cat, setCat] = useState([]);

  const aoNovoGatinhoAdicionado = (catAdopt) => {
    console.log(catAdopt);
    setCat([...cat, catAdopt]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoGatinhoCadastrado={(catAdopt) => aoNovoGatinhoAdicionado(catAdopt)}
      />
      <Gatos nome="Filhotes" />
      <Gatos nome="Adultos" />
      <Gatos nome="Idosos" />
    </div>
  );
}
export default App;
