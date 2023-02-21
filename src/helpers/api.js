import axios from "axios";

export const fetchData = async (prompt) => {
  const openaiEndpoint = import.meta.env.VITE_OPENAI_ENDPOINT;
  const openaiAPIKey = import.meta.env.VITE_OPENAI_KEY;
  
  const data = {
    model:"text-davinci-003",
    prompt: prompt,
    temperature: 0.5,// temperature: 0.9,
    max_tokens: 100, //150
    top_p: 1.0, //1
    frequency_penalty: 0.5, //0.0
    presence_penalty: 0.0, //0.6
    stop: [" You:"],
  };
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openaiAPIKey}`
  };

  try {
    const response = await axios.post(openaiEndpoint, data, { headers })
    const { data: { choices: [{ text }] } } = response
    return text
  } catch (error) {
    console.error("error cargando la respuesta");
    console.error(error)
  }
}