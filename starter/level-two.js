/*
 * DOTS: Level Two
 *
 */
let score = 0;
let ball = document.querySelectorAll(".js-ball");
let scoreDisplay = document.querySelector(".js-score");
let levelWinner = document.querySelector(".level-winner");
for (let i = 0; i <  ball.length; i++) {
    ball[i].addEventListener("click", function () {
        bClicked();

    })
    
}


let bClicked = () => {
    score += 10;
    scoreDisplay.innerText = score;
    if (score >= 100) {
        levelWinner.style.opacity = "1";
    }

}