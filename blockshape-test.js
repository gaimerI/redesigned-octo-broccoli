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
          },
          {
            opcode: 'create2DIdentityMatrix',
            text: 'identity matrix of size [SIZE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              SIZE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'multiply2DMatrixByScalar',
            text: 'multiply matrix [MATRIX] by scalar [SCALAR]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              MATRIX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[[1,2],[3,4]]'
              },
              SCALAR: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'transpose2DMatrix',
            text: 'transpose matrix [MATRIX]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              MATRIX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[[1,2],[3,4]]'
              }
            }
          },
          {
            opcode: 'map2DMatrix',
            text: 'map matrix [MATRIX] with [FUNCTION] and argument [ARGUMENT]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              MATRIX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[[1,2],[3,4]]'
              },
              FUNCTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MAP_FUNCTIONS'
              },
              ARGUMENT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
          }
        ],
        menus: {
          MAP_FUNCTIONS: {
            acceptReporters: false,
            items: [
          }
        }
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

    create2DIdentityMatrix(args) {
      const matrix = Array.from({ length: args.SIZE }, (_, i) => 
        Array.from({ length: args.SIZE }, (_, j) => (i === j ? 1 : 0))
      );
      return JSON.stringify(matrix);
    }

    multiply2DMatrixByScalar(args) {
      const matrix = JSON.parse(args.MATRIX);
      if (!Array.isArray(matrix)) {
        return;
      }
      const scalar = args.SCALAR;
      const newMatrix = matrix.map(row => row.map(value => value * scalar));
      return JSON.stringify(newMatrix);
    }

    transpose2DMatrix(args) {
      const matrix = JSON.parse(args.MATRIX);
      if (!Array.isArray(matrix) || !matrix.length || !Array.isArray(matrix[0])) {
        throw new Error("Input must be a 2D array (matrix).");
      }
      const rows = matrix.length;
      const cols = matrix[0].length;
      const transposed = Array.from({ length: cols }, () => Array(rows).fill(0));
      // Fill the transposed matrix
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          transposed[j][i] = matrix[i][j];
        }
      }
      return JSON.stringify(transposed);
    }
  }

Scratch.extensions.register(new Extension());
})(Scratch);
