const nombre = {
    demand=true,
    alias: 'n'
}
const matematicas = {
demand:true,
alias: 'm'
}
const ingles = {
demand:true,
alias: 'i'
} 
const programacion = {
demand:true,
alias:'p'
}

let obtenerPromedio = (nota_uno, nota_dos, nota_3);

const creacion = {
nombre, matematicas, ingles, programacion
}

const argv = require('yargs')
        .command('promedio' , 'crear un estudiante' , creacion)
        .argv;

module.exports = {
    obtenerPromedio,
argv
};