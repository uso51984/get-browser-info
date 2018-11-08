
  //系统版本信息
const getOsVersionHash = (u) => ({
  'Windows': function () {
    const v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
    const hash = {
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
  'Android': function () {
    return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
  },
  'iOS': function () {
    return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
  },
  'Debian': function () {
    return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
  },
  'Windows Phone': function () {
    return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
  },
  'Mac OS': function () {
    return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
  },
  'WebOS': function () {
    return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
  }
});

export default getOsVersionHash;