var colors = [];
var pickedColor;
var colorNumber = 6;
var rgb = document.getElementById("rgb");
var squares = document.querySelectorAll(".square");
var modeButtons = document.querySelectorAll(".mode");
var again = document.getElementById("again");
var display = document.querySelector("#status");
var head = document.querySelector("h1");

init();

function init() {
  setupButtons();
  setupSquares();
  reset();
}

function setupButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("changeButtonColor");
      modeButtons[1].classList.remove("changeButtonColor");
      this.classList.add("changeButtonColor");
      colorNumber = this.textContent == "EASY" ? 3: 6;
      reset();
    });
  }
  again.addEventListener("click", function(){
    reset();
  });
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
      if(this.style.backgroundColor != pickedColor) {
        this.style.backgroundColor = "black";
        display.textContent = "Try Again!";
      }else {
        display.textContent = "Correct!";
        again.textContent = "PLAY AGAIN ?"
        changeColors();
      }
    });
  }
}

function changeColors() {
  head.style.backgroundColor = pickedColor;
  for(var j = 0; j < colorNumber; j++) {
    squares[j].style.backgroundColor = pickedColor;
  }
}

function generateRandomColors(num){
  var colors = [];
  for(var i = 0; i < num; i++) {
    colors[i] = randomColorPicker();
  }
  return colors;
}

function randomColorPicker() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickTargetColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function reset() {
  again.textContent = "NEW COLORS";
  head.style.backgroundColor = "steelblue";
  colors = generateRandomColors(colorNumber);
  pickedColor = pickTargetColor();
  rgb.textContent = pickedColor;
  display.textContent = "Hi!";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
}