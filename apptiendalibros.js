const leer = require ('./tiendalibros/leer.js')
const cargar = require ('./tiendalibros/cargar.js')
const borrar = require ('./tiendalibros/borrar.js')
const editar = require ('./tiendalibros/editar.js') 
switch (process.argv[2]){
    case 'read':
        console.log(leer())  
    break;
    case 'new':
       cargar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8])
    break;
    case 'delete':
        borrar(process.argv[3])
    break;
    case 'edit':
        editar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8])
    default:
        'Comando no valido'
    break;
}  