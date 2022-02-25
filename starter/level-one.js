/*
 * DOTS: Level One
 *
 */
let ball = document.querySelector(`.js-ball`);
let scoreDisplay = document.querySelector(`.js-score`);
let levelWinner = document.querySelector(`.level-winner`);
let score = 0
ball.addEventListener(`click`, () => {
    score = score+10;
    scoreDisplay.innerText = score
        if (score >= 100) {
            levelWinner.style.opacity = `1`
        }
})