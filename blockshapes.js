(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "test",
        name: "Dates",
        blocks: [{
            opcode: 'newDate',
            text: 'new date [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.TICKET,
            arguments: {
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "2020, 9, 7"
              }
            }
          },
          {
            opcode: 'dateNow',
            text: 'current time (ms)',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
          },
          {
            opcode: 'timeFromString',
            text: 'time from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
          {
            opcode: 'dateFromString',
            text: 'date from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
          {
            opcode: 'dayFromString',
            text: 'day of week from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
          {
            opcode: 'timeFromString',
            text: 'time from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
          {
            opcode: 'monthFromString',
            text: 'month from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
          {
            opcode: 'dateFromString',
            text: 'date from [VALUE]',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            arguments: {
              VALUE: {
                shape: Scratch.BlockType.TICKET
              }
            }
          },
        ]
      }
    }
    newDate(args) {
      return new Date(args.VALUE);
    }

    dateNow() {
      return Date.now();
    }

    timeFromString(args) {
      return Date.parse(args.VALUE);
    }

    dateFromString(args) {
      return args.VALUE.getDate();
    }

    dateFromString(args) {
      return args.VALUE.getDay();
    }

    yearFromString(args) {
      return args.VALUE.getFullYear();
    }

            getTimeFromString(args) {
  return args.VALUE.getTime(); // Returns milliseconds since Unix epoch
}

getMonthFromString(args) {
  return args.VALUE.getMonth(); // Returns 0-11 (0 = January)
}

getHoursFromString(args) {
  return args.VALUE.getHours(); // Returns 0-23
}

getMinutesFromString(args) {
  return args.VALUE.getMinutes(); // Returns 0-59
}

getSecondsFromString(args) {
  return args.VALUE.getSeconds(); // Returns 0-59
}

getMillisecondsFromString(args) {
  return args.VALUE.getMilliseconds(); // Returns 0-999
}

getUTCDateFromString(args) {
  return args.VALUE.getUTCDate(); // Returns day of month in UTC
}

getUTCDayFromString(args) {
  return args.VALUE.getUTCDay(); // Returns 0-6 in UTC
}

getUTCFullYearFromString(args) {
  return args.VALUE.getUTCFullYear(); // Returns full year in UTC
}

getUTCHoursFromString(args) {
  return args.VALUE.getUTCHours(); // Returns 0-23 in UTC
}

getUTCMinutesFromString(args) {
  return args.VALUE.getUTCMinutes(); // Returns 0-59 in UTC
}

getUTCSecondsFromString(args) {
  return args.VALUE.getUTCSeconds(); // Returns 0-59 in UTC
}

getUTCMillisecondsFromString(args) {
  return args.VALUE.getUTCMilliseconds(); // Returns 0-999 in UTC
}

getTimezoneOffsetFromString(args) {
  return args.VALUE.getTimezoneOffset(); // Returns difference in minutes from UTC
}

  }
  Scratch.extensions.register(new Extension());
})(Scratch);
