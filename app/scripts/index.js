'use strict';

var leftToeSound = document.querySelector('#left-toe-sound');
var rightToeSound = document.querySelector('#right-toe-sound');
var leftHeelSound = document.querySelector('#left-heel-sound');
var rightHeelSound = document.querySelector('#right-heel-sound');

var leftToeSelect = document.querySelector('#left-toe');
var rightToeSelect = document.querySelector('#right-toe');
var leftHeelSelect = document.querySelector('#left-heel');
var rightHeelSelect = document.querySelector('#right-heel');

leftToeSelect.onchange = function() {
  leftToeSound.src = 'assets/TR808WAV/' + leftToeSelect.value;
};
rightToeSelect.onchange = function() {
  rightToeSound.src = 'assets/TR808WAV/' + rightToeSelect.value;
};
leftHeelSelect.onchange = function() {
  leftHeelSound.src = 'assets/TR808WAV/' + leftHeelSelect.value;
};
rightHeelSelect.onchange = function() {
  rightHeelSound.src = 'assets/TR808WAV/' + rightHeelSelect.value;
};

document.querySelector('#play-left-toe').onclick = function() {
  leftToeSound.load();
  leftToeSound.play();
};
document.querySelector('#play-right-toe').onclick = function() {
  rightToeSound.load();
  rightToeSound.play();
};
document.querySelector('#play-left-heel').onclick = function() {
  leftHeelSound.load();
  leftHeelSound.play();
};
document.querySelector('#play-right-heel').onclick = function() {
  rightHeelSound.load();
  rightHeelSound.play();
};

document.body.onkeypress = function(event) {
  if (event.charCode === 113) {
    leftToeSound.load();
    leftToeSound.play();
  } else if (event.charCode === 97) {
    leftHeelSound.load();
    leftHeelSound.play();
  } else if (event.charCode === 112) {
    rightToeSound.load();
    rightToeSound.play();
  } else if (event.charCode === 108) {
    rightHeelSound.load();
    rightHeelSound.play();
  } else {
  }
}




//onLeftToeTap = function() {
  //leftToeSound.load();
  //leftToeSound.play();
//};
//onRightToeTap = function() {
  //rightToeSound.load();
  //rightToeSound.play();
//};
//onLeftHeelTap = function() {
  //leftHeelSound.load();
  //leftHeelSound.play();
//};
//onRightHeelTap = function() {
  //rightHeelSound.load();
  //rightHeelSound.play();
//};
