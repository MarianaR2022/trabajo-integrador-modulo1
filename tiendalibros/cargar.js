const fs = require('fs')
const leer = require('./leer.js')
const cargaJson = require('./cargaJson.js')

// Falta generar automáticamente un ID único y no repetido para cada libro nuevo que se carga en el archivo .json
module.exports = ( title, author, genre, year, cost, price) => {
  let libros = leer()
 libros.push({ title, author, genre, year, cost, price })
  cargaJson(libros)
  console.log('Libro agregado con exito')
}
