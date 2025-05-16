let deviceMotionAccelX;
let deviceMotionAccelY;
let deviceMotionAccelZ;
let deviceRotationRateA;
let deviceRotationRateB;
let deviceRotationRateC;
let deviceMotionInterval;

window.addEventListener("devicemotion", (event) => {
  deviceMotionAccelX = event.acceleration.x;
  deviceMotionAccelY = event.acceleration.y;
  deviceMotionAccelZ = event.acceleration.z;
  deviceRotationRateA = event.rotationRate.alpha;
  deviceRotationRateB = event.rotationRate.beta;
  deviceRotationRateC = event.rotationRate.gamma;
  deviceMotionInterval = event.interval;
}
class gaimeriDeviceMotionExtension {
  getInfo() {
    return {
      id: 'gaimeriDeviceMotionExtension',
      name: 'Device Motion',
      blocks: [
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
        }
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
}

Scratch.extensions.register(new gaimeriDeviceMotionExtension());
