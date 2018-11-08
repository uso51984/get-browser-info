'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getBrowserVersionHash = require('./getBrowserVersionHash');

var _getBrowserVersionHash2 = _interopRequireDefault(_getBrowserVersionHash);

var _getClientHash = require('./getClientHash');

var _getClientHash2 = _interopRequireDefault(_getClientHash);

var _getOsVersionHash = require('./getOsVersionHash');

var _getOsVersionHash2 = _interopRequireDefault(_getOsVersionHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var clientHash = (0, _getClientHash2['default'])(userAgent);
var browserVersionHash = (0, _getBrowserVersionHash2['default'])(userAgent);
var osVersionHash = (0, _getOsVersionHash2['default'])(userAgent);

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

exports['default'] = function () {
  return new Browser();
};

module.exports = exports['default'];