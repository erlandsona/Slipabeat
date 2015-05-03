'use strict';
document.addEventListener('DOMContentLoaded', function() {
  var h1 = document.getElementsByTagName('h1');
  if (h1.length > 0) {
    h1[0].innerText = h1[0].innerText + '   It\'s Working! It\'s Working! Please check the Console to make sure a device is connected:)';
  }
}, false);


function onDeviceFound (devices) {
  console.log(devices[0]);
}

//chrome.usb.getDevices({}, onDeviceFound);


var leftToeSound = document.querySelector("#left-toe-sound");
var rightToeSound = document.querySelector("#right-toe-sound");
var leftHeelSound = document.querySelector("#left-heel-sound");
var rightHeelSound = document.querySelector("#right-heel-sound");

var leftToeSelect = document.querySelector("#left-toe");
var rightToeSelect = document.querySelector("#right-toe");
var leftHeelSelect = document.querySelector("#left-heel");
var rightHeelSelect = document.querySelector("#right-heel");

leftToeSelect.onchange = function() {
  leftToeSound.src = "TR808WAV/" + leftToeSelect.value;
}
rightToeSelect.onchange = function() {
  rightToeSound.src = "TR808WAV/" + rightToeSelect.value;
}
leftHeelSelect.onchange = function() {
  leftHeelSound.src = "TR808WAV/" + leftHeelSelect.value;
}
rightHeelSelect.onchange = function() {
  rightHeelSound.src = "TR808WAV/" + rightHeelSelect.value;
}

document.querySelector("#play-left-toe").onclick = function() {
  leftToeSound.play();
}
document.querySelector("#play-right-toe").onclick = function() {
  rightToeSound.play();
}
document.querySelector("#play-left-heel").onclick = function() {
  leftHeelSound.play();
}
document.querySelector("#play-right-heel").onclick = function() {
  rightHeelSound.play();
}
