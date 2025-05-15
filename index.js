let deviceMotionAccelX;
let deviceMotionAccelY;
let deviceMotionAccelZ;
let deviceRotationRateA;
let deviceRotationRateB;
let deviceRotationRateC;
let deviceMotionInterval;

let geolocationCoords = {"latitude": "unknown", "longitude": "unknown", "accuracy": "unknown"};

// =====
// This extension modifies the console methods, for it to be able to read them. This should not break anything.
// =====

let consoleLoggedMessages = [];
const originalConsoleLog = console.log;
const originalConsoleInfo = console.info;
const originalConsoleError = console.error;
const originalConsoleDebug = console.debug;
const originalConsoleTimeLog = console.timeLog;
const originalConsoleAssert = console.assert;
const originalConsoleCount = console.count;

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

console.log = function(...args) {
  consoleLoggedMessages.push(args.join(' '));
  originalConsoleLog.apply(console, args);
};

console.info = function(...args) {
  consoleLoggedMessages.push(args.join(' '));
  originalConsoleInfo.apply(console, args);
};

console.error = function(...args) {
  consoleLoggedMessages.push(args.join(' '));
  originalConsoleError.apply(console, args);
};

console.debug = function(...args) {
  consoleLoggedMessages.push(args.join(' '));
  originalConsoleDebug.apply(console, args);
};

console.timeLog = function(label, ...args) {
  consoleLoggedMessages.push(`TimeLog [${label}]: ${args.join(' ')}`);
  originalConsoleTimeLog.apply(console, [label, ...args]);
};

console.assert = function(condition, ...args) {
  if (!condition) {
    consoleLoggedMessages.push(`Assert failed: ${args.join(' ')}`);
    originalConsoleAssert.apply(console, args);
  }
};

console.count = function(label) {
  consoleLoggedMessages.push(`Count [${label}]: ${label}`);
  originalConsoleCount.call(console, label);
};

class gaimeriWebAPIExtension {
  getInfo() {
    return {
      id: 'gaimeriwebapiextension',
      name: 'Web APIs',
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: `"⚠" means a non-standard or
          deprecated function`,
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: 'deprecated function',
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
              defaultValue: 'assertion is false'
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
        {
          opcode: 'consoleDebug',
          blockType: Scratch.BlockType.COMMAND,
          text: 'debug [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            }
          }
        },
        {
          opcode: 'consoleLogRaw',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log object [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"Hello": "World!", "foo": "bar"}'
            }
          }
        },
        {
          opcode: 'seeConsoleMessages',
          blockType: Scratch.BlockType.REPORTER,
          text: 'console data',
        },
        {
          opcode: 'consoleError',
          blockType: Scratch.BlockType.COMMAND,
          text: 'error [MESSAGE]',
          disableMonitor: true,
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'An error has occurred'
            }
          }
        },
        {
          opcode: 'consoleException',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ exception [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'An exception has occurred'
            }
          }
        },
        {
          opcode: 'consoleGroup',
          blockType: Scratch.BlockType.COMMAND,
          text: 'new uncollapsed group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'group name'
            }
          }
        },
        {
          opcode: 'consoleGroupClosed',
          blockType: Scratch.BlockType.COMMAND,
          text: 'new collapsed group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'group name'
            }
          }
        },
        {
          opcode: 'consoleGroupExit',
          blockType: Scratch.BlockType.COMMAND,
          text: 'exit current group'
        },
        {
          opcode: 'consoleInfo',
          blockType: Scratch.BlockType.COMMAND,
          text: 'info [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Also try DinosaurMod'
            }
          }
        },
        {
          opcode: 'consoleLog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'sjksuzvslozvxb'
            }
          }
        },
        {
        opcode: 'consoleProfile',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ start recording profile [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'profile name'
            }
          }
        },
        {
          opcode: 'consoleProfileEnd',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ stop recording group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'profile name'
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
          successGeolocation(position);
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
    consoleLoggedMessages = new Array();
  }

  consoleCount(args) {
    console.count(args.LABEL);
  }

  consoleCountReset(args) {
    console.countReset(args.LABEL);
  }

  consoleDebug(args) {
    console.debug(args.MESSAGE);
  }

  consoleLogRaw(args) {
    console.dir(args.MESSAGE);
  }

  seeConsoleMessages() {
    return JSON.stringify(consoleLoggedMessages);
  }

  consoleError(args) {
    console.error(args.MESSAGE);
  }

  consoleException(args) {
    console.exception(args.MESSAGE);
  }

  consoleGroup(args) {
    console.group(args.LABEL);
  }

  consoleGroupClosed(args) {
    console.groupCollapsed(args.LABEL);
  }

  consoleGroupExit() {
    console.groupEnd();
  }

  consoleInfo(args) {
    console.info(args.MESSAGE);
  }

  consoleLog(args) {
    console.log(args.MESSAGE);
  }

  consoleProfile(args) {
    console.profile(args.LABEL);
  }

  consoleProfileEnd(args) {
    console.profileEnd(args.LABEL);
  }

}

Scratch.extensions.register(new gaimeriWebAPIExtension());
