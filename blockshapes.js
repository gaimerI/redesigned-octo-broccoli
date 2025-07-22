(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "test",
        name: "BlockShape Test",
        blocks: [{
            opcode: 'round',
            text: 'ROUND (string/number)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
          },
          {
            opcode: 'hexagonal',
            text: 'HEXAGONAL (boolean)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.HEXAGONAL,
          },
          {
            opcode: 'square',
            text: 'SQUARE (array)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
          },
          {
            opcode: 'leaf',
            text: 'LEAF (vector)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.LEAF,
          },
          {
            opcode: 'plus',
            text: 'PLUS (object)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.PLUS,
          },
          {
            opcode: 'octagonal',
            text: 'OCTAGONAL (new!) (target/class)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.OCTAGONAL,
          },
          {
            opcode: 'bumped',
            text: 'BUMPED (new!) (BigInt)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.BUMPED,
          },
          {
            opcode: 'indented',
            text: 'INDENTED (new!) (symbol)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.INDENTED,
          },
          {
            opcode: 'scrapped',
            text: 'SCRAPPED (new!) (map)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
          },
          {
            opcode: 'arrow',
            text: 'ARROW (new!) (set)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ARROW,
          },
          {
            opcode: 'ticket',
            text: 'TICKET (new!) (date)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.TICKET,
          },
          '---',
          {
            opcode: 'roundInput',
            text: 'ROUND [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.ROUND
              }
            }
          },
          {
            opcode: 'hexagonalInput',
            text: 'HEXAGONAL [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.HEXAGONAL,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.HEXAGONAL
              }
            }
          },
          {
            opcode: 'squareInput',
            text: 'SQUARE [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.SQUARE
              }
            }
          },
          {
            opcode: 'leafInput',
            text: 'LEAF [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.LEAF,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.LEAF
              }
            }
          },
          {
            opcode: 'plusInput',
            text: 'PLUS [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.PLUS,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.PLUS
              }
            }
          },
          {
            opcode: 'octagonalInput',
            text: 'OCTAGONAL [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.OCTAGONAL,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.OCTAGONAL
              }
            }
          },
          {
            opcode: 'bumpedInput',
            text: 'BUMPED [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.BUMPED,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.BUMPED
              }
            }
          },
          {
            opcode: 'indentedInput',
            text: 'INDENTED [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.INDENTED,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.INDENTED
              }
            }
          },
          {
            opcode: 'scrappedInput',
            text: 'SCRAPPED [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.SCRAPPED
              }
            }
          },
          {
            opcode: 'arrowInput',
            text: 'ARROW [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ARROW,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.ARROW
              }
            }
          },
          {
            opcode: 'ticketInput',
            text: 'TICKET [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.TICKET,
            arguments: {
              VALUE: {
                shape: Scratch.BlockShape.TICKET
              }
            }
          },
          '---',
          {
            opcode: 'alignmentTest',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: [
              'this block tests alignments',
              'left',
              'middle',
              'right'
            ],
            branchCount: 3,
            alignments: [
              null,
              null,
              Scratch.ArgumentAlignment.LEFT,
              null,
              Scratch.ArgumentAlignment.CENTER,
              null,
              Scratch.ArgumentAlignment.RIGHT
            ]
          },
          {
  opcode: 'roundBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.ROUND,
  text: ['round', 'branch'],
  branchCount: 1,
},
{
  opcode: 'hexagonalBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.HEXAGONAL,
  text: ['hexagonal', 'branch'],
  branchCount: 1,
},
{
  opcode: 'squareBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SQUARE,
  text: ['square', 'branch'],
  branchCount: 1,
},
{
  opcode: 'leafBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.LEAF,
  text: ['leaf', 'branch'],
  branchCount: 1,
},
{
  opcode: 'plusBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.PLUS,
  text: ['plus', 'branch'],
  branchCount: 1,
},
{
  opcode: 'octagonalBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.OCTAGONAL,
  text: ['octagonal', 'branch'],
  branchCount: 1,
},
{
  opcode: 'bumpedBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.BUMPED,
  text: ['bumped', 'branch'],
  branchCount: 1,
},
{
  opcode: 'indentedBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.INDENTED,
  text: ['indented', 'branch'],
  branchCount: 1,
},
{
  opcode: 'scrappedBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SCRAPPED,
  text: ['scrapped', 'branch'],
  branchCount: 1,
},
{
  opcode: 'arrowBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.ARROW,
  text: ['arrow', 'branch'],
  branchCount: 1,
},
{
  opcode: 'ticketBranched',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.TICKET,
  text: ['ticket', 'branch'],
  branchCount: 1,
},
                 {
  opcode: 'roundBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.ROUND,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'hexagonalBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.HEXAGONAL,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'squareBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SQUARE,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'leafBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.LEAF,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'plusBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.PLUS,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'octagonalBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.OCTAGONAL,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'bumpedBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.BUMPED,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'indentedBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.INDENTED,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'scrappedBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SCRAPPED,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'arrowBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.ARROW,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
{
  opcode: 'ticketBranchedBig',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.TICKET,
  text: ['first', 'second', 'third', 'how many can we do', 'Did you know that the human heart beats approximately 100,000 times each day?', 'Did you know that honeybees can recognize human faces?', 'okay this is a lot already', '', '', '', '', 'end'],
  branchCount: 12,
},
                 {
  opcode: 'mixedBranches',
  text: 'mixed branches',
  blockType: Scratch.BlockType.COMMAND,
  branches: [
    {},
    {accepts: 'switchCase'}
  ],
  notchAccepts: 'switchCase'
                 }
        ]
      }
    }
    round() {
      return 'Hello, World!';
    }
    hexagonal() {
      return true;
    }
    square() {
      return [1, 2, 3].toString();
    }
    leaf() {
      return {
        x: 3,
        y: 3
      }.toString();
    }
    plus() {
      return {
        key: 'value'
      }.toString();
    }
    octagonal(args, util) {
      return util.target.getName().toString();
    }
    bumped() {
      return BigInt(9007199254740991).toString();
    }
    indented() {
      return Symbol('foo').toString();
    }
    scrapped() {
      return new Map([
        ["foo", "Foo"],
        ["bar", "Bar"]
      ]).toString();
    }
    arrow() {
      return new Set(["Foo", "Bar"]).toString();
    }
    ticket() {
      return new Date(8.64e15).toString();
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);
