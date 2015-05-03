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

chrome.usb.getDevices({}, onDeviceFound);

var bBD0000 = document.querySelector(".b-BD0000");
var aBD0000 = document.querySelector(".a-BD0000");
bBD0000.onclick = function() {
  aBD0000.play();
}
var bOH00 = document.querySelector(".b-OH00");
var aOH00 = document.querySelector(".a-OH00");
bOH00.onclick = function() {
  aOH00.play();
}
var bCH = document.querySelector(".b-CH");
var aCH = document.querySelector(".a-CH");
bCH.onclick = function() {
  aCH.play();
}
var bSD0000 = document.querySelector(".b-SD0000");
var aSD0000 = document.querySelector(".a-SD0000");
bSD0000.onclick = function() {
  aSD0000.play();
}

function setLeftToe() {
  var file = "TR808WAV/" + document.querySelector("#left-toe").value;
  console.log(file);
  document.querySelector("#left-toe-sound").src = file;
}
function setRightToe() {
  var file = "TR808WAV/" + document.querySelector("#right-toe").value;
  console.log(file);
  document.querySelector("#right-toe-sound").src = file;
}
function setLeftHeel() {
  var file = "TR808WAV/" + document.querySelector("#left-heel").value;
  console.log(file);
  document.querySelector("#left-heel-sound").src = file;
}
function setRightHeel() {
  var file = "TR808WAV/" + document.querySelector("#right-heel").value;
  console.log(file);
  document.querySelector("#right-heel-sound").src = file;
}

var leftToeSound =  document.querySelector("#left-toe-sound");
var rightToeSound =  document.querySelector("#right-toe-sound");
var leftHeelSound =  document.querySelector("#left-heel-sound");
var rightHeelSound =  document.querySelector("#right-heel-sound");

//document.querySelector("#left-toe").addEventListener("change", function() {
  //var file = "TR808WAV/" + document.querySelector("#left-toe").value;
  //console.log(file);
  //document.querySelector("#left-toe-sound").src = file;
//});

//document.querySelector("#play-left-toe").onclick = function() {
function playLeftToe() {
  document.querySelector("#left-toe-sound").play();
}
function playRightToe() {
  document.querySelector("#right-toe-sound").play();
}
function playLeftHeel() {
  document.querySelector("#left-heel-sound").play();
}
function playRightHeel() {
  document.querySelector("#right-heel-sound").play();
}

//document.querySelector("#play-right-toe").onclick = function() {
  //rightToeSound.play();
//}
//document.querySelector("#play-left-heel").onclick = function() {
  //leftHeelSound.play();
//}
//document.querySelector("#play-right-heel").onclick = function() {
  //rightHeelSound.play();
//}
