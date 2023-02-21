export const speak = ({ response, setIsSpeaking }) => {
    console.log({ response, setIsSpeaking })
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(response);
    const config = {
      voice: synth.getVoices()[3], // primera voz disponible
      rate: 1.1, // velocidad de habla a 1.5 veces la velocidad predeterminada
      pitch: 1.9, // tono predeterminado
    };
    console.log(synth.getVoices())
    Object.assign(utterance, config);
    utterance.onend = () => setIsSpeaking(false);
    synth.speak(utterance);
};

export const stopSpeak = (setIsSpeaking) => {
  setIsSpeaking(false)
  const synth = window.speechSynthesis;
  synth.cancel();
}