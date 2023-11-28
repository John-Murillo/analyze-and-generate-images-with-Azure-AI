import React, { useState } from 'react';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleAnalyzeImage = () => {
    // Aquí va el código para analizar la imagen
  };

  const handleGenerateImage = () => {
    // Aquí va el código para generar la imagen
  };

  return (
    <div>
      <h1 className="title">Título</h1>
      <input
        type="text"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        placeholder="Escribe la dirección URL de la imagen"
      />
      <button className="button" onClick={handleAnalyzeImage}>Analizar imagen</button>
      <button className="button" onClick={handleGenerateImage}>Generar imagen</button>
    </div>
  );
}

export default App;