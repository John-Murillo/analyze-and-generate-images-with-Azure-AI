import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div>

      <h1 className="title">Título</h1>
      <button className="button">Analizar imagen</button>

      <h1>Título</h1>
      <input 
        type="text" 
        value={imageUrl} 
        onChange={e => setImageUrl(e.target.value)} 
        placeholder="Escribe la URL de la imagen aquí"
      />
      <button style={{backgroundColor: 'blue', color: 'white'}}>Analizar imagen</button>
      <button onClick={() => console.log('Análisis de imagen')}>Analizar imagen</button>
      <button onClick={() => console.log('Generación de imagen')}>Generar imagen</button>
    </div>
  );
}
export default App;