// cibles
const Target = document.createElement("img");
maskSrc = "./assets/img/mask.png";
bieberSrc = "./assets/img/bieber.png";
Target.src = maskSrc;
Target.id = "target";
var speed = 2000;
const randomLeft = 0;
const randomTop = 0;

// sound
const BieberMp3 = new Audio("./assets/songs/bieber.mp3");
const DionMp3 = new Audio("./assets/songs/dion.mp3");
const MaskMp3 = new Audio("./assets/songs/mask.mp3");
const PoolMp3 = new Audio("./assets/songs/pool.mp3");
const TrudeauMp3 = new Audio("./assets/songs/trudeau.mp3");
const ShootMp3 = new Audio("./assets/songs/bow.mp3");
const LvlUp = new Audio("./assets/songs/lvlup.mp3");
const CoinXp = new Audio("./assets/songs/coinXp.mp3");

// base.js
const head = document.querySelector("header");
const footer = document.querySelector("footer");
const section = document.querySelector("section");

// header
const spanHead = document.createElement("span");
const h1 = document.createElement("h1");
const h1Hover = document.createElement("h1");
const arabe = document.createElement("img");
const chapeau = document.createElement("img");
const frange = document.createElement("img");

// section
const cddor = document.createElement("img");
const divDor = document.createElement("div");
const cddor2 = document.createElement("img");
const divDor2 = document.createElement("div");
const groupeBoard = document.createElement("div");
const data = document.createElement("div");
const board = document.createElement("div");
const settings = document.createElement("div");
const iconArrow = document.createElement("i");
var x = 1;
var y = 1;

// header

frange.src = "./assets/img/frange.png";
frange.id = "frange";
chapeau.src = "./assets/img/chapeau.png";
chapeau.id = "chapeau";
arabe.src = "./assets/img/arabe.png";
arabe.id = "arabe";
h1.id = "CatchMe";
h1Hover.id = "CatchHover";
spanHead.id = "spanHead";
head.append(spanHead, frange);
spanHead.append(h1, h1Hover, arabe, chapeau);
h1.innerText = "CATCH ME if YOU CANADA !";
h1Hover.innerText = "WIll YOU Start the GaMe ?";

// section
cddor.src = "./assets/img/cddor.png";
cddor.id = "cddor";
cddor2.src = "./assets/img/cddor2.png";
cddor2.id = "cddor2";
section.append(data, board, settings);
board.append(divDor, Target, divDor2);
groupeBoard.id = "groupeBoard";
divDor.append(cddor);
divDor.id = "divDor";
divDor2.append(cddor2);
divDor2.id = "divDor2";
settings.append(iconArrow);
data.id = "data";
board.id = "board";
settings.id = "settings";
iconArrow.className = "fa-solid fa-arrow-trend-up";
iconArrow.id = "arrow";

iconArrow.addEventListener("click", function () {
  if (y == 1) {
    settings.style.right = "0px";

    iconArrow.style.transform = "scaleX(1) rotate(45deg)";
    y++;
  } else {
    settings.style.right = "-212px";
    iconArrow.style.transform = "scaleX(-1) rotate(0deg)";
    y--;
  }
});
// iconArrow.addEventListener("mouseover", function () {
//   if (x == 1) {
//     iconArrow.style.left = "-47px";
//     x++;
//   } else {
//     iconArrow.style.left = "-20px";
//     x--;
//   }
// });
// iconArrow.addEventListener(
//   "mouseout",
//   function () {
//     if (x == 2) {
//       iconArrow.style.left = "-47px";
//       x--;
//     } else {
//       iconArrow.style.left = "-20px";
//       x++;
//     }
//   }
// );

//--------------------------------data-------------------------------------//

const dataScore = document.createElement("div");
const dataScoreString = document.createElement("span");
var dataScoreLength = document.createElement("span");
var dataScoreValue = 0;

const dataPnl = document.createElement("div");
const dataPnlString = document.createElement("span");
var dataPnlLength = document.createElement("span");
var dataLvlLength = 1;

const dataLvl = document.createElement("div");
const dataLvlString = document.createElement("span");
var dataLvlLength = document.createElement("span");
var lvlValue = 1;
// document.getElementById("lvl-length").innerText = lvlValue;

const dataMc = document.createElement("div");
const dataMcString = document.createElement("span");
var dataMcLength = document.createElement("span");

const dataTimer = document.createElement("div");
var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");

const dataHs = document.createElement("div");

dataScoreString.id = "score-string";
dataScoreLength.id = "score-length";
dataLvlLength.id = "lvl-length";
dataScore.id = "score";
dataPnl.id = "pnl";
dataPnlString.id = "pnlString";
dataPnlLength.id = "pnlLength";
dataPnlValue = 10;
dataLvl.id = "lvl";
dataMc.id = "mc";
dataTimer.id = "timer";
dataHs.id = "hs";
// dataTimerMin.id = "min";
// dataTimerSec.id = "sec";

dataScoreString.innerText = "Score -> ";
// document.getElementById("score-length").innerText = dataScoreValue

dataPnlString.innerText = "Point until next LvL -> ";

dataLvl.innerText = "Level -> ";

dataMcString.innerText = "Miss Click -> ";

dataTimer.innerText = "Timer -> ";
dataHs.innerText = "High Score";

var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");
dataTimerMin.innerText = "01";
dataTimerSec.innerText = "00";
dataTimer.append(dataTimerMin, " : ", dataTimerSec);

data.append(dataScore, dataPnl, dataLvl, dataMc, dataTimer, dataHs);
dataScore.append(dataScoreString, dataScoreLength);
dataPnl.append(dataPnlString, dataPnlLength);
dataLvl.append(dataLvlString, dataLvlLength);
dataMc.append(dataMcString);
dataMcString.append(dataMcLength);
var Chrono = {
  min: { val: 0, DOM: dataTimerMin },
  sec: { val: 60, DOM: dataTimerSec },
};
function timer() {
  var x = 1;
  var inter = setInterval(function () {
    Chrono.sec.val -= x;
    if (Chrono.sec.val < 0) {
      Chrono.sec.val = 59;
      Chrono.min.val -= x;
    }
    if (Chrono.min.val < 0) {
      Chrono.min.val = 0;
      Chrono.sec.val = 0;
    }
    Chrono.sec.val < 10
      ? (Chrono.sec.DOM.innerHTML = "0" + Chrono.sec.val)
      : (Chrono.sec.DOM.innerHTML = Chrono.sec.val);
    Chrono.min.val < 10
      ? (Chrono.min.DOM.innerHTML = "0" + Chrono.min.val)
      : (Chrono.min.DOM.innerHTML = Chrono.min.val);
    if (Chrono.sec.val < 30) {
      document.createElement("dataTimerSec").style.color = "orange";
    }
    if (Chrono.sec.val < 10) {
      document.createElement("dataTimerSec").style.color = "red";
    }
    if (Chrono.sec.val >= 10) {
      document.createElement("dataTimerSec").style.color = "black";
    }
    if (Chrono.min.val == 0 && Chrono.sec.val == 0) {
      clearInterval(inter);
      alert("Time's up!");
    }
  }, 1000);
}

h1Hover.addEventListener("click", start);

function start() {
  if (confirm("Are you REaDy for the GAME")) {
    Target.style.left = Math.floor(Math.random() * 1100 + 1) + "px"; //Math.floor((Math.random() * 200) + 1);  Generates random number between 1 and 200
    Target.style.top = Math.floor(Math.random() * 630 + 1) + "px"; //Math.floor((Math.random() * 100) + 1);  Generates random number between 1 and 100
    timer();
    document.getElementById("lvl-length").innerText = lvlValue;
    MaskMp3.play();
    Target.style.display = "block";
    document.getElementById("pnlLength").innerText = "10";
    // pointCounter();
  } else {
    alert("Error404 skill not found");
  }
}

Target.addEventListener("mouseover", mooveTarget);

function mooveTarget() {
  setTimeout(() => {
    function randomIntFromIntervalLeft(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomLeft = randomIntFromIntervalLeft(30, 1100);

    Target.style.left = randomLeft + "px";

    function randomIntFromIntervalTop(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const randomTop = randomIntFromIntervalTop(30, 630);

    Target.style.top = randomTop + "px";
  }, speed);
}

Target.addEventListener("click", function () {
  dataMcLength--;
  // Move the target
  mooveTarget();

  //////////////////////////////////  pnl  ////////////////////////////////

  if (dataPnlValue !== 1) {
    dataPnlValue--;
    dataPnlValue--;
    document.getElementById("pnlLength").innerText = dataPnlValue;
  } else {
    if (lvlValue == 1) {
      lvlValue = 2;
      dataPnlValue = 19;
      document.getElementById("pnlLength").innerText = dataPnlValue;
    } else if (lvlValue == 2) {
      lvlValue = 3;
      dataPnlValue = 29;
      document.getElementById("pnlLength").innerText = dataPnlValue;
    } else if (lvlValue == 3) {
      lvlValue = 4;
      dataPnlValue = 39;
      document.getElementById("pnlLength").innerText = dataPnlValue;
    } else if (lvlValue == 4) {
      lvlValue = 5;
      dataPnlValue = 49;
      document.getElementById("pnlLength").innerText = dataPnlValue;
    }
  }

  ////////////////////////////////////////////////////////////////////////

  if (dataPnlValue == 20) {
    document.getElementById("lvl-length").innerText = lvlValue;
  } else if (dataPnlValue == 30) {
    document.getElementById("lvl-length").innerText = lvlValue;
  } else if (dataPnlValue == 40) {
    document.getElementById("lvl-length").innerText = lvlValue;
  } else if (dataPnlValue == 50) {
    document.getElementById("lvl-length").innerText = lvlValue;
  }
  // if (dataPnlValue == 20) {
  //     lvlValue++;
  //     console.log(lvlValue);
  //     document.getElementById("lvl-length").innerText = parseInt(lvlValue)
  // }
  // if (dataPnlValue == 0) {
  //   lvlValue++;
  //   document.getElementById("lvl-length").innerText = lvlValue
  //   // dataLvl.innerText = "Level -> " + dataLvlLength;

  //   switch (dataLvlLength) {
  //     case 2:
  //       document.getElementById("pnlLength").innerText = 20;
  //       dataPnlValue = 20;
  //       break;
  //     case 3:
  //       document.getElementById("pnlLength").innerText = 30;
  //       dataPnlValue = 30;
  //       break;
  //     case 4:
  //       document.getElementById("pnlLength").innerText = 40;
  //       dataPnlValue = 40;
  //       break;
  //     case 5:
  //       document.getElementById("pnlLength").innerText = 50;
  //       dataPnlValue = 50;
  //       break;
  //     case 6:
  //       document.getElementById("pnlLength").innerText = 60;
  //       dataPnlValue = 60;
  //       break;
  //   }
  // }

  Target.src = "./assets/videos/coin.gif";
  Target.width = "1000px";
  CoinXp.play();

  setTimeout(() => {
    Target.src = maskSrc;
    Target.width = "50px";
  }, 500);

  dataScoreValue++;
  dataScoreValue++;
  document.getElementById("score-length").innerText = dataScoreValue;
});

board.addEventListener("click", missClick);

var dataMcLength = 0;

function missClick() {
  dataPnlValue++;

  document.getElementById("pnlLength").innerText = dataPnlValue;
  dataMcLength++;

  dataMc.innerText = "Miss Click -> " + dataMcLength;
  if (dataScoreValue !== 0) {
    dataScoreValue--;
    document.getElementById("score-length").innerText = dataScoreValue;
  }
}