class gaimeriWebAPIExtension {
  getInfo() {
    return {
      id: 'gaimeriwebapiextension',
      name: 'Web APIs',
      blocks: [
        {
          opcode: 'cookiesEnabled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'cookies enabled?',
          disableMonitor: true
        },
        {
          opcode: 'deviceMemoApprox',
          blockType: Scratch.BlockType.REPORTER,
          text: 'approx. device memory',
          disableMonitor: true
        },
        {
          opcode: 'devicePosture',
          blockType: Scratch.BlockType.REPORTER,
          text: 'device posture',
          disableMonitor: false
        },
        {
          opcode: 'logicalProcessorAmount',
          blockType: Scratch.BlockType.REPORTER,
          text: 'amount of logical processors available',
          disableMonitor: false
        },
        {
          opcode: 'preferredLanguage',
          blockType: Scratch.BlockType.REPORTER,
          text: 'preferred language',
          disableMonitor: false
        },
        {
          opcode: 'preferredLanguagesArray',
          blockType: Scratch.BlockType.REPORTER,
          text: 'preferred language array',
          disableMonitor: false
        },
        {
          opcode: 'maximumTouchPoints',
          blockType: Scratch.BlockType.REPORTER,
          text: 'number of device touch points',
          disableMonitor: true
        },
        {
          opcode: 'isOnline',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is online?',
          disableMonitor: false
        },
        {
          opcode: 'canSeePDFs',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'PDF viewer enabled?',
          disableMonitor: false
        },
        {
          opcode: 'isWebDriver',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is web driver?',
          disableMonitor: true
        },
        {
          opcode: 'buildID', // ⚠️ means deprecated or non-standard
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ browser build ID',
          disableMonitor: false
        },
        {
          opcode: 'privacyControlled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '⚠️ user has global privacy control?',
          disableMonitor: false
        },
        {
          opcode: 'safariStandalone',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '⚠️ is in iOS standalone mode?',
          disableMonitor: false
        },
        {
          opcode: 'appCodeName',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ application code name',
          disableMonitor: true
        },
        {
          opcode: 'appName',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ application name',
          disableMonitor: true
        },
        {
          opcode: 'appVersion',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ application version',
          disableMonitor: true
        },
        {
          opcode: 'doNotTrack',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ do not track -value',
          disableMonitor: true
        },
        {
          opcode: 'userOperatingSystem',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ operating system',
          disableMonitor: true
        },
        {
          opcode: 'browserPlatform',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ browser platform',
          disableMonitor: true
        },
        {
          opcode: 'browserPlugins',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ browser plugins array',
          disableMonitor: true
        },
        {
          opcode: 'browserProduct',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ browser product name',
          disableMonitor: true
        },
        {
          opcode: 'browserProductSub',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ browser product date',
          disableMonitor: true
        },
        {
          opcode: 'browserVendor',
          blockType: Scratch.BlockType.REPORTER,
          text: '⚠️ ',
          disableMonitor: false
        }
      ]
    };
  }

  cookiesEnabled() {
    return navigator.cookieEnabled;
  }

  deviceMemoApprox() {
    return navigator.deviceMemory;
  }

  devicePosture(){
    return navigator.devicePosture.type;
  }

  logicalProcessorAmount(){
    return navigator.hardwareConcurrency;
  }

  preferredLanguage(){
    return navigator.language;
  }

  preferredLanguagesArray(){
    return navigator.languages;
  }

  maximumTouchPoints(){
    return navigator.maxTouchPoints;
  }

  isOnline(){
    return navigator.onLine;
  }

  canSeePDFs(){
    return navigator.pdfViewerEnabled;
  }

  isWebDriver(){
    return navigator.webdriver;
  }

  buildID(){
    return navigator.buildID;
  }

  privacyControlled(){
    return navigator.globalPrivacyControl;
  }

  safariStandalone(){
    return navigator.standalone;
  }

  appCodeName(){
    return navigator.appCodeName;
  }

  appName(){
    return navigator.appName;
  }

  appVersion(){
    return navigator.appVersion;
  }

  doNotTrack(){
    return navigator.doNotTrack;
  }

  userOperatingSystem(){
    return navigator.oscpu;
  }

  browserPlatform(){
    return navigator.platform;
  }

  browserPlugins(){
    return navigator.plugins;
  }

  browserProduct(){
    return navigator.product;
  }

  browserProductSub(){
    return navigator.productSub;
  }
}

Scratch.extensions.register(new gaimeriWebAPIExtension());
