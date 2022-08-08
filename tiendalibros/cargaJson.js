const fs = require('fs')

module.exports = (data) => {
  fs.writeFileSync('./basededatos.json', JSON.stringify(data, null, 2))
}