const query = (...arg) => arg.map((key, index) => (
  `${index === 0 ? '?' : '&'}${Object.keys(key)}=${Object.values(key)}`
)).join('')

module.exports = query
