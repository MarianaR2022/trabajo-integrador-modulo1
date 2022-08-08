const leer = require('./leer.js')
const cargaJson = require('./cargaJson')

module.exports = (title, author, genre, year, cost, price) => {
  let libros = leer()
  libros.forEach(libro => {
    if (libro.title === title) { libro.author = author,
        libro.genre = genre,
        libro.year =  year, 
        libro.cost = cost,
        libro.price = price
            console.log('Libro editado con exito')
      cargaJson(libros)
    }
  })
}
//no supe hacer lo del id asi que toma el titulo del libro para modificar