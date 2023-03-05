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

// mstion
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
h1.innerText = "CATCH ME if YOU CAN !";
h1Hover.innerText = "WIll YOU Start the GaMe ?";

// section
section.append(data, board, settings);
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
//------------------------------------------------------------
//
//   h1Hover.addEventListener("click", start)

//   function start(){

//    if(confirm("Are you REaDy for the GAME")){
//     gameReady()
//    }else{
//     alert("Error404 skill not found")
//    }
//   }

//   function gameReady(){
  // timer();
//   }
//--------------------------------data-------------------------------------//

const dataScore = document.createElement("div");
const dataPnl = document.createElement("div");
const dataLvl = document.createElement("div");
const dataMc = document.createElement("div");
const dataTimer = document.createElement("div");
var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");
const dataHs = document.createElement("div");
dataScore.id = "score";
dataPnl.id = "pnl";
dataLvl.id = "lvl";
dataMc.id = "mc";
dataTimer.id = "timer";
dataHs.id = "hs";
// dataTimerMin.id = "min";
// dataTimerSec.id = "sec";

dataScore.innerText = "Score : 0";
dataPnl.innerText = "Point until next LvL";
dataLvl.innerText = "Level";
dataMc.innerText = "Miss Clicksssss";
dataTimer.innerText = "Timer ";
dataHs.innerText = "High Score";

var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");
dataTimerMin.innerText = "00";
dataTimerSec.innerText = "00";
dataTimer.append(dataTimerMin, " : ", dataTimerSec);

data.append(dataScore, dataPnl, dataLvl, dataMc, dataTimer, dataHs);

var C = {
  min: { val: 0, DOM: dataTimerMin },
  sec: { val: 60, DOM: dataTimerSec },
};
function timer() {
  var x = 1;
  var inter = setInterval(function () {
    C.sec.val -= x;
    if (C.sec.val < 0) {
      C.sec.val = 59;
      C.min.val -= x;
    }
    if (C.min.val < 0) {
      C.min.val = 0;
      C.sec.val = 0;
    }
    C.sec.val < 10
      ? (C.sec.DOM.innerHTML = "0" + C.sec.val)
      : (C.sec.DOM.innerHTML = C.sec.val);
    C.min.val < 10
      ? (C.min.DOM.innerHTML = "0" + C.min.val)
      : (C.min.DOM.innerHTML = C.min.val);
    if (C.sec.val < 30) {
      document.getElementById("dataTimerSec").style.color = "orange";
    }
    if (C.sec.val < 10) {
      document.getElementById("dataTimerSec").style.color = "red";
    }
    if (C.sec.val >= 10) {
      document.getElementById("dataTimerSec").style.color = "black";
    }
    if (C.min.val == 0 && C.sec.val == 0) {
      clearInterval(inter);
      alert("Time's up!");
    }
  }, 1000);
}


