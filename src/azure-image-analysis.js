
import axios from 'axios';


// Crear la función analyzeImage
async function analyzeImage(imageUrl) {
    try {
        // Hacer una solicitud a la API de Image Analysis 4.0 de Azure AI
        const response = await axios.post('https://api.cognitive.microsoft.com/vision/v4.0/analyze', {
            url: imageUrl,
            visualFeatures: ['Categories', 'Description', 'Tags']
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': '1ad1adf6b1da40d3a5c964e1b1ff650d'
            }
        });

        // Devolver la respuesta JSON de la API
        return response.data;
    } catch (error) {
        console.error('Error analyzing image:', error);
        throw error;
    }
}

// Exportar la función analyzeImage
export default analyzeImage;
// Importar los módulos necesarios
const axios = require('axios');

// Crear la función analyzeImage
async function analyzeImage(imageUrl) {
  try {
    // Hacer una solicitud a la API de Image Analysis 4.0 de Azure AI
    const response = await axios.post('https://api.cognitive.microsoft.com/vision/v4.0/analyze', {
      url: imageUrl,
      visualFeatures: ['Categories', 'Description', 'Tags']
    }, {
      headers: {
        'Content-Type': 'application/json',
        
        'Ocp-Apim-Subscription-Key': '1ad1adf6b1da40d3a5c964e1b1ff650d'
      }
    });
    // Devolver la respuesta JSON de la API
    return response.data;
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
}

// Exportar la función analyzeImage
module.exports = analyzeImage;
