import React, { useState } from 'react';
import './App.css';
import { analyzeImage } from './api'; // Importar la función analyzeImage


function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [processing, setProcessing] = useState(false); // Indicador de procesamiento
  const [results, setResults] = useState(null); // Resultados del análisis

  const handleAnalyzeImage = async () => {
    setProcessing(true); // Mostrar indicador de procesamiento

    try {
      const analysisResults = await analyzeImage(imageUrl); // Llamar a la función analyzeImage
      setResults(analysisResults); // Actualizar los resultados del análisis
    } catch (error) {
      console.error(error);
    }

    setProcessing(false); // Ocultar indicador de procesamiento
  };

  const handleGenerateImage = () => {
    // Aquí va el código para generar la imagen
  };

  const DisplayResults = () => {
    if (results) {
      // Mostrar los resultados de la llamada API en un formato legible
      return (
        <div>
          <h2>Resultados del análisis:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      );
    } else {
      return null;
    }
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
      {processing && <p>Procesando...</p>} // Mostrar indicador de procesamiento si está en progreso
      <DisplayResults /> // Mostrar los resultados del análisis
    </div>
  );
}

export default App;