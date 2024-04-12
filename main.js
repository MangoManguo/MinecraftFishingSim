// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

// variables
let img = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

function fishBtnClicked() {
  // Steve Fish Simulator
  let character = document.getElementById("character-select").value;
  let randNum = Math.random();
  console.log(randNum);
  if (character === "steve") {
    // Fish w/ steve
    if (randNum < 0.7) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Fish w/ alex
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "villager") {
    // Fish w/ villager
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      console.log("Cod");
      img.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      console.log("Salmon");
      img.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      console.log("Tropical");
      img.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      console.log("Pufferfish");
      img.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
