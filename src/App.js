import React, { useState } from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState(0);
  const [texto, setTexto] = useState('O texto vai aparecer aqui');
  const [enviado, setEnviado] = useState('N/A');
  const [textArea, setTextArea] = useState('Clique aqui e coloque algo');

  const handleContador = (valorer) => {
    setValor(valorer + 1);
  };

  const handleTexto = (evento) => {
    setTexto(evento.target.value);
  };

  const handleClick = (recebido) => {
    setEnviado(recebido);
  };

  const handleTextBox = (evento) => {
    setTextArea(evento.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Contador</h1>
          <p>{valor}</p>
          <button onClick={() => handleContador(valor)}>Clique</button>
          <br></br>
          <h1>Escrevedor</h1>
          <p>{texto}</p>
          <input
            type="text"
            name="barra"
            placeholder="Digite um texto aqui"
            onChange={handleTexto}
          ></input>
          <button onClick={() => handleClick(texto)}>
            Clique para enviar o texto que está no Input Text
          </button>
          <p>Texto enviado: {enviado}</p>
          <textarea onChange={handleTextBox} />
          <br></br>
          <button onClick={() => handleClick(textArea)}>
            Clique para enviar o que está na Text Area
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
