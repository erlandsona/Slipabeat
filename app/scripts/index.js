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

var preset = document.querySelector("#top-row select");
preset.onchange = function() {
  if (preset.value === "Preset 1") {
    leftToeSound.src = 'assets/TR808WAV/samples/d_bass.wav';
    rightToeSound.src = 'assets/TR808WAV/samples/g_bass.wav';
    leftHeelSound.src = 'assets/TR808WAV/samples/c_bass.wav';
    rightHeelSound.src = 'assets/TR808WAV/samples/e_bass.wav';
    leftToeSelect.value = 'samples/d_bass.wav';
    rightToeSelect.value = 'samples/g_bass.wav';
    leftHeelSelect.value = 'samples/c_bass.wav';
    rightHeelSelect.value = 'samples/e_bass.wav';
  } else if (preset.value === "Preset 2") {
    leftToeSound.src = 'assets/TR808WAV/samples/rim_shot.wav';
    rightToeSound.src = 'assets/TR808WAV/samples/rim_shot.wav';
    leftHeelSound.src = 'assets/TR808WAV/samples/bass_drum.wav';
    rightHeelSound.src = 'assets/TR808WAV/samples/bass_drum.wav';
    leftToeSelect.value = 'samples/rim_shot.wav';
    rightToeSelect.value = 'samples/rim_shot.wav';
    leftHeelSelect.value = 'samples/bass_drum.wav';
    rightHeelSelect.value = 'samples/bass_drum.wav';
  } else if (preset.value === "Preset 3") {
    leftToeSound.src = 'assets/TR808WAV/samples/Crash-Cymbal-2.wav';
    rightToeSound.src = 'assets/TR808WAV/samples/Crash-Cymbal-3.wav';
    leftHeelSound.src = 'assets/TR808WAV/samples/Crash-Cymbal-3.wav';
    rightHeelSound.src = 'assets/TR808WAV/samples/Crash-Cymbal-2.wav';
    leftToeSelect.value = 'samples/Crash-Cymbal-2.wav';
    rightToeSelect.value = 'samples/Crash-Cymbal-3.wav';
    leftHeelSelect.value = 'samples/Crash-Cymbal-3.wav';
    rightHeelSelect.value = 'samples/Crash-Cymbal-2.wav';
  } else if (preset.value === "Preset 4") {
    leftToeSound.src = 'assets/TR808WAV/';
    rightToeSound.src = 'assets/TR808WAV/';
    leftHeelSound.src = 'assets/TR808WAV/';
    rightHeelSound.src = 'assets/TR808WAV/';
    leftToeSelect.value = 'samples/d_bass.wav';
    rightToeSelect.value = 'samples/g_bass.wav';
    leftHeelSelect.value = 'samples/c_bass.wav';
    rightHeelSelect.value = 'samples/e_bass.wav';
  } else {
  }
}

//function whichSensor(serialData) {
//var serialData = {"HEEL_LEFT": 0, "HEEL_RIGHT": 1, "TOE_LEFT": 0, "TOE_RIGHT": 0};
  //if (serialData.HEEL_LEFT === 0) {
    
  //}
//}
//whichSensor();

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
