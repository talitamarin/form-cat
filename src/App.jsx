import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [cat, setCat] = useState([]);

  const aoNovoGatinhoAdicionado = (catAdopt) => {
    console.log(catAdopt);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoGatinhoCadastrado={(catAdopt) => aoNovoGatinhoAdicionado(catAdopt)}
      />
    </div>
  );
}

export default App;
