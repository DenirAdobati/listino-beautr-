
import { GoogleGenAI } from "@google/genai";

// Fix: Removed global ai instance and unused Type import. Initializing ai inside functions to follow latest SDK practices.

export const analyzeScalpImage = async (base64Image: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-2.5-flash-image";
  
  const prompt = "Analizza questa immagine del cuoio capelluto. Identifica possibili anomalie come eccesso di sebo, forfora, rossori o diradamento. Fornisci un breve riassunto professionale in italiano e suggerisci quali trattamenti tricologici generali potrebbero essere indicati.";

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType: "image/jpeg" } },
          { text: prompt }
        ]
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error analyzing image:", error);
    return "Errore durante l'analisi dell'immagine. Riprovare.";
  }
};

export const generateTreatmentPlan = async (clientData: any) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-flash-preview";
  
  const prompt = `Agisci come un esperto tricologo. Crea un piano di trattamento personalizzato basato sui seguenti dati del cliente:
  Tipo di capelli: ${clientData.hairType}
  Problematiche riscontrate: ${clientData.concerns?.join(", ") || 'N/A'}
  Condizione del cuoio: ${clientData.scalpCondition || 'N/A'}
  Note extra: ${clientData.notes}
  
  Formatta la risposta in modo professionale ed elenco puntato in italiano.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt
    });

    return response.text;
  } catch (error) {
    console.error("Error generating plan:", error);
    return "Impossibile generare il piano al momento.";
  }
};
