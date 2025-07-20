(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "gaimeri17MatrixExtension",
        name: "Matrices",
        blocks: [
          {
            opcode: 'create1DScalar',
            text: 'scalar of value [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          },
          {
            opcode: 'createZero2DMatrix',
            text: 'zero matrix of width [WIDTH] height [HEIGHT]',
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

    create1DScalar(args) {
      return Math.floor(args.VALUE);
    }
    
    createZero2DMatrix(args) {
      const matrix = Array.from({ length: args.HEIGHT }, () =>
        Array.from({ length: args.WIDTH }, () => 0));
      return JSON.stringify(matrix);
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
