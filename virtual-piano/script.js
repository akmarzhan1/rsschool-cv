// setting the needed variables
const piano_keys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');
const btn_notes = document.querySelector('.btn-notes');
const btn_letters = document.querySelector('.btn-letters');
let clicked = false;

// making sure that the keys are not played when the mouse is not clicking on them (i.e., mouseup)
window.addEventListener('mouseup', () => (clicked = false));

// function for playing the sound if clicked
function playSound(event) {
    const sound = document.querySelector(`audio[data-note="${event.target.dataset.note}"]`);
    if (!clicked) return;
    if (!sound) return;
    event.target.classList.add('piano-key-active');
    sound.currentTime = 0;
    sound.play();
}

function pianoActive(event) {
    clicked = true;
    playSound(event);
}

// function for no longer keeping the key active (the changes in how it looks)
const pianoNotActive = (event) => {
    event.target.classList.remove('piano-key-active');
};

piano_keys.forEach((piano_key) => {
    //specifying the output for each case involving the mouse actions
    piano_key.addEventListener('mousedown', pianoActive);
    piano_key.addEventListener('mouseover', playSound);
    piano_key.addEventListener('mouseup', pianoNotActive);
    piano_key.addEventListener('mouseleave', pianoNotActive);
    // basically not letting the user click on the right click menu, so there are no edge cases
    piano_key.addEventListener('contextmenu', (event) => event.preventDefault());
});

// the correct work of the keyboard 
window.addEventListener('keydown', (event) => {
    //finding the 
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    const sound = document.querySelector(`audio[data-letter="${event.code.slice(-1)}"]`);
    if (!sound) return;
    // making sure the correct key is lit up 
    key.classList.add('piano-key-active');
    sound.currentTime = 0;
    sound.play();
});

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.piano-key[data-letter="${event.code.slice(-1)}"]`);
    if (!key) return;
    key.classList.remove('piano-key-active');
});

// making sure the correct view for notes/letters is given and all the
// letters/notes light up when the key is pressed
btn_notes.addEventListener('click', () => {
    btn_notes.classList.add('btn-active');
    btn_letters.classList.remove('btn-active');
    piano_keys.forEach(piano_key => piano_key.classList.remove('letter'));
});

btn_letters.addEventListener('click', () => {
    btn_letters.classList.add('btn-active');
    btn_notes.classList.remove('btn-active');
    piano_keys.forEach(piano_key => piano_key.classList.add('letter'));
});

// fullscreen view
document.querySelector('.fullscreen').addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}