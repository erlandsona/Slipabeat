'use strict';

var leftToeSound    = document.querySelector('#left-toe-sound'),
    rightToeSound   = document.querySelector('#right-toe-sound'),
    leftHeelSound   = document.querySelector('#left-heel-sound'),
    rightHeelSound  = document.querySelector('#right-heel-sound'),
    leftToeSelect   = document.querySelector('#left-toe'),
    rightToeSelect  = document.querySelector('#right-toe'),
    leftHeelSelect  = document.querySelector('#left-heel'),
    rightHeelSelect = document.querySelector('#right-heel'),
    SERIAL          = chrome.serial,
    serialObj       = {},
    connectionInfo,
    connectionId;



function onGetDevices (ports) {
  chrome.serial.connect(ports[5].path, function onConnect(info) {
    connectionId = info.connectionId;
    connectionInfo = info;
  });
}

var str = '';

function onReceiveCallback (arrayBuffer) {
  if (!!str.match(/'/g) && str.match(/'/g).length === 2) {
    console.log(str);
    serialObj = JSON.parse(str.replace(/'/g, ''));
    str = '';
  }
  var u8view = new Uint8Array(arrayBuffer.data);
  for (var i = 0, len = u8view.length; i < len; i++) {
    str += String.fromCharCode(u8view[i]);
  }
}

function onReceiveErrorCallback (info) {
  console.log(info);
}


SERIAL.getDevices(onGetDevices);
SERIAL.onReceive.addListener(onReceiveCallback);
SERIAL.onReceiveError.addListener(onReceiveErrorCallback);










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



