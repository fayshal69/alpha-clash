// home page play now function
function play() {
    //1. hide the home screen by adding 'hidden' class on home page
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');
    homeSection.classList.remove('flex');

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