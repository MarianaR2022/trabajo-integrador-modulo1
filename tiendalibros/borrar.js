const leer = require('./leer.js')
const cargaJson = require('./cargaJson.js')

// El libro a eliminar debe ser buscado por ID
module.exports = (title) => {
  let libros  = leer()
  let libroAeliminar

  libros.forEach((Libro, index) => {
    if (Libro.title === title) {
      libroAeliminar = index
    }
  })
  libros.splice(libroAeliminar, 1)
  cargaJson(libros)
  console.log('Libro eliminado con exito')

}
//no supe hacer lo del id asi que se ingresa el titulo del libro a eliminar
