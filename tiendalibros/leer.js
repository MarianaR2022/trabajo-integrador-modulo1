const fs = require('fs')

module.exports =() => {
    return JSON.parse(fs.readFileSync('./basededatos.json', 'utf-8'))
}
 