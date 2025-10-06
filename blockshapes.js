function getMatrix(MATRIX) {
    return MATRIX instanceof MatrixType ? MATRIX.matrix : MATRIX
}

function deepCopyMatrix(matrix) {
    return matrix.map(row => row.slice());
}

class MatrixType {
    constructor(matrix) {
        this.matrix = matrix;
    }

    toString() {
        return this.matrix.toString();
    }

    toReporterContent() {
        const root = document.createElement('table');
        root.style.borderCollapse = 'collapse';
        root.style.margin = '4px 0';
        root.style.fontSize = '12px';

        if (Array.isArray(this.matrix)) {
            this.matrix.forEach(rowData => {
                const row = document.createElement('tr');
                if (Array.isArray(rowData)) {
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.textContent = cellData;
                        cell.style.border = '1px solid #ccc';
                        cell.style.padding = '2px 6px';
                        cell.style.textAlign = 'center';
                        row.appendChild(cell);
                    });
                }
                root.appendChild(row);
            });
        }

        return root;
    }
}

class Extension {
    getInfo() {
        return {
            id: 'gaimeri17MatrixExtension',
            name: 'Matrices',
            blocks: [
                {
                    text: 'Creation',
                    blockType: Scratch.BlockType.LABEL
                },
                {
                    opcode: 'matrixFromArray',
                    text: 'nested array [ARRAY] to matrix',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.SQUARE,
                    arguments: {
                        ARRAY: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '[[1,2,3],[4,5,6],[7,8,9]]',
                            exemptFromNormalization: true
                        }
                    }
                },
                {
                    opcode: 'emptyMatrixOfSize',
                    text: 'empty matrix with width [WIDTH] height [HEIGHT]',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.SQUARE,
                    arguments: {
                        WIDTH: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3',
                            exemptFromNormalization: true
                        },
                        HEIGHT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3',
                            exemptFromNormalization: true
                        },
                    }
                },
                {
                    text: 'Modification',
                    blockType: Scratch.BlockType.LABEL
                },
                {
                    opcode: 'setItemInMatrix',
                    text: 'set row [ROW] col [COL] of [MATRIX] to [VALUE]',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.SQUARE,
                    arguments: {
                        ROW: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                            exemptFromNormalization: true
                        },
                        COL: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                            exemptFromNormalization: true
                        },
                        VALUE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2,
                            exemptFromNormalization: true
                        },
                        MATRIX: {
                            shape: Scratch.BlockShape.SQUARE,
                            exemptFromNormalization: true
                        },
                    }
                },
                {
                    text: 'Values',
                    blockType: Scratch.BlockType.LABEL
                },
                {
                    opcode: 'getItemInMatrix',
                    text: 'get row [ROW] col [COL] of [MATRIX]',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.ROUND,
                    arguments: {
                        ROW: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                            exemptFromNormalization: true
                        },
                        COL: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1,
                            exemptFromNormalization: true
                        },
                        MATRIX: {
                            shape: Scratch.BlockShape.SQUARE,
                            exemptFromNormalization: true
                        },
                    }
                },
                {
                    opcode: 'widthOfMatrix',
                    text: 'width of [MATRIX]',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.ROUND,
                    arguments: {
                        MATRIX: {
                            shape: Scratch.BlockShape.SQUARE,
                            exemptFromNormalization: true
                        },
                    }
                },
                {
                    opcode: 'heightOfMatrix',
                    text: 'height of [MATRIX]',
                    blockType: Scratch.BlockType.REPORTER,
                    blockShape: Scratch.BlockShape.ROUND,
                    arguments: {
                        MATRIX: {
                            shape: Scratch.BlockShape.SQUARE,
                            exemptFromNormalization: true
                        },
                    }
                },
            ]
        }
    }
    matrixFromArray({ ARRAY }) {
        const parsed = JSON.parse(ARRAY);
        return new MatrixType(parsed);
    }
    
    emptyMatrixOfSize({ WIDTH, HEIGHT }) {
        const matrix = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0));
        return new MatrixType(matrix);
    }

    setItemInMatrix({ ROW, COL, MATRIX, VALUE }) {
        const actualMatrix = deepCopyMatrix(getMatrix(MATRIX));
        if (!Array.isArray(actualMatrix)) {
            return "";
        }
        if (
            COL < 1 ||
            COL > actualMatrix.length ||
            ROW < 1 ||
            ROW > actualMatrix[COL - 1].length
        ) {
            return MATRIX;
        }
        actualMatrix[ROW - 1][COL - 1] = VALUE;
        return new MatrixType(actualMatrix);
    }

    widthOfMatrix({ MATRIX }) {
        return getMatrix(MATRIX)[0].length;
    }

    heightOfMatrix({ MATRIX }) {
        return getMatrix(MATRIX).length;
    }

    getItemInMatrix({ ROW, COL, MATRIX, VALUE }) {
        const actualMatrix = getMatrix(MATRIX);
        if (!Array.isArray(actualMatrix)) {
            return "";
        }
        if (
            COL < 1 ||
            COL > actualMatrix.length ||
            ROW < 1 ||
            ROW > actualMatrix[COL - 1].length
        ) {
            return MATRIX;
        }
        return actualMatrix[ROW - 1][COL - 1];
    }
}

Scratch.extensions.register(new Extension());
