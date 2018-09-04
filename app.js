/**
 * REQUIRES
 */

 const argv = require('yargs')
 .command('listar', 'Imprime en consola la tabla', {
     base: {
         demand: true,
         alias:'b'
     }
 })       
 .argv;
const {crearArchivo} = require('./multiplicar/multiplicar');



console.log(argv);



// console.log(process.argv[2])

//   crearArchivo('asasd')
//   .then( archivo => console.log(`Archivo creado: ${ archivo}`))
//   .catch( e=> console.log(e))