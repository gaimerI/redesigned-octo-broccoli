(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "gaimeri17MatrixExtension",
        name: "Matrices",
        blocks: [
          {
            opcode: 'create2DMatrix',
            text: 'empty matrix of width [WIDTH] height [HEIGHT]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          }
        ]
      };
    }

    create2DMatrix(args) {
      return Array.from({ length: args.HEIGHT }, () =>
        Array.from({ length: args.WIDTH }, () => null));
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
