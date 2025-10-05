class MatrixType {
    toString() {
        return 'look at me im custom reporter content!'
    }
    toReporterContent(border = '1px solid #ccc', keyBackground = '#f9f9f9', background = '#fff') {
            // wasnt sure how i wanted this to look so i have some customization
            const RENDER_ARRAYS_VISUALLY = true;
            const SHOW_ARRAY_INDEX_NUMBERS = false;
            const RENDER_STRING_VALUES_WITH_QUOTES = true;
            const ENTRY_LIMIT = 1000;

            function renderObject(obj) {
                const table = document.createElement('table');
                table.style.borderCollapse = 'collapse';
                table.style.margin = '4px 0';
                table.style.fontSize = '12px';

                const entries = Object.entries(obj);
                const limitedEntries = entries.slice(0, ENTRY_LIMIT);

                for (const [key, value] of limitedEntries) {
                    const row = document.createElement('tr');

                    const keyCell = document.createElement('td');
                    keyCell.textContent = key;
                    keyCell.style.border = border;
                    keyCell.style.padding = '2px 6px';
                    keyCell.style.background = keyBackground;
                    keyCell.style.fontWeight = 'bold';

                    const valueCell = document.createElement('td');
                    valueCell.style.border = border;
                    valueCell.style.padding = '2px 6px';
                    valueCell.style.background = background;

                    if (typeof value === 'object' && value !== null) {
                        if (value instanceof dogeiscutObject.Type) {
                            valueCell.appendChild(renderObject(value.object));
                        } else if (RENDER_ARRAYS_VISUALLY && (isArray(value) || (jwArray && value instanceof jwArray.Type))) {
                            valueCell.appendChild(renderArray(isArray(value) ? value : (value.array || [])));
                        } else if (typeof value.dogeiscutObjectHandler === "function") {
                            valueCell.innerHTML = value.dogeiscutObjectHandler();
                        } else if (typeof value.jwArrayHandler === "function") {
                            valueCell.innerHTML = value.jwArrayHandler();
                        } else {
                            valueCell.appendChild(renderObject(value));
                        }
                    } else if (typeof value === "string" && RENDER_STRING_VALUES_WITH_QUOTES) {
                        valueCell.textContent = `"${value}"`;
                    } else if (value && typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
                        valueCell.textContent = value.toString();
                    } else if (value === null || value === undefined) {
                        valueCell.textContent = "null";
                    } else {
                        valueCell.textContent = String(value);
                    }

                    row.appendChild(keyCell);
                    row.appendChild(valueCell);
                    table.appendChild(row);
                }

                if (entries.length > ENTRY_LIMIT) {
                    const moreRow = document.createElement('tr');
                    const moreCell = document.createElement('td');
                    moreCell.colSpan = 2;
                    moreCell.textContent = `... ${entries.length - ENTRY_LIMIT} more entries`;
                    moreCell.style.textAlign = 'center';
                    moreCell.style.fontStyle = 'italic';
                    moreRow.appendChild(moreCell);
                    table.appendChild(moreRow);
                }

                return table;
            }

            function renderArray(arr) {
                const arrTable = document.createElement('table');
                arrTable.style.borderCollapse = 'collapse';
                arrTable.style.margin = '2px 0';
                arrTable.style.fontSize = '12px';
                arrTable.style.background = background;
                arrTable.style.border = border;

                const limitedArray = arr.slice(0, ENTRY_LIMIT);

                limitedArray.forEach((item, idx) => {
                    const row = document.createElement('tr');

                    if (SHOW_ARRAY_INDEX_NUMBERS) {
                        const idxCell = document.createElement('td');
                        idxCell.textContent = idx;
                        idxCell.style.border = border;
                        idxCell.style.padding = '2px 6px';
                        idxCell.style.background = keyBackground;
                        idxCell.style.fontWeight = 'bold';
                        row.appendChild(idxCell);
                    }

                    const valCell = document.createElement('td');
                    valCell.style.border = border;
                    valCell.style.padding = '2px 6px';
                    valCell.style.background = background;

                    if (typeof item === 'object' && item !== null) {
                        if (item instanceof dogeiscutObject.Type) {
                            valCell.appendChild(renderObject(item.object));
                        } else if (RENDER_ARRAYS_VISUALLY && (isArray(item) || (jwArray && item instanceof jwArray.Type))) {
                            valCell.appendChild(renderArray(isArray(item) ? item : (item.array || [])));
                        } else if (typeof item.dogeiscutObjectHandler === "function") {
                            valCell.innerHTML = item.dogeiscutObjectHandler();
                        } else if (typeof item.jwArrayHandler === "function") {
                            valCell.innerHTML = item.jwArrayHandler();
                        } else {
                            valCell.appendChild(renderObject(item));
                        }
                    } else if (typeof item === "string" && RENDER_STRING_VALUES_WITH_QUOTES) {
                        valCell.textContent = `"${item}"`;
                    } else if (item && typeof item.toString === "function" && item.toString !== Object.prototype.toString) {
                        valCell.textContent = item.toString();
                    } else if (item === null || item === undefined) {
                        valCell.textContent = "null";
                    } else {
                        valCell.textContent = String(item);
                    }

                    row.appendChild(valCell);
                    arrTable.appendChild(row);
                });

                if (arr.length > ENTRY_LIMIT) {
                    const moreRow = document.createElement('tr');
                    const moreCell = document.createElement('td');
                    moreCell.colSpan = SHOW_ARRAY_INDEX_NUMBERS ? 2 : 1;
                    moreCell.textContent = `... ${arr.length - ENTRY_LIMIT} more items`;
                    moreCell.style.textAlign = 'center';
                    moreCell.style.fontStyle = 'italic';
                    moreRow.appendChild(moreCell);
                    arrTable.appendChild(moreRow);
                }

                return arrTable;
            }

            let root = document.createElement('div');
            root.appendChild(renderObject(this.object));
            return root;
                                                                                }
}
class Extension {
    getInfo() {
        return {
            id: 'notnull',
            name: 'example',
            blocks: [
                {
                    opcode: 'return',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'return a custom type!'
                },
                {
                    opcode: 'recieve',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'accept a [inp] custom type!',
                    arguments: {
                        inp: {
                            type: Scratch.ArgumentType.STRING,
                            exemptFromNormalization: true
                        }
                    }
                }
            ]
        }
    }
    return() {
        return new MatrixType();
    }
    recieve({ inp }) {
        console.log(inp instanceof MatrixType) // true 
    }
}

Scratch.extensions.register(new Extension());
