const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector(".container > h1");

img1.setAttribute("src", "./images/dice6.png");
img2.setAttribute("src", "./images/dice6.png");


let randomNumber1 = Math.floor(Math.random() * (6)) + 1;
let randomNumber2 = Math.floor(Math.random() * (6)) + 1;

img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    title.textContent = "⛳Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 wins⛳";
} else {
    title.textContent = "Draw!!";
}