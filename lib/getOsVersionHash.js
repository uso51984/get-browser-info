'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports['default'] = getOsVersionHash;
module.exports = exports['default'];