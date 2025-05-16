 let deviceMotionAccelX;
  let deviceMotionAccelY;
  let deviceMotionAccelZ;
  let deviceRotationRateA;
  let deviceRotationRateB;
  let deviceRotationRateC;
  let deviceMotionInterval;

  const menuIconURI = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2Ni4yNTgiIGhlaWdodD0iNzMuMDIxIiB2aWV3Qm94PSIwIDAgNjYuMjU4IDczLjAyMSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMTYuMDMyIDM4LjgyNnYtNC42MzJoMzQuMTk0djQuNjMyeiIgZmlsbD0iIzAwMDFmZiIvPjxwYXRoIGQ9Ik0zMC44MTMgNTMuNjA3VjE5LjQxM2g0LjYzMnYzNC4xOTR6bS0yLjMzMS0zNC4xOTQgNC42NjItNC42MzIgNC42NjIgNC42MzJ6IiBmaWxsPSIjMDFmZjAwIi8+PHBhdGggZD0iTTI3Ljk5NSA0Ny4xNjJhMS44NTcgMS44NTcgMCAwIDEtMS44NTctMS44NThsLS4wMTMtMTcuNjE2YzAtMS4wMjYuODMyLTEuODU4IDEuODU4LTEuODU4bDEwLjI5Mi4wNGMxLjAyNiAwIDEuODU4LjgzIDEuODU4IDEuODU2bC0uMTIgMTcuNjA2YTEuODU3IDEuODU3IDAgMCAxLTEuODU3IDEuODU4eiIgc3Ryb2tlPSIjMDAwIi8+PHBhdGggZD0iTTI2LjgxOSA0My4zOTV2LTE1LjM2aDEyLjYydjE1LjM2eiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIi8+PHBhdGggZD0iTTMwLjc5OCAyNy4wMDNWMjUuODNoNC42NjJ2MS4xNzN6bTEuMTcxIDE4LjI2OWExLjE2IDEuMTYgMCAxIDEgMi4zMiAwIDEuMTYgMS4xNiAwIDAgMS0yLjMyIDB6IiBmaWxsPSIjZmZmIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMS4yNSAzNi41MWMwLTE3LjYwNiAxNC4yNzMtMzEuODc5IDMxLjg3OS0zMS44NzlTNjUuMDA4IDE4LjkwNCA2NS4wMDggMzYuNTEgNTAuNzM1IDY4LjM4OSAzMy4xMjkgNjguMzg5IDEuMjUgNTQuMTE2IDEuMjUgMzYuNTF6IiBmaWxsPSJub25lIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cGF0aCBkPSJNMzMuMTY1IDkuMjYzVjQuNjMxaDQuNjMxem00LjYzMS00LjYzMmgtNC42MzFWMHptLTkuMzM3IDYzLjc1OGg0LjYzMnY0LjYzMXptNC42MzItNC42MzJ2NC42MzJoLTQuNjMyeiIgZmlsbD0icmVkIi8+PHBhdGggZD0ibTExLjQgMzYuNTEgNC42MzItNC42MzJ2OS4yNjR6bTM4LjgzOSA0LjYzMnYtOS4yNjNsNC42MyA0LjYzMXoiIGZpbGw9IiMwMDAxZmYiLz48cGF0aCBkPSJtMzcuNzE0IDUzLjYwNy00LjY2MiA0LjYzMi00LjY2Mi00LjYzMnoiIGZpbGw9IiMwMWZmMDAiLz48L2c+PC9zdmc+";

  window.addEventListener("devicemotion", (event) => {
    deviceMotionAccelX = event.acceleration.x;
    deviceMotionAccelY = event.acceleration.y;
    deviceMotionAccelZ = event.acceleration.z;
    deviceRotationRateA = event.rotationRate.alpha;
    deviceRotationRateB = event.rotationRate.beta;
    deviceRotationRateC = event.rotationRate.gamma;
    deviceMotionInterval = event.interval;
  });

  class gaimeriDeviceMotionExtension {
    getInfo() {
      return {
        id: 'gaimeriDeviceMotionExtension',
        name: 'Device Motion',
        color1: "#55e9fc",
        color2: "5595fc",
        color3: "6955fc",
        menuIconURI,
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
