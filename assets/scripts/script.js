//Wait for the dom to finsih loading before running the game
//get refs to button elements and and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".btn");
    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            if (e.currentTarget.getAttribute("data-type") === "submit") {
                alert("You Clicked Submit!");
            } else {
                let gameType = e.currentTarget.getAttribute("data-type");
                alert(`You clicked ${gameType}`);

            }
        })
    }
})


/**
 * The main game loop, called when the script is first loaded.
 * and after the users answer has been processed.
 * 
 */

function runGame() {

    //creates two random numbers from 1 to 25 (incl)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;


}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {


}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}