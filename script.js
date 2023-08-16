const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-btn");

speakButton.addEventListener("click", () => {
    const text = textInput.value;
    if (text) {
        speakText(text);
    }
});

function speakText(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}
