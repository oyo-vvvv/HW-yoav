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
const section = document.querySelector("section");
const footer = document.querySelector("footer");

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
board.style.pointerEvents = "none";
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
const Target = document.createElement("img");
const Target2 = document.createElement("img");
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

// settings

const bieber = document.createElement("img");
bieber.className = "targets";
bieber.id = "bieber-id";
const dion = document.createElement("img");
dion.className = "targets";
dion.id = "dion-id";
const pool = document.createElement("img");
pool.className = "targets";
pool.id = "pool-id";
const trudeau = document.createElement("img");
trudeau.className = "targets";
trudeau.id = "trudeau-id";
const mask = document.createElement("img");
mask.className = "targets";
mask.id = "mask-id";
var headSettings = document.createElement("div");
headSettings.id = "head-settings";
var rule1 = document.createElement("div");
rule1.src = "./assets/img/rule1.png";
var rule2 = document.createElement("div");
rule2.src = "./assets/img/rule2.png";
var characterSettings = document.createElement("div");
characterSettings.id = "character-settings";

var volume = document.createElement("div");
var rules = document.createElement("div");

var textSettings = document.createElement("div");
textSettings.innerText = "Choose your charactere";
textSettings.className = "txt-settings";

settings.append(headSettings, textSettings, characterSettings);
headSettings.append(rule1, rule2);
characterSettings.append(mask, bieber, dion, pool, trudeau);

coinSrc = "./assets/videos/coin.gif";
mask.src = "./assets/img/mask.png";
bieber.src = "./assets/img/bieber.png";
dion.src = "./assets/img/dion.png";
pool.src = "./assets/img/pool.png";
trudeau.src = "./assets/img/trudeau.png";

Target.src = mask.src;
Target2.src = mask.src;
Target.id = "target";
Target2.id = "target2";

var speed = 3000;
const randomLeft = 0;
const randomTop = 0;

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

//--------------------------------data-------------------------------------/
var highScore = [];

// // ///////////////

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
var dataMcLength = document.createElement("span")
mcValue = 0


const dataTimer = document.createElement("div");
var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");

const dataLeaderBoard = document.createElement("div");

dataScoreString.id = "score-string";
dataScoreLength.id = "score-length";
dataLvlLength.id = "lvl-length";
dataScore.id = "score";
dataPnl.id = "pnl";
dataPnlString.id = "pnlString";
dataPnlLength.id = "pnlLength";
var dataPnlValue = 10;
dataLvl.id = "lvl";
dataMc.id = "mc";
dataMcLength.id = "mc-length"
dataTimer.id = "timer";
dataLeaderBoard.id = "leaderboard";
// dataTimerMin.id = "min";
// dataTimerSec.id = "sec";

dataScoreString.innerText = "Score -> ";
// document.getElementById("score-length").innerText = dataScoreValue

dataPnlString.innerText = "Point until next LvL -> ";

dataLvl.innerText = "Level -> ";

dataMcString.innerText = "Miss Click -> ";

dataTimer.innerText = "Timer -> ";

dataLeaderBoard.innerText = "Leaderboard";

var dataTimerMin = document.createElement("span");
var dataTimerSec = document.createElement("span");
dataTimerMin.innerText = "01";
dataTimerSec.innerText = "00";
dataTimer.append(dataTimerMin, " : ", dataTimerSec);

data.append(dataScore, dataPnl, dataLvl, dataMc, dataTimer, dataLeaderBoard);
dataScore.append(dataScoreString, dataScoreLength);
dataPnl.append(dataPnlString, dataPnlLength);
dataLvl.append(dataLvlString, dataLvlLength);
dataMc.append(dataMcString, dataMcLength);
///////////// hs story///////////////////////
const div1 = document.createElement("div");
div1.id = "1";
div1.title = ""
var namehighScore = document.createElement("p");
namehighScore.id = "namehighScore";

var lvlhighScore = document.createElement("p");
lvlhighScore.id = "lvlhighScore";

var scorehighScore = document.createElement("p");
scorehighScore.id = "scorehighScore";

var separation = document.createElement("p");
separation.id = "separation";

div1.append(namehighScore, lvlhighScore, scorehighScore, separation);

const div2 = document.createElement("div");
div2.id = "2";
div2.title = ""
var namehighScore2 = document.createElement("p");
namehighScore2.id = "namehighScore2";

var lvlhighScore2 = document.createElement("p");
lvlhighScore2.id = "lvlhighScore2";

var scorehighScore2 = document.createElement("p");
scorehighScore2.id = "scorehighScore2";

var separation2 = document.createElement("p");
separation2.id = "separation2";

div2.append(namehighScore2, lvlhighScore2, scorehighScore2, separation2);

const div3 = document.createElement("div");
div3.id = "3";
div3.title = ""
var namehighScore3 = document.createElement("p");
namehighScore3.id = "namehighScore3";

var lvlhighScore3 = document.createElement("p");
lvlhighScore3.id = "lvlhighScore3";

var scorehighScore3 = document.createElement("p");
scorehighScore3.id = "scorehighScore3";

var separation3 = document.createElement("p");
separation3.id = "separation3";

div3.append(namehighScore3, lvlhighScore3, scorehighScore3, separation3);

const div4 = document.createElement("div");
div4.id = "4";
div4.title = ""
var namehighScore4 = document.createElement("p");
namehighScore4.id = "namehighScore4";

var lvlhighScore4 = document.createElement("p");
lvlhighScore4.id = "lvlhighScore4";

var scorehighScore4 = document.createElement("p");
scorehighScore4.id = "scorehighScore4";

var separation4 = document.createElement("p");
separation4.id = "separation4";

div4.append(namehighScore4, lvlhighScore4, scorehighScore4, separation4);

const div5 = document.createElement("div");
div5.id = "5";
var namehighScore5 = document.createElement("p");
namehighScore5.id = "namehighScore5";

var lvlhighScore5 = document.createElement("p");
lvlhighScore5.id = "lvlhighScore5";

var scorehighScore5 = document.createElement("p");
scorehighScore5.id = "scorehighScore5";

var separation5 = document.createElement("p");
separation5.id = "separation5";

div5.append(namehighScore5, lvlhighScore5, scorehighScore5, separation5);

dataLeaderBoard.append(div1, div2, div3, div4, div5);

//////////////////////////////High Score///////////////////////////////////////////////////

if (highScore == undefined) {
  console.log(
    "Looks like you got to the top five... I guess ! Your name is ? : "
  );
} else {
  highScore = getDataLocalStorage("highScores");
  function getDataLocalStorage(key) {
    var DataJSON = localStorage.getItem(key);
    if (DataJSON != null) {
      return JSON.parse(DataJSON);
    }
  }
}

function print() {
  if (highScore[0] == null) {
  } else {
    document.getElementById("namehighScore").innerText +=
      "Name :" + " " + highScore[0].newName;
    document.getElementById("lvlhighScore").innerText +=
      "Points :" + " " + highScore[0].newScore;
    document.getElementById("scorehighScore").innerText +=
      "Lvl :" + " " + highScore[0].playerLvl;
    document.getElementById("separation").innerText += "____________";
    document.getElementById("1").title = highScore[0].date;
    document.getElementById("separation").title = highScore[0].date;
  }
  if (highScore[1] == null) {
  } else {
    document.getElementById("namehighScore2").innerText +=
      "Name :" + " " + highScore[1].newName;
    document.getElementById("lvlhighScore2").innerText +=
      "Points :" + " " + highScore[1].newScore;
    document.getElementById("scorehighScore2").innerText +=
      "Lvl :" + " " + highScore[1].playerLvl;
    document.getElementById("separation2").innerText += "____________";
    document.getElementById("2").title = highScore[1].date;
    document.getElementById("separation2").title = highScore[1].date;
  }

  if (highScore[2] == null) {
  } else {
    document.getElementById("namehighScore3").innerText +=
      "Name :" + " " + highScore[2].newName;
    document.getElementById("lvlhighScore3").innerText +=
      "Points :" + " " + highScore[2].newScore;
    document.getElementById("scorehighScore3").innerText +=
      "Lvl :" + " " + highScore[2].playerLvl;
    document.getElementById("separation3").innerText += "____________";
    document.getElementById("3").title = highScore[2].date;
    document.getElementById("separation3").title = highScore[2].date;
  }

  if (highScore[3] == null) {
  } else {
    document.getElementById("namehighScore4").innerText +=
      "Name :" + " " + highScore[3].newName;
    document.getElementById("lvlhighScore4").innerText +=
      "Points :" + " " + highScore[3].newScore;
    document.getElementById("scorehighScore4").innerText +=
      "Lvl :" + " " + highScore[3].playerLvl;
    document.getElementById("separation4").innerText += "____________";
    document.getElementById("4").title = highScore[3].date;
    document.getElementById("separation4").title = highScore[3].date;
  }

  if (highScore[4] == null) {
  } else {
    document.getElementById("namehighScore5").innerText +=
      "Name :" + " " + highScore[4].newName;
    document.getElementById("lvlhighScore5").innerText +=
      "Points :" + " " + highScore[4].newScore;
    document.getElementById("scorehighScore5").innerText +=
      "Lvl :" + " " + highScore[4].playerLvl;
    document.getElementById("separation5").innerText += "____________";
    document.getElementById("5").title = highScore[4].date;
    document.getElementById("separation5").title = highScore[4].date;
  }
}
if (highScore == undefined) {
  console.log(
    "il n'y a pas encore de highscore au lancement du site pour imprimé quoi que ce soit"
  );
} else {
  print();
}

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
      song.pause();
      greatReset()
      inter = 0;

      var name = prompt(
        "Looks like you reach the top 5... I guess ! Whats your name ?"
      );
      var newDate = new Date().toLocaleString();
      var newPlayer = {
        newName: name,
        newScore: dataScoreValue,
        playerLvl: lvlValue,
        date: newDate,
      };
      if (highScore == undefined) {
        highScore = [];
      }
      if (newPlayer.newName == "") {
        newPlayer.newName = "anonyme";
      }
      if (newPlayer.newName == null) {
        newPlayer.newName = "anonyme";
      }

      highScore.push(newPlayer);
      highScore.sort((a, b) => a.newScore - b.newScore);
      highScore.reverse();
      localStorage.setItem("highScores", JSON.stringify(highScore));

      // ---------------------------------------------------------------------
      if (highScore[0] == null) {
      } else {
        document.getElementById("namehighScore").innerText =
          "Name : " + highScore[0].newName;
        document.getElementById("lvlhighScore").innerText =
          "Points : " + highScore[0].newScore;
        document.getElementById("scorehighScore").innerText =
          "Lvl : " + highScore[0].playerLvl;
        document.getElementById("separation").innerText = "____________";
        document.getElementById("1").title = highScore[0].date;
      }
      if (highScore[1] == null) {
      } else {
        document.getElementById("namehighScore2").innerText =
          "Name : " + highScore[1].newName;
        document.getElementById("lvlhighScore2").innerText =
          "Points : " + highScore[1].newScore;
        document.getElementById("scorehighScore2").innerText =
          "Lvl : " + highScore[1].playerLvl;
        document.getElementById("separation2").innerText = "____________";
        document.getElementById("2").title = highScore[1].date;
      }

      if (highScore[2] == null) {
      } else {
        document.getElementById("namehighScore3").innerText =
          "Name : " + highScore[2].newName;
        document.getElementById("lvlhighScore3").innerText =
          "Points : " + highScore[2].newScore;
        document.getElementById("scorehighScore3").innerText =
          "Lvl : " + highScore[2].playerLvl;
        document.getElementById("separation3").innerText = "____________";
        document.getElementById("3").title = highScore[2].date;
      }

      if (highScore[3] == null) {
      } else {
        document.getElementById("namehighScore4").innerText =
          "Name : " + highScore[3].newName;
        document.getElementById("lvlhighScore4").innerText =
          "Points : " + highScore[3].newScore;
        document.getElementById("scorehighScore4").innerText =
          "Lvl : " + highScore[3].playerLvl;
        document.getElementById("separation4").innerText = "____________";
        document.getElementById("4").title = highScore[3].date;
      }

      if (highScore[4] == null) {
      } else {
        document.getElementById("namehighScore5").innerText =
          "Name : " + highScore[4].newName;
        document.getElementById("lvlhighScore5").innerText =
          "Points : " + highScore[4].newScore;
        document.getElementById("scorehighScore5").innerText =
          "Lvl : " + highScore[4].playerLvl;
        document.getElementById("separation5").innerText = "____________";
        document.getElementById("5").title = highScore[4].date;

        ////////////////////////////////

        document.getElementById("target").style.display = "none"

      }
      greatReset()


    }
  }, 1000);
}

var song = MaskMp3;

h1Hover.addEventListener("click", start);

function start() {
  if (confirm("Are you REaDy for the GAME")) {
    board.style.pointerEvents = "auto";
    Target.style.left = Math.floor(Math.random() * 1100 + 1) + "px"; //Math.floor((Math.random() * 200) + 1);  Generates random number between 1 and 200
    Target.style.top = Math.floor(Math.random() * 630 + 1) + "px"; //Math.floor((Math.random() * 100) + 1);  Generates random number between 1 and 100
    timer();
    document.getElementById("lvl-length").innerText = lvlValue;
    song.play();
    Target.style.display = "block";
    document.getElementById("pnlLength").innerText = "10";
    // pointCounter();
    document.getElementById("pnlLength").style.display = "inline"
    document.getElementById("score-length").style.display = "inline"
    document.getElementById("lvl-length").style.display = "inline"
    document.getElementById("mc-length").style.display = "inline"
    

  } else {
    alert("Error404 skill not found");
  }
}

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

Target.addEventListener("mouseover", mooveTarget);

Target.addEventListener("click", function (Target) {
  mcValue--;
  // Move the target
  function randomIntFromIntervalLeft(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomLeft = randomIntFromIntervalLeft(30, 1100);

  this.style.left = randomLeft + "px";

  function randomIntFromIntervalTop(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomTop = randomIntFromIntervalTop(30, 630);

  this.style.top = randomTop + "px";

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

  this.src = coinSrc;
  this.style.pointerEvents = "none";

  this.width = "1000px";
  CoinXp.play();
  CoinXp.volume = 0.2;

  setTimeout(() => {
    this.src = Target2.src;
    this.width = "50px";
    this.style.pointerEvents = "auto";
  }, 500);

  dataScoreValue++;
  dataScoreValue++;
  document.getElementById("score-length").innerText = dataScoreValue;
});

board.addEventListener("click", missClick);


function missClick() {
  dataPnlValue++;

  document.getElementById("pnlLength").innerText = dataPnlValue;
  mcValue++;

  document.getElementById("mc-length").innerText = mcValue
  if (dataScoreValue !== 0) {
    dataScoreValue--;
    document.getElementById("score-length").innerText = dataScoreValue;
  }
}

////////////////targetssss/////////////////////////////

pool.addEventListener("click", function () {
  song.pause();
  Target.src = pool.src;
  Target2.src = pool.src;
  song = PoolMp3;
  song.play();
});
mask.addEventListener("click", function () {
  song.pause();
  Target.src = mask.src;
  Target2.src = mask.src;
  song = MaskMp3;
  song.play();
});
dion.addEventListener("click", function () {
  song.pause();
  Target.src = dion.src;
  Target2.src = dion.src;
  song = DionMp3;
  song.play();
});
trudeau.addEventListener("click", function () {
  song.pause();
  Target.src = trudeau.src;
  Target2.src = trudeau.src;
  song = TrudeauMp3;
  song.play();
});
bieber.addEventListener("click", function () {
  song.pause();
  Target.src = bieber.src;
  Target2.src = bieber.src;
  song = BieberMp3;
  song.play();
});

////great reset/////////////

function greatReset() {
  Chrono = {
    min: { val: 0, DOM: dataTimerMin },
    sec: { val: 60, DOM: dataTimerSec },
  };


  dataPnlValue = 10
  document.getElementById("pnlLength").style.display = "none" // a remettre en block dans start()
  document.getElementById("pnlLength").innerText = dataPnlValue
  

  dataScoreValue = 0;
  document.getElementById("score-length").style.display = "none"// a remettre en block dans start()
  document.getElementById("score-length").innerText = dataScoreValue
  

  lvlValue = 1;
  document.getElementById("lvl-length").style.display = "none"// a remettre en block dans start()
  document.getElementById("lvl-length").innerText = lvlValue

  mcValue = 0
  document.getElementById("mc-length").style.display = "none" // a remettre en block dans start() 
  document.getElementById("mc-length").innerText = mcValue
}

