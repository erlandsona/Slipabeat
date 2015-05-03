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
    if (serialObj.TOE_LEFT === 1) {
      leftToeSound.load();
      leftToeSound.play();
    } else if (serialObj.TOE_RIGHT === 1) {
      rightToeSound.load();
      rightToeSound.play();
    } else if (serialObj.HEEL_LEFT === 1) {
      leftHeelSound.load();
      leftHeelSound.play();
    } else if (serialObj.HEEL_RIGHT === 1) {
      rightHeelSound.load();
      rightHeelSound.play();
    }
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
  };
};

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
  };
};
