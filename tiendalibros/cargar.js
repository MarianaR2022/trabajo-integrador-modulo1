const fs = require('fs')
const leer = require('./leer.js')
const cargaJson = require('./cargaJson.js')

module.exports = ( title, author, genre, year, cost, price) => {
  let libros = leer()
 libros.push({ title, author, genre, year, cost, price })
  cargaJson(libros)
  console.log('Libro agregado con exito')
}