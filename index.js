class gaimeriWebAPIExtension {
  getInfo() {
    return {
      id: 'gaimeriwebapiextension',
      name: 'Web APIs',
      blocks: [
        {
          opcode: 'cookiesEnabled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'cookies enabled?',
          disableMonitor: true
        },
        {
          opcode: 'deviceMemoApprox',
          blockType: Scratch.BlockType.REPORTER,
          text: 'approx. device memory',
          disableMonitor: true
        },
        {
          opcode: 'devicePosture',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device posture',
          disableMonitor: false
        },
        {
          opcode: 'logicalProcessorAmount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'amount of logical processors available',
          disableMonitor: false
        }
      ]
    };
  }

  cookiesEnabled() {
    return navigator.cookieEnabled;
  }

  deviceMemoApprox() {
    return navigator.deviceMemory;
  }

  devicePosture(){
    return navigator.devicePosture.type;
  }

  logicalProcessorAmount(){
    return navigator.hardwareConcurrency;
  }
}

Scratch.extensions.register(new gaimeriWebAPIExtension());
