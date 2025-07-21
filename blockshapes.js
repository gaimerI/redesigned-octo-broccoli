(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "test",
        name: "BlockShape Test",
        blocks: [
          {
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
            text: 'OCTAGONAL [new!] (target/class)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.OCTAGONAL,
          },
          {
            opcode: 'bumped',
            text: 'BUMPED [new!] (BigInt)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.BUMPED,
          },
          {
            opcode: 'indented',
            text: 'INDENTED [new!] (symbol)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.INDENTED,
          },
          {
            opcode: 'scrapped',
            text: 'SCRAPPED [new!] (map)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SCRAPPED,
          },
          {
            opcode: 'arrow',
            text: 'ARROW [new!] (set)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ARROW,
          },
          {
            opcode: 'ticket',
            text: 'TICKET [new!] (date)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.TICKET,
          },
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
      return [1,2,3].toString();
    }

    leaf() {
      return { x: 3, y: 3 }.toString();
    }

    plus() {
      return { key: 'value' }.toString();
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
      return new Map([["foo", "Foo"], ["bar", "Bar"]]).toString();
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
