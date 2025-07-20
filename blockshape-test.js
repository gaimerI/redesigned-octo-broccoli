  (function(Scratch) {
  'use strict';
      /* get ScratchBlocks if availiable... */
  if (Scratch.gui) {
    Scratch.gui.getBlockly().then(ScratchBlocks => {
      SB.BlockSvg.registerCustomShape(
        "johnMyExtension-matrix",
        {
          emptyInputPath: "M 0 0 L 10 0 L 10 10 L 0 10 Z", // SVG Path (string) used for empty input slots
          emptyInputWidth: 12 * SB.BlockSvg.GRID_UNIT, // Optional hard-coded width value for 'emptyInputPath'
          leftPath: (block) => {
            /*
              required function that returns an array of SVG Paths
              to generate the left-side of the block
            */
            const blockWidth = block.edgeShapeWidth_;
            return [
              /* example */
              `a ${blockWidth} ${blockWidth} 0 0 1 0 -${2 * blockWidth}`
            ];
          },
          rightPath: (block) => {
            /*
              required function that returns an array of SVG Paths
              to generate the right-side of the block
            */
            const blockWidth = block.edgeShapeWidth_;
            return [
              /* example */
              `l ${blockWidth} ${blockWidth}`,
              `l -${blockWidth} ${blockWidth}`
            ];
          },
          blockPadding: {
            /*
              optional object to determine the padding of your shape
              'internal' determines how your shape pads with others
              'external' determines how other blocks pads with your shape

              See 'https://github.com/PenguinMod/PenguinMod-Blocks/blob/develop/core/block_render.js#L507'
              For more information about padding values
            */
            internal: {
              0: 5 * Blockly.BlockSvg.GRID_UNIT, // Field Input in custom shape
              1: 2 * Blockly.BlockSvg.GRID_UNIT, // Hexagon Input in custom shape
              2: 4 * Blockly.BlockSvg.GRID_UNIT, // Round Input in custom shape
              ... /* more optional shapes */
            },
            external: {
              0: 3 * Blockly.BlockSvg.GRID_UNIT, // Field Input in custom shape
              1: 3 * Blockly.BlockSvg.GRID_UNIT, // Hexagon Input in custom shape
              2: 1 * Blockly.BlockSvg.GRID_UNIT, // Round Input in custom shape
              /* more optional shapes */
            }
          }
        }
      );
    });
  class Extension {
    getInfo() {
      return {
        id: "johnMyExtension",
        name: "My Extension",
        blocks: [
          {
            opcode: 'logToConsole',
            text: 'log to console',
            blockType: Scratch.BlockType.COMMAND
          },
{
opcode: 'myCoolShape',
blockType: Scratch.BlockType.REPORTER,
blockShape: "johnMyExtension-matrix",
text: 'custom shape [CUSTOM_EMPTY_BLOCK]',
arguments: {
  CUSTOM_EMPTY_BLOCK: {
    type: Scratch.ArgumentType.STRING,
    shape: "johnMyExtension-matrix"
  }
}

},

          {
  opcode: 'testReporter',
  text: 'testing!',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.LEAF,
          }
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }

    myCoolShape() {
      console.log('Hello world!');
    }

    testReporter() {
      return "Hello";
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
