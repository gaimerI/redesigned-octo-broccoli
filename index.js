let deviceMotionAccelX;
let deviceMotionAccelY;
let deviceMotionAccelZ;
let deviceRotationRateA;
let deviceRotationRateB;
let deviceRotationRateC;
let deviceMotionInterval;

let geolocationCoords = {"latitude": "unknown", "longitude": "unknown", "accuracy": "unknown"};


window.addEventListener("devicemotion", (event) => {
  deviceMotionAccelX = event.acceleration.x;
  deviceMotionAccelY = event.acceleration.y;
  deviceMotionAccelZ = event.acceleration.z;
  deviceRotationRateA = event.rotationRate.alpha;
  deviceRotationRateB = event.rotationRate.beta;
  deviceRotationRateC = event.rotationRate.gamma;
  deviceMotionInterval = event.interval;
});

function successGeolocation(pos) {
  geolocationCoords.latitude = pos.coords.latitude;
  geolocationCoords.longitude = pos.coords.longitude;
  geolocationCoords.accuracy = pos.coords.accuracy;
}

function errorGeolocation(err) {
 alert(err.message);
}

class gaimeriWebAPIExtension {
  getInfo() {
    return {
      id: 'gaimeriwebapiextension',
      name: 'Web APIs',
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: '"⚠️" means a non-standard or deprecated function',
        },
        '---',
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Device Orientation API',
        },
        {
          opcode: 'deviceAccelerationX',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device acceleration x',
          disableMonitor: false
        },
        {
          opcode: 'deviceAccelerationY',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device acceleration y',
          disableMonitor: false
        },
        {
          opcode: 'deviceAccelerationZ',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device acceleration z',
          disableMonitor: false
        },
        {
          opcode: 'deviceRotationA',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device rotation rate alpha',
          disableMonitor: false
        },
        {
          opcode: 'deviceRotationB',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device rotation rate beta',
          disableMonitor: false
        },
        {
          opcode: 'deviceRotationC',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device rotation rate gamma',
          disableMonitor: false
        },
        {
          opcode: 'deviceMotionInterval',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device motion capture interval (ms)',
          disableMonitor: false
        },
        '---',
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Device Posture API',
        },
        {
          opcode: 'devicePostureCurrent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device posture',
          disableMonitor: true
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Device Memory API',
        },
        {
          opcode: 'deviceMemoApprox',
          blockType: Scratch.BlockType.REPORTER,
          text: 'approx. device memory (GB)',
          disableMonitor: false
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Geolocation API',
        },
        {
          opcode: 'getUserCoords',
          blockType: Scratch.BlockType.COMMAND,
          text: 'get user location'
        },
        {
          opcode: 'userLatitude',
          blockType: Scratch.BlockType.REPORTER,
          text: 'user latitude',
          disableMonitor: false
        },
        {
          opcode: 'userLongitude',
          blockType: Scratch.BlockType.REPORTER,
          text: 'user longitude',
          disableMonitor: false
        },
        {
          opcode: 'geolocationAccuracy',
          blockType: Scratch.BlockType.REPORTER,
          text: 'geolocation accuracy (m)',
          disableMonitor: false
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'Console API',
        },
        {
          opcode: 'consoleAssert',
          blockType: Scratch.BlockType.COMMAND,
          text: 'assert [CONDITION] message: [MESSAGE]',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'assertion is false 
            }
          }
        },
        {
          opcode: 'consoleClear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'clear'
        },
        {
          opcode: 'consoleCount',
          blockType: Scratch.BlockType.COMMAND,
          text: 'count [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'default'
            }
          }
        },
        {
          opcode: 'consoleCountReset',
          blockType: Scratch.BlockType.COMMAND,
          text: 'reset count [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'default'
            }
          }
        },
      ]
    };
  }
  deviceAccelerationX(){
    return deviceMotionAccelX;
  }

  deviceAccelerationY(){
    return deviceMotionAccelY;
  }

  deviceAccelerationZ(){
    return deviceMotionAccelZ;
  }

  deviceRotationA(){
    return deviceRotationRateA;
  }

  deviceRotationB(){
    return deviceRotationRateB;
  }

  deviceRotationC(){
    return deviceRotationRateC;
  }

  deviceMotionInterval(){
    return deviceMotionInterval;
  }

  deviceMemoApprox(){
    return navigator.deviceMemory;
  }

  devicePostureCurrent(){
    return navigator.devicePosture.type;
  }

  getUserCoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  userLatitude() {
    return geolocationCoords.latitude;
  }

  userLongitude() {
    return geolocationCoords.longitude;
  }

  geolocationAccuracy() {
    return geolocationCoords.accuracy;
  }

  consoleAssert(args) {
    console.assert(args.CONDITION, args.MESSAGE);
  }

  consoleClear() {
    console.clear;
  }

  consoleCount(args) {
    console.count(args.LABEL);
  }

  consoleCountReset(args) {
    console.countReset(args.LABEL);
  }

}

Scratch.extensions.register(new gaimeriWebAPIExtension());
