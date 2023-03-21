var currentIndex = 0;
var startButton;
var level;
var sequence = [];
var buttons = [];
function initApp(params) {
    startButton = document.getElementById("start");
    level = document.getElementById("level");
    startButton.onclick = (event) => {
        startGame();
    };
    initTiles()
}

function startGame() {
    sequence = [];
    nextLevel()
}

function nextLevel() {
    sequence.push(getRandomNumberInRange(0,15),getRandomNumberInRange(0,15))
    level.textContent = sequence.length / 2
    playSequence()

}

function getRandomNumberInRange(start, end) {
    return Math.floor(Math.random() * (end+1)) + start;
}

function playSequence() {/*
    for (let index = 0; index < sequence.length; index++) {
        setTimeout(() => {
        buttons[sequence[index]].classList.remove('green-tile');
        buttons[sequence[index]].classList.add('blue-tile');
        }, 1000)

        setTimeout(() => {
            buttons[sequence[index]].classList.remove('blue-tile');
            buttons[sequence[index]].classList.add('green-tile');
            }, 1000)
        
    }*/
    currentIndex = 0;
    let step = 0;
      const intervalId = setInterval(() => {
        const num = sequence[step];

        buttons[num].classList.add('highlighted');

        setTimeout(() => {
            buttons[num].classList.remove('highlighted');
        }, 200);
        step++;
        if (step >= sequence.length) {
          clearInterval(intervalId);
          currentStep = 0;
        }
      }, 500);
}

function initTiles() {
    var cardGrid = document.getElementById('grid');
    for (let index = 0; index < 16; index++) {
        let tile = createTile(index)
        cardGrid.appendChild(tile)
        buttons.push(tile)
    }
}

function createTile(params)
{
    let v = document.createElement('button');
    v.classList.add("tile")
    v.classList.add("green-tile")
    v.textContent = String(params)
    v.type = "button"
    v.onclick = (event) => {
        validateClick(event.target.textContent);
    };
    return v;
}

function validateClick(text) {
    text = Number(text)
    if (sequence[currentIndex] == text) {
        currentIndex++;
        if (currentIndex == sequence.length) {
            nextLevel();
        }
    }
    else
    {
        alert("Game Over!")
    }
}

initApp()


const buttonArray = []; // initialize an empty array

const newButton = document.createElement('button'); // create a new button element

newButton.textContent = 'Click me'; // set the button text
newButton.classList.add('button-class'); // add a class to the button

buttonArray.push(newButton); // add the new button to the array

// remove the class from the button at index 0
buttonArray[0].classList.remove('button-class');

// add a new class to the same button
buttonArray[0].classList.add('new-class');

console.log(buttonArray[0]); // Output: <button>Click me</button> with class "new-class"
