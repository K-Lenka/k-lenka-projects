const piano = document.querySelector('.piano');
const buttonSwitch = document.querySelector('.btn-container')
const pianoKeys = document.querySelector('.piano-key')
const btnLetters = document.querySelector('#letters');
const btnNotes = document.querySelector('#notes');
const btns = document.querySelector('.btn');
const btnFullScreen = document.querySelector('#fullScreenBtn');



//Full screen toggle
btnFullScreen.addEventListener("click", function(e) {
    toggleFullScreen();
}, false);


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

//Switch between buttons
btnNotes.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn-active')) {
        btnLetters.classList.remove('btn-active');
        event.target.classList.add('btn-active');

    }
});

btnLetters.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn-active')) {
        btnNotes.classList.remove('btn-active');
        event.target.classList.add('btn-active');
        pianoKeys.classList.add('piano-key-letter');

    }
});


//События мыши
piano.addEventListener('mousedown', (event) => {
    const key = event.target;
    if (key.classList.contains('piano-key')) {
        toggleActiveClasses(key);
        const audio = document.querySelector(`audio[data-key="Key${event.target.dataset.letter}"`);
        playAudio(audio);
    }
});

piano.addEventListener('mouseup', (event) => {
    const key = event.target;
    if (key.classList.contains('piano-key')) {
        toggleActiveClasses(key);
    }
});

//При нажатии клавиши клавиатуры вызываем функцию playAudio
window.addEventListener('keydown', (event) => {
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    if (!key.classList.contains('piano-key-active')) {
        toggleActiveClasses(key);
        const audio = document.querySelector(`audio[data-key="${event.code}"]`);
        playAudio(audio);
    }
});

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`div[data-key="${event.code}"]`);
    toggleActiveClasses(key);
});

function toggleActiveClasses(key) {
    ['piano-key-active', 'piano-key-active-pseudo', 'piano-key-remove-mouse'].forEach(el => key.classList.toggle(el));
}


//Проигрывание звука на странице
function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}