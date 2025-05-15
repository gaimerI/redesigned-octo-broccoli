let deviceMotionAccelX;
window.addEventListener("devicemotion", (event) => {
  deviceMotionAccelX = event.acceleration.x;
});

class gaimeriWebAPIExtension {
  getInfo() {
    return {
      id: 'gaimeriwebapiextensio 
n',
      name: 'Web APIs',
      blocks: [
        {
          opcode: 'deviceAccelerationX',
          blockType: 

ratch.BlockType.REPORTER,
          text: 'device acceleration x',
          disableMonitor: false
        }
      ]
    };
  }
  deviceAccelerationX(){
    return deviceMotionAccelX;
  }
}

Scratch.extensions.register(new gaimeriWebAPIExtension());
