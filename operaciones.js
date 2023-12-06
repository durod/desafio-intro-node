const fs = require('fs');

const registrar = (nombre, edad, tipoAnimal, color, enfermedad) => {
    
    const citas = cargarCitas();

    // Crear una nueva cita
    const nuevaCita = {
        nombre,
        edad,
        tipoAnimal,
        color,
        enfermedad
    };

    // Agregar la nueva cita al arreglo de citas
    citas.push(nuevaCita);

    
    guardarCitas(citas);

    console.log('Cita registrada exitosamente.');
};

const leer = () => {
    const citas = cargarCitas();

    if (citas.length === 0) {
        console.log('No hay citas registradas.');
    } else {
        // Mostrar por consola los detalles de cada cita registrada
        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Tipo de animal: ${cita.tipoAnimal}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
            console.log('--------------------------');
        });
    }
};

const cargarCitas = () => {
    try {
        // cargar el contenido del archivo JSON
        const citasJSON = fs.readFileSync('citas.json', 'utf8');
        return JSON.parse(citasJSON);
    } catch (error) {
        // Si hay un error, retorna un arreglo vacío
        return [];
    }
};

const guardarCitas = (citas) => {
    // Convertir el arreglo de citas a formato JSON y guardarlo en el archivo
    const citasJSON = JSON.stringify(citas, null, 2);
    fs.writeFileSync('citas.json', citasJSON, 'utf8');
};

module.exports = { registrar, leer };

