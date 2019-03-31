    
    const  nombre = {
        demand:true,
        alias: 'n'
    }

        
    const  matematicas = {
        demand:true,
        alias: 'm'
    }

        
    const  ingles = {
        demand:true,
        alias: 'i'
    }

        
    const  programacion = {
        demand:true,
        alias: 'p'
    }
    
    const creacion = {
        nombre, matematicas, ingles, programacion
    }

    const muestraest = {
        nombre
    }

    const actualiza = {
        nombre, 
        asignatura : {
            demand: true,
            alias: 'a'
        }, 
        calificacion : {
            demand: true,
            alias: 'c'
        }
    }

    const elimina = {
        nombre
    }

    const argv = require('yargs')
            .command('crear' , 'crear un estudiante' , creacion)
            .command('mostrar' , 'muestra estudiantes y notas')
            .command('mostrarest' , 'muestra estudiante y notas' , muestraest)
            .command('actualizar' , 'actualiza informacion de curso' , actualiza)
            .command('eliminar' , 'elimina estudiantes de curso' , elimina)
            .argv;
    
    
    module.exports = {
    argv
    };