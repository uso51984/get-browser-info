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

export default getBrowserVersion;