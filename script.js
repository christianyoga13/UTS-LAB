var backgroundMusic = document.getElementById("backgroundMusic");

function toggleAudio() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}
var clicks;
var iqLevel;

if(localStorage.getItem("clicks")==null){
   clicks=0;
   iqLevel=0;
}else{
   clicks=localStorage.getItem("clicks");
   iqLevel=localStorage.getItem("iqLevel");
}

function addCredit() {
  var clickAudio = new Audio('assets/sfx/coin.mp3');
  clickAudio.play();

  if (iqLevel == 0) {
    clicks++;
  }

  if (iqLevel == 1) {
    clicks += 2;
  }

  if (iqLevel == 2) {
    clicks += 4;
  }

  if (iqLevel == 3) {
    clicks += 6;
  }

  if (iqLevel == 4) {
    clicks += 8;
  }

  if (iqLevel == 5) {
    clicks += 10;
  }
  console.log(clicks);
  $("#creditValue").text(clicks);
  localStorage.setItem("clicks", clicks);
}

// if (localStorage.getItem("clicks") !== null) {
//   clicks = parseInt(localStorage.getItem("clicks"));
//   document.getElementById("creditValue").innerHTML = clicks;
// }

function start() {
  window.location.href = "about.html";
}

if (localStorage.getItem("clicks") !== null) {
  var storedClicks = localStorage.getItem("clicks");
  if (storedClicks !== null && !isNaN(parseInt(storedClicks))) {
    clicks = parseInt(storedClicks);
  }
  document.getElementById("creditValue").innerHTML = clicks;
}

var iq = 0;
var hargaIq = [25, 50, 100, 300, 500];
var j = 0;


function intelligence() {

  if (clicks < hargaIq[j]) {
    alert("Not enough gold, miskin.");
    return;
  }

  clicks -= hargaIq[j];
  iq++;
  j++;

  if (j === 5) {
    alert("Multiplier upgraded to level max.");
  }
  else {
    alert("Multiplier upgraded to level " + j + ".");
  }

  var newIqLevel = Math.min(iq, 5);
  if (newIqLevel < 6) {
    var levelAudio = new Audio('assets/sfx/level.mp3');
    levelAudio.play();
  }
  
  document.getElementById("multi").innerHTML = "(" + hargaIq[j] + ")";
  document.getElementById("levelStatus").innerHTML = iqLevel;
  if (newIqLevel > iqLevel) {
    iqLevel = newIqLevel;
    
  }
  localStorage.setItem("iqLevel", iqLevel);
  localStorage.setItem("clicks", clicks);
}

function imageClicked() {
  addCredit();
}

var autoclickLevel = 0;
var autoclickInterval = 0;
var harga = [50, 100, 200, 500, 1000];
var i = 0;


var autoclickerIntervalId;

function addCreditInterval() {
  if (autoclickLevel > 0) {
    addCredit();
    localStorage.setItem("clicks", clicks);
    $("#creditValue").text(clicks);
  }
}
let creditInterval;
function buyAutoclicker() {

  if (clicks < harga[i]) {
    alert("Not enough gold, miskin.");
    return;
  }
  clicks -= harga[i];
  autoclickLevel++;

  
  switch (autoclickLevel) {
    case 1:
      autoclickInterval = 10000;
      creditInterval = setInterval(addCreditInterval, autoclickInterval);
      break;
    case 2:
      clearInterval(creditInterval);
      autoclickInterval = 5000;
      creditInterval = setInterval(addCreditInterval, autoclickInterval);
      break;
    case 3:
      clearInterval(creditInterval);
      autoclickInterval = 2500;
      creditInterval = setInterval(addCreditInterval, autoclickInterval);
      break;
    case 4:
      clearInterval(creditInterval);
      autoclickInterval = 1000;
      creditInterval = setInterval(addCreditInterval, autoclickInterval);
      break;
    case 5:
      clearInterval(creditInterval);
      autoclickInterval = 500;
      creditInterval = setInterval(addCreditInterval, autoclickInterval);
      break;
      
    default: alert("Auto clicker level already at max level."); break;
  }

  i++;
  i = Math.min(i, 4);
  if(i == 5) {
    alert("Autoclick upgraded to level max.");
  }  
  else {
    alert("Autoclick upgraded to level " + i + ".");
  }
  document.getElementById("auto").innerHTML = "(" + harga[i] + ")";
  document.getElementById("creditValue").innerHTML = clicks;
  document.getElementById("autoclickLevel").innerHTML = autoclickLevel;
}


function startAutoclicker() {
  buyAutoclicker();
  if (autoclickLevel == 0) {
    alert("You need to buy autoclicker first.");
    return;
  }
}

document.getElementById("intelligenceButton").addEventListener("click", intelligence);
document.getElementById("image").addEventListener("click", imageClicked);

document.getElementById("buyAutoclickerButton").addEventListener("click", buyAutoclicker);
document.getElementById("startAutoclickerButton").addEventListener

function closeGame() {
  localStorage.removeItem("clicks");
  localStorage.removeItem("bowtruckleCounter");
  window.location.href = "index.html";
}

var bowtruckleCounter = 0;
var hargaBow = 250;

function bowtruckle(clicks) {
  let bowtruckleCounter = localStorage.getItem("bowtruckleCounter");
  bowtruckleCounter = parseInt(bowtruckleCounter) || 0;

  if (clicks < 250) {
    alert("Not enough money.");
    return;
  }

  else if (bowtruckleCounter === 0) {
    clicks -= hargaBow;
    clicks = Math.max(clicks, 250);
    console.log(clicks);
    alert("Buy new creature success");
    window.location.href = "bowtruckle.html";
  }

  else if (bowtruckleCounter === 1) {
    window.location.href = "bowtruckle.html";
  }
  console.log(bowtruckleCounter);
  bowtruckleCounter = Math.min(bowtruckleCounter + 1, 1);
  localStorage.setItem("bowtruckleCounter", bowtruckleCounter);
  localStorage.setItem("clicks", clicks);
}
console.log(bowtruckle);

var key = 0;

function nambahKredit(key) {
  document.getElementById("bowButton").innerHTML = "FINDING.....";

  setTimeout(function() {
    let key = parseInt(document.getElementById("keyValue").innerHTML);
    key++;
    document.getElementById("keyValue").innerHTML = key;
    document.getElementById("bowButton").innerHTML = "Find a Key";
  }, 10000);
}

function bukaPeti() {
  if (key > 0) {
    key--;

    document.getElementById("keyValue").innerHTML = key;

    let hadiah = Math.floor(Math.random() * 3) + 1;

    console.log(`Anda membuka peti dan mendapatkan hadiah: ${hadiah}`);

    let pesan = document.createElement("p");
    pesan.innerHTML = `Anda membuka peti dan mendapatkan hadiah: ${hadiah}`;
    document.body.appendChild(pesan);
  } else {
    console.log("Anda tidak memiliki cukup kunci untuk membuka peti!");
  }
}

var key = localStorage.getItem("key") || 0;
var bowtruckleCounter = localStorage.getItem("bowtruckleCounter") || 0;

$("#keyValue").html(key);

function addKey() {
  key++;
  $("#keyValue").html(key);
  localStorage.setItem("key", key);
}

function buyBowtruckle() {
  if (key < 250) {
    alert("Not enough keys.");
    return;
  }
  else if (bowtruckleCounter === 0) {
    key -= 250;
    localStorage.setItem("key", key);
    console.log(key);
    alert("You have successfully bought a new creature!");
    window.location.href = "bowtruckle.html";
  }
  else if (bowtruckleCounter === 1) {
    window.location.href = "bowtruckle.html";
  }
}

$("#buttonBow").click(addKey);

setInterval(addKey, 20000);

$("#buttonBow").click(buyBowtruckle);

bowtruckleCounter = Math.min(parseInt(bowtruckleCounter) + 1, 1);
localStorage.setItem("bowtruckleCounter", bowtruckleCounter);

var chest = [15, 5, 60, 115];

console.log(chest[0]);
console.log(chest[2]);

for (var i = 0; i < chest.length; i++) {
  console.log(chest[i]);
}