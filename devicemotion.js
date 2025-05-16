let deviceMotionAccelX;
let deviceMotionAccelY;
let deviceMotionAccelZ;
let deviceRotationRateA;
let deviceRotationRateB;
let deviceRotationRateC;
let deviceMotionInterval;

const menuIconURI = data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MS4zMzAyNiIgaGVpZ2h0PSI3OC44MzAyNSIgdmlld0JveD0iMCwwLDcxLjMzMDI2LDc4LjgzMDI1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjMzNDg3LC0xNDAuNTg0ODgpIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMjEuNTQyNDQsMTgyLjUwMDAxdi01aDM2LjkxNTEzdjV6IiBmaWxsPSIjMDAwMWZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzcuNSwxOTguNDU3NTd2LTM2LjkxNTEyaDV2MzYuOTE1MTJ6IiBmaWxsPSIjMDFmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzQuOTgzNDksMTYxLjU0MjQ0bDUuMDMzMDMsLTVsNS4wMzMwMyw1eiIgZmlsbD0iIzAxZmYwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM0LjQ1Nzk2LDE5MS40OTkwM2MtMS4xMDczNywwIC0yLjAwNTA4LC0wLjg5NzcxIC0yLjAwNTA4LC0yLjAwNTA5bC0wLjAxMzc3LC0xOS4wMTgzM2MwLC0xLjEwNzM3IDAuODk3NzEsLTIuMDA1MDggMi4wMDUwOCwtMi4wMDUwOGwxMS4xMTE2MiwwLjA0MjA1YzEuMTA3MzcsMCAyLjAwNTA4LDAuODk3NzEgMi4wMDUwOCwyLjAwNTA4bC0wLjEyOTIsMTkuMDA2NzNjMCwxLjEwNzM3IC0wLjg5NzcxLDIuMDA1MDggLTIuMDA1MDksMi4wMDUwOHoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIzMy4xODg4OCwxODcuNDMyNjN2LTE2LjU4MTUyaDEzLjYyMjI0djE2LjU4MTUyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjM3LjQ4MzQ5LDE2OS43MzYxNXYtMS4yNjU2MWg1LjAzMzAzdjEuMjY1NjF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTIzOC43NDY4MywxODkuNDU5MjVjMCwtMC42OTIxMSAwLjU2MTA2LC0xLjI1MzE3IDEuMjUzMTcsLTEuMjUzMTdjMC42OTIxMSwwIDEuMjUzMTcsMC41NjEwNiAxLjI1MzE3LDEuMjUzMTdjMCwwLjY5MjExIC0wLjU2MTA2LDEuMjUzMTggLTEuMjUzMTcsMS4yNTMxOGMtMC42OTIxMSwwIC0xLjI1MzE3LC0wLjU2MTA3IC0xLjI1MzE3LC0xLjI1MzE4eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0yMDUuNTg0ODcsMTgwLjAwMDAxYzAsLTE5LjAwNjk1IDE1LjQwODE4LC0zNC40MTUxMyAzNC40MTUxMywtMzQuNDE1MTNjMTkuMDA2OTUsMCAzNC40MTUxMywxNS40MDgxOCAzNC40MTUxMywzNC40MTUxM2MwLDE5LjAwNjk1IC0xNS40MDgxOCwzNC40MTUxMyAtMzQuNDE1MTMsMzQuNDE1MTNjLTE5LjAwNjk1LDAgLTM0LjQxNTEzLC0xNS40MDgxOCAtMzQuNDE1MTMsLTM0LjQxNTEzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxwYXRoIGQ9Ik0yNDAuMDM4MzMsMTUwLjU4NDg4di01aDV6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDUuMDM4MzMsMTQ1LjU4NDg4aC01di01eiIgZmlsbD0iI2ZmMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjM0Ljk1ODg0LDIxNC40MTUxM2g1djV6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzkuOTU4ODQsMjA5LjQxNTEzdjVoLTV6IiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMTYuNTQyNDQsMTgwLjAwMDAxbDUsLTV2MTB6IiBmaWxsPSIjMDAwMWZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNTguNDcxMTUsMTg1LjAwMDE1di0xMGw1LDV6IiBmaWxsPSIjMDAwMWZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDQuOTUwMTgsMTk4LjQ1NzU3bC01LjAzMzAzLDVsLTUuMDMzMDMsLTV6IiBmaWxsPSIjMDFmZjAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjM1LjY2NTEzMDAwMDAwMDAwNTozOS40MTUxMjQ5OTk5OTk5OS0tPg==;

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
      color1: "#FF0000",
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
