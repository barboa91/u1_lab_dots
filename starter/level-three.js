let score = 0;
let ball = document.querySelectorAll(".js-ball");
let scoreDisplay = document.querySelector(".js-score");
let levelWinner = document.querySelector(".level-winner");
for (let i = 0; i <  ball.length; i++) {
    ball[i].addEventListener("click", function () {
        let tBallScore = ball[i].dataset.increment;
        console.log(tBallScore);
        bClicked(parseInt(tBallScore));
    })   
}
let bClicked = (bSize) => {
    score += bSize;
    scoreDisplay.innerText = score;
    if (score >= 100) {
        levelWinner.style.opacity = "1";
    }
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('body').style.backgroundColor = "#" + randomColor;
}