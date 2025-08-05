(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "test",
        name: "Dates",
        blocks: [{
            opcode: 'notchTest',
            text: 'custom notch?',
            blockType: Scratch.BlockType.COMMAND,
            notchShape: Scratch.BlockShape.TICKET
          },
        ]
      }
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);
