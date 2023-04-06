const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "assets/chara/Niffler 1.png";

let imgBackward = new Image();
imgBackward.src = "assets/chara/Niffler 1 backward.png"

let coinImg = new Image();
coinImg.src = "assets/chara/coin.png";

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;

let itemX = Math.floor(Math.random() * (canvas.width - 50));
let itemY = Math.floor(Math.random() * (canvas.height - 50));

let score = 0;
const numItems = 5;

const time = 1500;
let remainingTime = time;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x + vxr + 50 > canvas.width) vxr = 0;
  if (x + vxl < 0) vxl = 0;
  if (y + vy + 50 > canvas.height) vy = 0;
  if (y + vy < 0) vy = 0;

  let currentImg = vxr > 0 ? img : imgBackward;

  x += vxl;
  x += vxr;
  y += vy;

  ctx.drawImage(currentImg, x, y, 70, 70);

  for (let i = 0; i < numItems; i++) {
    ctx.drawImage(coinImg, items[i].x, items[i].y, 50, 50);

    if (x < items[i].x + 20 &&
      x + 50 > items[i].x &&
      y < items[i].y + 20 &&
      y + 50 > items[i].y) {
      console.log("Item collected!");
      score++;
      items[i].x = Math.floor(Math.random() * (canvas.width - 50));
      items[i].y = Math.floor(Math.random() * (canvas.height - 50));
    }
  }

  ctx.fillStyle = "white";
  ctx.font = " 30px Font";
  ctx.fillText("Score: " + score, 10, 50);
  ctx.fillText("Time: " + remainingTime, canvas.width - 120, 50);

  remainingTime--;
  if (remainingTime == 0) {
    endGame();
  }

  requestAnimationFrame(update);
}

img.onload = function() {
  update();
};

let items = [];
for (let i = 0; i < numItems; i++) {
  items.push({
    x: Math.floor(Math.random() * (canvas.width - 50)),
    y: Math.floor(Math.random() * (canvas.height - 50))
  });
}

function endGame() {
  let tempClicks;
  console.log("Game over! Score: " + score);
  if (score >= 10) {
    tempClicks = Number(localStorage.getItem("clicks"));
    alert("Score: " + score + ", Congratulations for winning your bet! (+50 Gold).");
    localStorage.setItem("clicks", tempClicks+=50);
  }
  if (score < 10) {
    tempClicks = Number(localStorage.getItem("clicks"));
    alert("Score: " + score + ", You lost the bet! (-50 Gold).");
    localStorage.setItem("clicks", tempClicks -= 50);
  }
  window.location.href = "index.html";
}