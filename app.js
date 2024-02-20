// home page play now function
function play() {
    // set again the point and life
    pointTxt.innerText = 0;
    lifeTxt.innerText = 3;
    life = 3, point = 0;

    // hide the score page
    const scorePage = document.getElementById('score-page');
    scorePage.classList.add('hidden');

    //1. hide the home screen by adding 'hidden' class on home page
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');

    // 2. show the play ground by removing the 'hidden' class on play ground
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    // 3. now play or continue the game
    continueGame();
}

// play ground section function
function continueGame() {
    // 1. generate a random alphabet
    const alphabet = getARandomAlphaBet();
     
    // 2. set random alphabet on the screen
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // 3. set background color on key
    setBackgroundColorById(alphabet);
}

// get a random alphabet function
function getARandomAlphaBet() {
    // 1. create an alphabets array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // 2. get a random index between 0 to 25
    const randomNum = Math.round(Math.random() * 25 );
    const alphabet = alphabets[randomNum];

    return alphabet;
}

// set background of current alphabet
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove the background
function removeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// point and life 
let point = 0, life = 3;
const pointTxt = document.getElementById('pointTxt');
const lifeTxt = document.getElementById('lifeTxt');

// capture keyboard key press
document.addEventListener('keyup', handleKeyPress);

function handleKeyPress(e) {
    const playerPress = e.key;

    // to stop the game
    if(playerPress === 'Escape') {
        gameOver();
    }
    
    // get the expected to press
    const currentAlphabet = document.getElementById('current-alphabet');
    const alphabet = currentAlphabet.innerText.toLowerCase();

    // checked alphabet matched or not
    if(playerPress === alphabet) {
        // remove the key color of right pressed key
        removeBackgroundById(alphabet);
        // score updating
        point += 1;
        pointTxt.innerText = point;
        // continue the game again
        continueGame();
    }
    else {
        if(life === 1) {
            // remove alphabet bg color
            removeBackgroundById(alphabet);

            // go to the final score page
            gameOver();
        }
        // reduce the life
        life -= 1;
        lifeTxt.innerText = life;
    }
}

function gameOver() {
    // hide the play ground
    const playGround = document.getElementById('play-ground');
    playGround.classList.add('hidden');
    // show the score page
    const scorePage = document.getElementById('score-page');
    scorePage.classList.remove('hidden');

    const finalScore= document.getElementById('final-score');
    finalScore.innerText = point;
}

// finished the alpha cash