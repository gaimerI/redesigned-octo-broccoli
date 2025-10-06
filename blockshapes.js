class MatrixType {
    constructor(matrix) {
        this.matrix = matrix;
    }

    toString() {
        return this.matrix;
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
                }
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
    // Check if MATRIX is an array
    if (!Array.isArray(MATRIX)) {
        return typeof MATRIX;
    }

    // Ensure ROW and COL are within bounds of the matrix
    if (ROW < 0 || ROW >= MATRIX.length || COL < 0 || COL >= MATRIX[ROW].length) {
        throw new Error('Invalid indices: ROW or COL is out of bounds.');
    }

    MATRIX[ROW][COL] = VALUE; // Set the value at the specified row and column
    return MATRIX; // Return the modified matrix
}

}

Scratch.extensions.register(new Extension());
