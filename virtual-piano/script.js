const piano = document.querySelector('.piano');
const buttonSwitch = document.querySelector('.btn-container')
const pianoKeys = document.querySelectorAll('.piano-key');
const btnLetters = document.querySelector('#letters');
const btnNotes = document.querySelector('#notes');
const btns = document.querySelector('.btn');
const btnFullScreen = document.querySelector('#fullScreenBtn');
const containerBtn = document.querySelector('.btn-container');


//Full screen toggle
btnFullScreen.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

//Switch between buttons
containerBtn.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn-active')) {
        btnLetters.classList.toggle('btn-active');
        btnNotes.classList.toggle('btn-active');
        toggleLActiveLetterClass();
    }
});

//События мыши
pianoKeys.forEach((elem) => {
    elem.addEventListener('mouseover', (event) => {
        const key = event.target;
        if (event.buttons === 1 && key.classList.contains('piano-key')) {
            toggleActiveClasses(key);
            const audio = document.querySelector(`audio[data-key = "Key${key.dataset.letter}"]`);
            playAudio(audio);
        }
    })
    elem.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('piano-key-active')) {
            toggleActiveClasses(event.target);
        }
    })
})

piano.addEventListener('mousedown', (event) => {
    const key = event.target;
    if (key.classList.contains('piano-key')) {
        toggleActiveClasses(key);
        const audio = document.querySelector(`audio[data-key = "Key${key.dataset.letter}"]`);
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
    const key = event.target;
    if (!key.classList.contains('piano-key-active')) {
        toggleActiveClasses(key);
        const audio = document.querySelector(`audio[data-key = "${event.code}"]`);
        playAudio(audio);
    }
});

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`div[data-key = "${event.code}"] `);
    toggleActiveClasses(key);
});

function toggleActiveClasses(key) {
    ['piano-key-active', 'piano-key-active-pseudo', 'piano-key-remove-mouse'].forEach(el => key.classList.toggle(el));
}

function toggleLActiveLetterClass() {

    pianoKeys.forEach(el => el.classList.toggle('piano-key-letter'));
}


//Проигрывание звука на странице
function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}