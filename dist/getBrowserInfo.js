(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getBrowserInfo"] = factory();
	else
		root["getBrowserInfo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBrowserVersionHash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getClientHash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getOsVersionHash__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var clientHash = Object(__WEBPACK_IMPORTED_MODULE_1__getClientHash__["a" /* default */])(userAgent);
var browserVersionHash = Object(__WEBPACK_IMPORTED_MODULE_0__getBrowserVersionHash__["a" /* default */])(userAgent);
var osVersionHash = Object(__WEBPACK_IMPORTED_MODULE_2__getOsVersionHash__["a" /* default */])(userAgent);

var generalInfoHash = {
  engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
  browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
  os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
  device: ['Mobile', 'Tablet']
};

var Browser = function () {
  function Browser() {
    _classCallCheck(this, Browser);

    this.device = 'PC';
    this.getGeneralInfo();
    this.browserVersion = this.getBrowserVersion();
    this.language = this.getLanguage();
    this.osVersion = this.getOsVersion();
    this.fixInfo();
  }

  _createClass(Browser, [{
    key: 'getGeneralInfo',
    value: function getGeneralInfo() {
      var _this = this;

      var _loop = function _loop(key) {
        generalInfoHash[key].forEach(function (value) {
          if (clientHash[value]) {
            _this[key] = value;
          }
        });
      };

      for (var key in generalInfoHash) {
        _loop(key);
      }
    }
  }, {
    key: 'getLanguage',
    value: function getLanguage() {
      var languageInfo = navigator.browserLanguage || navigator.language;
      var tmpArray = languageInfo.split('-');
      if (tmpArray[1]) {
        tmpArray[1] = tmpArray[1].toUpperCase();
      }
      return tmpArray.join('_');
    }
  }, {
    key: 'getBrowserVersion',
    value: function getBrowserVersion() {
      if (browserVersionHash[this.browser]) {
        return browserVersionHash[this.browser]() || '';
      }
    }
  }, {
    key: 'getOsVersion',
    value: function getOsVersion() {
      if (osVersionHash[this.os]) {
        return osVersionHash[this.os]() || '';
      }
    }
  }, {
    key: 'fixInfo',
    value: function fixInfo() {
      //修正
      if (this.browser === 'Edge') {
        this.engine = 'EdgeHTML';
      } else if (this.browser === 'Chrome' && parseInt(this.browserVersion) > 27) {
        this.engine = 'Blink';
      } else if (this.browser === 'Opera' && parseInt(this.browserVersion) > 12) {
        this.engine = 'Blink';
      } else if (this.browser === 'Yandex') {
        this.engine = 'Blink';
      }
    }
  }]);

  return Browser;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return new Browser();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//浏览器版本信息
var getBrowserVersion = function getBrowserVersion(u) {
  return {
    'Safari': function Safari() {
      return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
    },
    'Chrome': function Chrome() {
      return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
    },
    'IE': function IE() {
      return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
    },
    'Edge': function Edge() {
      return u.replace(/^.*Edge\/([\d.]+).*$/, '$1');
    },
    'Firefox': function Firefox() {
      return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
    },
    'Firefox Focus': function FirefoxFocus() {
      return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
    },
    'Chromium': function Chromium() {
      return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
    },
    'Opera': function Opera() {
      return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
    },
    'Vivaldi': function Vivaldi() {
      return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
    },
    'Yandex': function Yandex() {
      return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
    },
    'Arora': function Arora() {
      return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
    },
    'Lunascape': function Lunascape() {
      return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
    },
    'QupZilla': function QupZilla() {
      return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
    },
    'Coc Coc': function CocCoc() {
      return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
    },
    'Kindle': function Kindle() {
      return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
    },
    'Iceweasel': function Iceweasel() {
      return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
    },
    'Konqueror': function Konqueror() {
      return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
    },
    'Iceape': function Iceape() {
      return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
    },
    'SeaMonkey': function SeaMonkey() {
      return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
    },
    'Epiphany': function Epiphany() {
      return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
    },
    '360': function _() {
      return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
    },
    '360SE': function SE() {
      var hash = { '63': '10.0', '55': '9.1', '45': '8.1', '42': '8.0', '31': '7.0', '21': '6.3' };
      var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    '360EE': function EE() {
      var hash = { '63': '9.5', '55': '9.0', '50': '8.7', '30': '7.5' };
      var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    'Maxthon': function Maxthon() {
      return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
    },
    'QQBrowser': function QQBrowser() {
      return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
    },
    'QQ': function QQ() {
      return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
    },
    'Baidu': function Baidu() {
      return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
    },
    'UC': function UC() {
      return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
    },
    'Sogou': function Sogou() {
      return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
    },
    'LBBROWSER': function LBBROWSER() {
      var hash = { '57': '6.5', '49': '6.0', '46': '5.9', '42': '5.3', '39': '5.2', '34': '5.0', '29': '4.5', '21': '4.0' };
      var chrome_vision = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    '2345Explorer': function Explorer() {
      return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
    },
    'TheWorld': function TheWorld() {
      return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
    },
    'XiaoMi': function XiaoMi() {
      return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
    },
    'Quark': function Quark() {
      return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
    },
    'Qiyu': function Qiyu() {
      return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
    },
    'Wechat': function Wechat() {
      return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
    },
    'Taobao': function Taobao() {
      return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
    },
    'Alipay': function Alipay() {
      return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
    },
    'Weibo': function Weibo() {
      return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
    },
    'Douban': function Douban() {
      return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
    },
    'Suning': function Suning() {
      return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
    },
    'iQiYi': function iQiYi() {
      return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (getBrowserVersion);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getClientHash = function getClientHash(u) {
  return {
    //内核
    'Trident': u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
    'Presto': u.indexOf('Presto') > -1,
    'WebKit': u.indexOf('AppleWebKit') > -1,
    'Gecko': u.indexOf('Gecko/') > -1,
    //浏览器
    'Safari': u.indexOf('Safari') > -1,
    'Chrome': u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
    'IE': u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
    'Edge': u.indexOf('Edge') > -1,
    'Firefox': u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
    'Firefox Focus': u.indexOf('Focus') > -1,
    'Chromium': u.indexOf('Chromium') > -1,
    'Opera': u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
    'Vivaldi': u.indexOf('Vivaldi') > -1,
    'Yandex': u.indexOf('YaBrowser') > -1,
    'Arora': u.indexOf('Arora') > -1,
    'Lunascape': u.indexOf('Lunascape') > -1,
    'QupZilla': u.indexOf('QupZilla') > -1,
    'Coc Coc': u.indexOf('coc_coc_browser') > -1,
    'Kindle': u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
    'Iceweasel': u.indexOf('Iceweasel') > -1,
    'Konqueror': u.indexOf('Konqueror') > -1,
    'Iceape': u.indexOf('Iceape') > -1,
    'SeaMonkey': u.indexOf('SeaMonkey') > -1,
    'Epiphany': u.indexOf('Epiphany') > -1,
    '360': u.indexOf('QihooBrowser') > -1,
    '360EE': u.indexOf('360EE') > -1,
    '360SE': u.indexOf('360SE') > -1,
    'UC': u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
    'QQBrowser': u.indexOf('QQBrowser') > -1,
    'QQ': u.indexOf('QQ/') > -1,
    'Baidu': u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
    'Maxthon': u.indexOf('Maxthon') > -1,
    'Sogou': u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
    'LBBROWSER': u.indexOf('LBBROWSER') > -1,
    '2345Explorer': u.indexOf('2345Explorer') > -1,
    'TheWorld': u.indexOf('TheWorld') > -1,
    'XiaoMi': u.indexOf('MiuiBrowser') > -1,
    'Quark': u.indexOf('Quark') > -1,
    'Qiyu': u.indexOf('Qiyu') > -1,
    'Wechat': u.indexOf('MicroMessenger') > -1,
    'Taobao': u.indexOf('AliApp(TB') > -1,
    'Alipay': u.indexOf('AliApp(AP') > -1,
    'Weibo': u.indexOf('Weibo') > -1,
    'Douban': u.indexOf('com.douban.frodo') > -1,
    'Suning': u.indexOf('SNEBUY-APP') > -1,
    'iQiYi': u.indexOf('IqiyiApp') > -1,
    //系统或平台
    'Windows': u.indexOf('Windows') > -1,
    'Linux': u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
    'Mac OS': u.indexOf('Macintosh') > -1,
    'Android': u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    'Ubuntu': u.indexOf('Ubuntu') > -1,
    'FreeBSD': u.indexOf('FreeBSD') > -1,
    'Debian': u.indexOf('Debian') > -1,
    'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
    'BlackBerry': u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
    'MeeGo': u.indexOf('MeeGo') > -1,
    'Symbian': u.indexOf('Symbian') > -1,
    'iOS': u.indexOf('like Mac OS X') > -1,
    'Chrome OS': u.indexOf('CrOS') > -1,
    'WebOS': u.indexOf('hpwOS') > -1,
    //设备
    'Mobile': u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
    'Tablet': u.indexOf('Tablet') > -1 || u.indexOf('Pad') > -1 || u.indexOf('Nexus 7') > -1
  };
};

/* harmony default export */ __webpack_exports__["a"] = (getClientHash);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

//系统版本信息
var getOsVersionHash = function getOsVersionHash(u) {
  return {
    'Windows': function Windows() {
      var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
      var hash = {
        '6.4': '10',
        '6.3': '8.1',
        '6.2': '8',
        '6.1': '7',
        '6.0': 'Vista',
        '5.2': 'XP',
        '5.1': 'XP',
        '5.0': '2000'
      };
      return hash[v] || v;
    },
    'Android': function Android() {
      return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
    },
    'iOS': function iOS() {
      return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
    },
    'Debian': function Debian() {
      return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
    },
    'Windows Phone': function WindowsPhone() {
      return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
    },
    'Mac OS': function MacOS() {
      return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
    },
    'WebOS': function WebOS() {
      return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (getOsVersionHash);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=getBrowserInfo.js.map