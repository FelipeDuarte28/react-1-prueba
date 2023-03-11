import { useState } from 'react';
import Header from './components/Header.jsx';
import Descripcion from './components/Descripcion.jsx';
import Busqueda from './components/Busqueda';
import MiApi from './components/MiApi.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const nombreTitulo = "STAR WARS: Starships"
  const textoPrincipal = "Esta página muestra detalles de las naves de Star Wars. Fue creada utilizando la API de Star Wars: https://swapi.dev/api/starships/"
  const [palabra, setPalabra] = useState('')

  return (
    <div>
      <Header titulo={nombreTitulo} />
      <Descripcion titulo={nombreTitulo} mainText={textoPrincipal}/>
      <Busqueda palabra={palabra} setPalabra={setPalabra}/>
      <MiApi palabra={palabra}/>
      <Footer titulo={nombreTitulo}/>
    </div>
  );
}

export default App;