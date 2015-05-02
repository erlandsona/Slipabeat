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
