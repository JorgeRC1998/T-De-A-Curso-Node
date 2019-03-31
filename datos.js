const opciones ={
    
nombre : {
    demand:true,
    alias: 'n'
},
 matematicas : {
demand:true,
alias: 'm'
},
 ingles : {
demand:true,
alias: 'i'
} ,
 programacion : {
demand:true,
alias:'p'
}
}


const argv = require('yargs')
        .command('promedio' , 'crear un estudiante' , opciones)
        .argv;

let obtenerPromedio = ((argv.matematicas+ argv.ingles+ argv.programacion)/3);

module.exports = {
    obtenerPromedio,
argv
};