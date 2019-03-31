/*const {obtenerPromedio, argv} = require('./datos');
var express = require('express')
var app = express()

console.log(argv);
if(argv._[0]=='promedio'){
     texto = ('El promedio de: ' + " " + argv.n +  " " + obtenerPromedio);
}else{
    console.log('promedio calculado');
}

 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)*/

const {argv} = require('./yargs');
const funciones = require('./funciones');

console.log(argv);
console.log(' posicion 0 ' + argv._[0]);

let comando = argv._[0];

switch(comando){
  case 'crear':
  funciones.crear(argv);
  break;

  case 'mostrar':
  funciones.mostrar(argv);
  break;

  case 'mostrarest':
  funciones.mostrarest(argv.nombre);
  break;
  
  case 'mostrarmat':
  funciones.mostrarmat();
  break;  

  case 'actualizar':
  funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion);
  break;

  case 'eliminar':
  funciones.eliminar(argv.nombre);
  break;

  default:
  console.log('Ingresa un comando valido');
}