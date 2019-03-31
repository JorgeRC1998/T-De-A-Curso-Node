//Esta funcion crea un archivo .json en el cual guarda un estudiante creado
const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };

    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if(!duplicado){
    listaEstudiantes.push(est);
    console.log(listaEstudiantes);
    guardar();
    }  
    else{
    console.log('ya existe otro con ese nombre'); 
    }
}

const listar = () => {
    try{
    listaEstudiantes = require('./listado.json') ;
    }catch(error){
        listarEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err)=>{
        if(err){
            throw err;
        }else{
            console.log('archivo creado/actualizado exitosamente');
        }
    })
}


const mostrar = () =>{
    listar();
    console.log('Notas de los estudiantes');
    console.log('------------------------ ');
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas ');
        console.log(' matematicas ' + estudiante.matematicas);;
        console.log(' ingles ' + estudiante.ingles);
        console.log(' programacion ' + estudiante.programacion + '\n');      
    });
}

const mostrarest = (nom) => {
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
    if(!est){
        console.log('no existe ese estudiante');
        }else{  
            console.log(est.nombre);
            console.log('notas ');
            console.log(' matematicas ' + est.matematicas);;
            console.log(' ingles ' + est.ingles);
            console.log(' programacion ' + est.programacion + '\n');   
        }
    }

    const mostrarmat = () => {
        listar();
        let ganan = listaEstudiantes.filter(mat => mat.matematicas >=3);
        if(ganan.lenght == 0){
            console.log('ningun estudiante va ganando matematicas');
        }else{
            ganan.forEach(estudiante => {
                console.log(estudiante.nombre);
                console.log(' notas ');
                console.log(' matematicas: ' + estudiante.matematicas);
            });
        }
    }

    const actualizar = (nom, asignatura, calificacion) => {
        listar();
        let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nom);
        if(!encontrado){
            console.log('estudiante no existe');
        }else{
            encontrado[asignatura] = calificacion;
            guardar();
        }
    }

    const eliminar = (nom) => {
        listar();
        let nuevo = listaEstudiantes.filter(mat => mat.nombre != nom);
        if(nuevo.lenght != listaEstudiantes.lenght){
            console.log('ningun estudiante tiene el nombre indicado');
            console.log(nuevo);
        }else{
            listaEstudiantes = nuevo;
            guardar();
            } 
    }

    module.exports  = {
        crear,
        mostrar,
        mostrarest,
        mostrarmat,
        actualizar,
        eliminar
    }
