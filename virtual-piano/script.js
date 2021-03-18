const piano = document.querySelector('.piano');


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




// window.addEventListener('keydown', (e) => {
//     const audio = document.querySelector(`audio[data-key="${e.code}"]`);
//     const key = document.querySelector(`.piano-key[data-key = "${e.code}"]`);
//     if (!audio) return; // stop the function
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('active');

// });


// piano.addEventListener('click', (event) => {
//     if (event.target.classList.contains('piano-key')) {
//         pianoКeys.forEach((el) => {
//             if (el.classList.contains('active')) {
//                 el.classList.remove('active');
//             }
//         });
//         event.target.classList.add('active');
//     }
// });


// function playAudio(keyId) {
//     const audio = document.querySelector(`audio[data-key="${keyId}"]`);
//     const key = document.querySelector(`.piano-key[data-key="${keyId}"]`)
//     if (!audio) return;
//     audio.currentTime = 0;
//     audio.play();
// }


// const playAudioFromCLick = (event) => {
//     const keyId = this.getAttribute('data-key');
//     playAudio(keyId);
// }

// for (let i = 0; i < pianoКeys.length; i++) {
//     pianoКeys[i].addEventListener('click', playAudioFromCLick);
// }