// CREATING INNER FEATURES

const elArrowBtn = document.querySelector("#arrowBtn");
const elShowBtn = document.querySelector("#showBtn");

let count = 0;

elShowBtn.addEventListener("click", () => {
  if(count == 0){
    elArrowBtn.style.transform = "translateX(-265px)";
    count++;
  } else{
    elArrowBtn.style.transform = "translateX(0px)";
    count--;
  }
});




// WORKING WITH AC BUTTON

let elOuput = document.querySelector("#outPutArea");
const elAcBtn = document.querySelector("#acBtn");
let elEmpty = "";

elAcBtn.addEventListener("click", () => {
  elOuput.innerText = "0";
  elEmpty = "";
});

// WORKING WITH REAL NUMBERS

let elNumerals = document.querySelectorAll(".numeral");
let elControl = [];

for(let i = 0; i < elNumerals.length; i++){
  elNumerals[i].addEventListener("click", function() {
    elEmpty += elNumerals[i].innerText;
    elControl.push(elNumerals[i].innerText);
    elOuput.innerText = elEmpty;
  });
}

// WORKING WITH THE PRIMITIVE FUNCTIONS

let elFunctions = document.querySelectorAll(".functionBtn");

for(let i = 0; i < elFunctions.length; i++){
  elFunctions[i].addEventListener("click", () => {
    if(elControl[elControl.length - 1] != "/" && elControl[elControl.length - 1] != "*" && elControl[elControl.length - 1] != "-" && elControl[elControl.length - 1] != "+"){
      elEmpty += elFunctions[i].innerText;
      elControl.push(elFunctions[i].innerText);
      elOuput.innerText = elEmpty;
    }
  });
}

const elEvenBtn = document.querySelector("#evenBtn");

elEvenBtn.addEventListener("click", () => {
  elOuput.innerText = eval(elEmpty);
  elEmpty = eval(elEmpty);
});

// ADDING DELETE BTN

const elDelete = document.querySelector("#deleteBtn");

elDelete.addEventListener("click", () => {
  if(elControl != 0){
    elEmpty = "";
  
    for(let i = 0; i < elControl.length - 1; i++){
      elEmpty += elControl[i];
    }
    
    elControl = Array.from(elEmpty);
  
    elOuput.innerText = elEmpty;
  }
});

// SIN BTN

const elSinBtn = document.querySelector("#sinBtn");

elSinBtn.addEventListener("click", () => {
  elEmpty = Math.sin(eval(elEmpty));
  elOuput.innerText = elEmpty;
});

// COS BTN

const elCosBtn = document.querySelector("#elCos");
elCosBtn.addEventListener("click", () => {
  elEmpty = Math.cos(eval(elEmpty));
  elOuput.innerText = elEmpty;
}); 

// TAN BTN

const elTanbtn = document.querySelector("#tanBtn");

elTanbtn.addEventListener("click", () => {
  elEmpty = Math.tan(eval(elEmpty));
  elOuput.innerText = elEmpty;
});

// FACTORIAL BTN

const elFactorialBtn = document.querySelector("#factorialBtn");

elFactorialBtn.addEventListener("click", () => {
  let elOne = 1;
  for(let i = 1; i <= Number(elEmpty); i++){
    elOne *= i;
  }

  elEmpty = elOne;
  elOuput.innerText = elEmpty;
});

// PI BTN

const elPiBtn = document.querySelector("#piBtn");

elPiBtn.addEventListener("click", () => {
  elEmpty = Math.PI;

  elOuput.innerText = elEmpty;
});

// LOG BTN

const elLogBtn = document.querySelector("#logBtn");

elLogBtn.addEventListener("click", () => {
  elEmpty = Math.log(eval(elEmpty));

  elOuput.innerText = elEmpty;
});

// SQUARE BTN

const elSquareBtn = document.querySelector("#squareBtn");

elSquareBtn.addEventListener("click", () => {
  elEmpty = Math.sqrt(eval(elEmpty));

  elOuput.innerText = elEmpty;
});

// E BTN

const elEBtn = document.querySelector("#eBtn");

elEBtn.addEventListener("click", () => {
  elEmpty = "2.71828182846";

  elOuput.innerText = elEmpty;
});

// POW BTN

const elPowBtn = document.querySelector("#powBtn");

elPowBtn.addEventListener("click", () => {
  elEmpty = Math.pow(eval(elEmpty), 2);

  elOuput.innerText = elEmpty;
});