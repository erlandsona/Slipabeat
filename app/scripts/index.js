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
  aOH00.play()
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
