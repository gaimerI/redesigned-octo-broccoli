class gaimeriVectorExtension {
  getInfo() {
    return {
      id: "gaimeriVectorExtension",
      name: "Vectors",
      blocks: [
        {
          opcode: 'newVector2D',
          blockType: BlockType.REPORTER,
          text: 'new vector2D [X] [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
      ]
    }
  }

  newVector2D
}

Scratch.extensions.register(new gaimeriVectorExtension())
