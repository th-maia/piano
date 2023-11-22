const pianoKeys = document.querySelectorAll(".piano-keys .key"); // pega cada elemento com classe piano keys e dentro dele key.
const mapedkeys = []; // lugar onde vai ficar as teclas permitidas.
const volumeSlider = document.querySelector(".volume-slider input");
const printedKeysToggle = document.querySelector(".keys-check input");

let audio = new Audio(`tunes/a.wav`); //varaiavel criada fora apra poder acessar o audio volume;

const playTune = (key) => { // funcao de tocar o audio.
    audio.src = `tunes/${key}.wav`; // a posição do audio que deve tocar.
    audio.play(); // toca o audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); //adiciona uma classe dinamicamente para quando a função for chamado fazer uma animação.
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));  // aqui para colocar um addEventlistener para quando for clicado.
    mapedkeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => { //aqui pega cada tecla do teclado pressionada e aciona o playtune.
    let pressedKey = e.key;

    if(pressedKey === 'ç') { // conversão para teclados pt-br
        pressedKey = ';';
    }

    if(mapedkeys.includes(pressedKey)) { // só tocar o som se for uma das teclas permitidas.
        playTune(pressedKey)
    }; 
});


const handleVolume = (e) => { //atualizar o volume do audio.
    console.log(e.target.value); //pega o value.
    audio.volume = e.target.value;
};

volumeSlider.addEventListener("input", handleVolume); // se mexer no input chama função para atualizar o volume do audio.


const showHideKeys = () => { //esconde e mostra as letras do teclado das teclas.
    pianoKeys.forEach((key) => {
        key.classList.toggle("hide"); // coloca a classe se nao tem e adiciona se nao tiver.
    })
}

printedKeysToggle.addEventListener("click", showHideKeys);




