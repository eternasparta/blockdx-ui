module.exports.sortByVersion = arr => [...arr]
  .sort((a, b) => {
    const splitA = a.split('.');
    const splitB = b.split('.');
    for(let i = 0; i < 3; i++) {
      splitA[i] = Number(splitA[i]) || 0;
      splitB[i] = Number(splitB[i]) || 0;
    }
    if(splitA[0] === splitB[0]) {
      if(splitA[1] === splitB[1]) {
        if(splitA[2] === splitB[2]) {
          return 0;
        } else {
          return splitA[2] > splitB[2] ? 1 : -1;
        }
      } else {
        return splitA[1] > splitB[1] ? 1 : -1;
      }
    } else {
      return splitA[0] > splitB[0] ? 1 : -1;
    }
  });

module.exports.splitConf = (str = '') => {
  return str
    .split('\n')
    .map(s => s.trim())
    .filter(l => l ? true : false)
    .map(l => l.split('=').map(s => s.trim()))
    .reduce((obj, [key, val = '']) => {
      if(key && val) return Object.assign({}, obj, {[key]: val});
      else return obj;
    }, {});
};

module.exports.joinConf = obj => {
  return Object
    .keys(obj)
    .map(key => key + '=' + (obj[key] || ''))
    .join('\n')
    .concat('\n');
};

module.exports.removeNonWordCharacters = (str = '') => str.replace(/\W/g, '');
