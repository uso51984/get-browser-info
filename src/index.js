import getBrowserVersionHash from './getBrowserVersionHash';
import getClientHash from './getClientHash';
import getOsVersionHash from './getOsVersionHash';

const userAgent = navigator.userAgent || navigator.vendor || window.opera;
const clientHash = getClientHash(userAgent);
const browserVersionHash = getBrowserVersionHash(userAgent);
const osVersionHash = getOsVersionHash(userAgent)

const generalInfoHash = {
  engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
  browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'Taobao', 'Alipay', 'Weibo', 'Douban','Suning', 'iQiYi'],
  os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
  device: ['Mobile', 'Tablet']
};

class Browser {
  constructor() {
    this.device = 'PC';
    this.getGeneralInfo();
    this.browserVersion = this.getBrowserVersion();
    this.language = this.getLanguage();
    this.osVersion = this.getOsVersion();
    this.fixInfo();
  }

  getGeneralInfo() {
    for (const key in generalInfoHash) {
      generalInfoHash[key].forEach((value) => {
        if (clientHash[value]) {
          this[key] = value;
        }
      })
    }
  }

  getLanguage() {
    const languageInfo = navigator.browserLanguage || navigator.language
    const tmpArray = languageInfo.split('-');
    if (tmpArray[1]) {
      tmpArray[1] = tmpArray[1].toUpperCase();
    }
    return tmpArray.join('_');
  }

  getBrowserVersion() {
    if (browserVersionHash[this.browser]) {
      return browserVersionHash[this.browser]() || '';
    }
  }

  getOsVersion() {
    if (osVersionHash[this.os]) {
      return osVersionHash[this.os]() || '';
    }
  }

  fixInfo() {
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
}

export default () => new Browser();