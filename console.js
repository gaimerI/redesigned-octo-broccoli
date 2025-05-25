// =====
// This extension modifies the console methods, for it to be able to read them. This should not break anything.
// =====

let consoleLoggedMessages = [];
const originalConsoleLog = console.log;
const originalConsoleInfo = console.info;
const originalConsoleError = console.error;
const originalConsoleDebug = console.debug;
const originalConsoleTimeLog = console.timeLog;
const originalConsoleAssert = console.assert;
const originalConsoleCount = console.count;
const originalConsoleGroup = console.group;
const originalConsoleGroupEnd = console.groupEnd;
const originalConsoleTable = console.table;
const originalConsoleWarn = console.warn;
const originalConsoleTrace = console.trace;
const originalConsoleDir = console.dir;
const originalConsoleTime = console.time;
const originalConsoleTimeEnd = console.timeEnd;
const originalConsoleTimeStamp = console.timeStamp;

console.log = function(...args) {
  consoleLoggedMessages.push(`Log: ${args.join(' ')}`);
  originalConsoleLog.apply(console, args);
};

console.info = function(...args) {
  consoleLoggedMessages.push(`Info: ${args.join(' ')}`);
  originalConsoleInfo.apply(console, args);
};

console.error = function(...args) {
  consoleLoggedMessages.push(`Error: ${args.join(' ')}`);
  originalConsoleError.apply(console, args);
};

console.debug = function(...args) {
  consoleLoggedMessages.push(`Debug: ${args.join(' ')}`);
  originalConsoleDebug.apply(console, args);
};

console.timeLog = function(label, ...args) {
  consoleLoggedMessages.push(`TimeLog [${label}]: ${args.join(' ')}`);
  originalConsoleTimeLog.apply(console, [label, ...args]);
};

console.assert = function(condition, ...args) {
  if (!condition) {
    consoleLoggedMessages.push(`Assert failed: ${args.join(' ')}`);
    originalConsoleAssert.apply(console, args);
  }
};

console.count = function(label) {
  consoleLoggedMessages.push(`Count [${label}]: ${label}`);
  originalConsoleCount.call(console, label);
};

console.group = function(...args) {
  consoleLoggedMessages.push(`Group: ${args.join(' ')}`);
  originalConsoleGroup.apply(console, args);
};

console.groupEnd = function() {
  consoleLoggedMessages.push('Group End');
  originalConsoleGroupEnd.apply(console);
};

console.table = function(data) {
  consoleLoggedMessages.push(`Table: ${JSON.stringify(data)}`);
  originalConsoleTable.apply(console, arguments);
};

console.warn = function(...args) {
  consoleLoggedMessages.push(`Warning: ${args.join(' ')}`);
  originalConsoleWarn.apply(console, args);
};

console.trace = function(...args) {
  consoleLoggedMessages.push(`Trace: ${args.join(' ')}`);
  originalConsoleTrace.apply(console, args);
};

console.dir = function(obj) {
  consoleLoggedMessages.push(`Dir: ${JSON.stringify(obj)}`);
  originalConsoleDir.apply(console, arguments);
};

console.timeEnd = function(label) {
  consoleLoggedMessages.push(`Timer ended: ${label}`);
  originalConsoleTimeEnd.apply(console, arguments);
};

console.timeStamp = function(label) {
  consoleLoggedMessages.push(`Timestamp: ${label}`);
  originalConsoleTimeStamp.apply(console, arguments); // I am not sure if it's possible to use the time / timestamp etc. that the original method reports.
};

class gaimeriConsoleExtension {
  getInfo() {
    return {
      id: 'GaimeriConsoleExtension',
      name: 'Web APIs',
      blocks: [
        {
          opcode: 'consoleClear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'clear'
        },
        {
          opcode: 'consoleCount',
          blockType: Scratch.BlockType.COMMAND,
          text: 'count [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'default'
            }
          }
        },
        {
          opcode: 'consoleCountReset',
          blockType: Scratch.BlockType.COMMAND,
          text: 'reset count [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'default'
            }
          }
        },
        {
          opcode: 'consoleDebug',
          blockType: Scratch.BlockType.COMMAND,
          text: 'debug [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello, World!'
            }
          }
        },
        {
          opcode: 'consoleLogRaw',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log object [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"Hello": "World!", "foo": "bar"}'
            }
          }
        },
        {
          opcode: 'seeConsoleMessages',
          blockType: Scratch.BlockType.REPORTER,
          text: 'console data',
        },
        {
          opcode: 'consoleError',
          blockType: Scratch.BlockType.COMMAND,
          text: 'error [MESSAGE]',
          disableMonitor: true,
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'An error has occurred'
            }
          }
        },
        {
          opcode: 'consoleException',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ exception [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'An exception has occurred'
            }
          }
        },
        {
          opcode: 'consoleGroup',
          blockType: Scratch.BlockType.COMMAND,
          text: 'new uncollapsed group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'group name'
            }
          }
        },
        {
          opcode: 'consoleGroupClosed',
          blockType: Scratch.BlockType.COMMAND,
          text: 'new collapsed group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'group name'
            }
          }
        },
        {
          opcode: 'consoleGroupExit',
          blockType: Scratch.BlockType.COMMAND,
          text: 'exit current group'
        },
        {
          opcode: 'consoleInfo',
          blockType: Scratch.BlockType.COMMAND,
          text: 'info [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Also try DinosaurMod'
            }
          }
        },
        {
          opcode: 'consoleLog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'sjksuzvslozvxb'
            }
          }
        },
        {
        opcode: 'consoleProfile',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ start recording profile [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'profile name'
            }
          }
        },
        {
          opcode: 'consoleProfileEnd',
          blockType: Scratch.BlockType.COMMAND,
          text: '⚠ stop recording group [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'profile name'
            }
          }
        },
        {
          opcode: 'consoleTable',
          blockType: Scratch.BlockType.COMMAND,
          text: 'table [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["Apple", "Banana"]'
            }
          }
        },
        {
          opcode: 'consoleTime',
          blockType: Scratch.BlockType.COMMAND,
          text: 'start timer [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer name'
            }
          }
        },
        {
          opcode: 'consoleTimeEnd',
          blockType: Scratch.BlockType.COMMAND,
          text: 'end timer [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer name'
            }
          }
        },
        {
          opcode: 'consoleTimeLog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log timer [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timer name'
            }
          }
        },
        {
          opcode: 'consoleTimeStamp',
          blockType: Scratch.BlockType.COMMAND,
          text: 'current timestamp [LABEL]',
          arguments: {
            LABEL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'timestamp name'
            }
          }
        },
        {
          opcode: 'consoleTrace',
          blockType: Scratch.BlockType.COMMAND,
          text: 'trace',
        },
        {
          opcode: 'consoleWarn',
          blockType: Scratch.BlockType.COMMAND,
          text: 'warn [MESSAGE]',
          arguments: {
            MESSAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Oops'
            }
          }
        },
      ]
    };
  }

  consoleAssert(args) {
    console.assert(args.CONDITION, args.MESSAGE);
  }

  consoleClear() {
    console.clear();
    consoleLoggedMessages = new Array();
  }

  consoleCount(args) {
    console.count(args.LABEL);
  }

  consoleCountReset(args) {
    console.countReset(args.LABEL);
  }

  consoleDebug(args) {
    console.debug(args.MESSAGE);
  }

  consoleLogRaw(args) {
    console.dir(args.MESSAGE);
  }

  seeConsoleMessages() {
    return JSON.stringify(consoleLoggedMessages);
  }

  consoleError(args) {
    console.error(args.MESSAGE);
  }

  consoleException(args) {
    console.exception(args.MESSAGE);
  }

  consoleGroup(args) {
    console.group(args.LABEL);
  }

  consoleGroupClosed(args) {
    console.groupCollapsed(args.LABEL);
  }

  consoleGroupExit() {
    console.groupEnd();
  }

  consoleInfo(args) {
    console.info(args.MESSAGE);
  }

  consoleLog(args) {
    console.log(args.MESSAGE);
  }

  consoleProfile(args) {
    console.profile(args.LABEL);
  }

  consoleProfileEnd(args) {
    console.profileEnd(args.LABEL);
  }

  consoleTable(args) {
    console.table(args.MESSAGE);
  }

  consoleTime(args) {
    console.time(args.LABEL);
  }

  consoleTimeEnd(args) {
    console.timeEnd(args.LABEL);
  }

  consoleTimeLog(args) {
    console.timeLog(args.LABEL);
  }

  consoleTimeStamp(args) {
    console.timeStamp(args.LABEL);
  }

  consoleTrace() {
    console.trace();
  }

  consoleWarn(args) {
    console.warn(args.MESSAGE);
  }
}

Scratch.extensions.register(new gaimeriConsoleExtension());
